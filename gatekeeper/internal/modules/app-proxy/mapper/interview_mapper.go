package mapper

import (
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/model"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/app-proxy/dto"
)

func MapInterviewResultModelToOutput(interviewResult *model.InterviewResult) *dto.InterviewResultOutputDto {
	return &dto.InterviewResultOutputDto{
		TotalScore:           interviewResult.TotalScore,
		TotalFeedbackText:    interviewResult.TotalFeedbackText,
		GrammarScore:         interviewResult.GrammarScore,
		GrammarFeedbackText:  interviewResult.GrammarFeedbackText,
		AccuracyScore:        interviewResult.AccuracyScore,
		AccuracyFeedbackText: interviewResult.AccuracyFeedbackText,
	}
}

func MapInterviewMessageModelToOutput(interviewMessage *model.InterviewMessage) *dto.InterviewMessageOutputDto {
	return &dto.InterviewMessageOutputDto{
		ID:                  interviewMessage.ID,
		ContentText:         interviewMessage.ContentText,
		TipsText:            interviewMessage.TipsText,
		TranslationText:     interviewMessage.TranslationText,
		TranslationLanguage: string(interviewMessage.TranslationLanguage),
		Role:                string(interviewMessage.Role),
		CreatedAt:           interviewMessage.CreatedAt.Format("2006-01-02 15:04:05"),
	}
}

func MapInterviewMessageModelToOutputList(interviewMessages []*model.InterviewMessage) []*dto.InterviewMessageOutputDto {
	messages := make([]*dto.InterviewMessageOutputDto, len(interviewMessages))
	for i, message := range interviewMessages {
		messages[i] = MapInterviewMessageModelToOutput(message)
	}
	return messages
}

func MapInterviewModelToOutput(interview *model.Interview) *dto.InterviewOutputDto {
	output := &dto.InterviewOutputDto{
		ID:     interview.ID,
		Status: string(interview.Status),
	}

	if interview.Interviewer != nil {
		output.Interviewer = MapInterviewerModelToOutput(interview.Interviewer)
	}

	if interview.Result != nil {
		output.Result = MapInterviewResultModelToOutput(interview.Result)
	}

	if interview.Messages != nil && len(interview.Messages) > 0 {
		output.Messages = MapInterviewMessageModelToOutputList(interview.Messages)
	}

	return output
}
