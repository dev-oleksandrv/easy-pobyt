package service

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/config"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/backoffice-proxy/dto"
	openai "github.com/sashabaranov/go-openai"
	"log/slog"
	"strings"
	"time"
)

type AIService interface {
	GenerateQuestions(ctx context.Context, input *dto.AIGenerateQuestionsInputDto) (*dto.QuestionBatchInputDto, error)
}

type aiServiceImpl struct {
	config       *config.Config
	openaiClient *openai.Client
}

func NewAIService(config *config.Config, openaiClient *openai.Client) AIService {
	return &aiServiceImpl{config, openaiClient}
}

func (s *aiServiceImpl) GenerateQuestions(ctx context.Context, input *dto.AIGenerateQuestionsInputDto) (*dto.QuestionBatchInputDto, error) {
	prompt := fmt.Sprintf("langs=%s;limit=%d", strings.Join(input.Langs, ","), input.Limit)

	if _, err := s.openaiClient.CreateMessage(ctx, s.config.AdminAI.QGThreadID, openai.MessageRequest{
		Role:    openai.ChatMessageRoleUser,
		Content: prompt,
	}); err != nil {
		return nil, err
	}

	run, err := s.openaiClient.CreateRun(ctx, s.config.AdminAI.QGThreadID, openai.RunRequest{
		AssistantID: s.config.AdminAI.QGAssistantID,
	})
	if err != nil {
		return nil, err
	}

	if _, err := pollRunStatus(ctx, s.openaiClient, s.config.AdminAI.QGThreadID, run.ID); err != nil {
		return nil, err
	}

	limit, order := 1, "desc"
	msgResponse, err := s.openaiClient.ListMessage(ctx, s.config.AdminAI.QGThreadID, &limit, &order, nil, nil, &run.ID)
	if err != nil {
		return nil, err
	}

	msgContent := msgResponse.Messages[0].Content[0].Text.Value
	if msgContent == "" {
		return nil, fmt.Errorf("empty message content")
	}

	var output *dto.QuestionBatchInputDto
	if err := json.Unmarshal([]byte(msgContent), &output); err != nil {
		return nil, err
	}

	return output, nil
}

func pollRunStatus(ctx context.Context, client *openai.Client, threadID, runID string) (*openai.Run, error) {
	interval := 2

	for {
		slog.Info("polling run status", "thread_id", threadID, "run_id", runID, "interval", interval)

		run, err := client.RetrieveRun(ctx, threadID, runID)
		if err != nil {
			return nil, fmt.Errorf("failed to get run status: %v", err)
		}

		slog.Info("run status", "status", run.Status)

		switch run.Status {
		case openai.RunStatusCompleted:
			return &run, nil
		case openai.RunStatusFailed, openai.RunStatusCancelled:
			return nil, fmt.Errorf("run failed or was cancelled: %s", run.Status)
		}

		time.Sleep(time.Second * time.Duration(interval))

		if interval < 5 {
			interval += 1
		}
	}
}
