package service

import (
	"context"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/app-proxy/dto"
	"github.com/sashabaranov/go-openai"
)

type AIService interface {
	CreateThread(ctx context.Context, entryMessage string) (*dto.AIThreadOutputDto, error)
}

type aiServiceImpl struct {
	openaiClient *openai.Client
}

func NewAIService(openaiClient *openai.Client) AIService {
	return &aiServiceImpl{
		openaiClient: openaiClient,
	}
}

func (s *aiServiceImpl) CreateThread(ctx context.Context, entryMessage string) (*dto.AIThreadOutputDto, error) {
	aiThread, err := s.openaiClient.CreateThread(ctx, openai.ThreadRequest{
		Messages: []openai.ThreadMessage{
			{
				Role:    openai.ThreadMessageRoleAssistant,
				Content: entryMessage,
			},
		},
	})
	if err != nil {
		return nil, err
	}

	threadOutput := &dto.AIThreadOutputDto{
		ID: aiThread.ID,
	}

	return threadOutput, nil
}
