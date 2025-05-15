package mapper

import (
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/model"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/backoffice-proxy/dto"
)

func MapInterviewerInputToModel(input *dto.InterviewerInputDto, existing *model.Interviewer) *model.Interviewer {
	if existing == nil {
		existing = &model.Interviewer{}
	}

	if input.Name != "" {
		existing.Name = input.Name
	}

	if input.AvatarURL != "" {
		existing.AvatarURL = input.AvatarURL
	}

	if input.EntryMessage != "" {
		existing.EntryMessage = input.EntryMessage
	}

	return existing
}

func MapInterviewerModelToOutput(interviewer *model.Interviewer) *dto.InterviewerOutputDto {
	return &dto.InterviewerOutputDto{
		ID:           interviewer.ID.String(),
		Name:         interviewer.Name,
		AvatarURL:    interviewer.AvatarURL,
		EntryMessage: interviewer.EntryMessage,
		CreatedAt:    interviewer.CreatedAt.Format("2006-01-02 15:04:05"),
		UpdatedAt:    interviewer.UpdatedAt.Format("2006-01-02 15:04:05"),
	}
}

func MapInterviewerModelToOutputList(interviewers []*model.Interviewer) []*dto.InterviewerOutputDto {
	output := make([]*dto.InterviewerOutputDto, len(interviewers))
	for i, interviewer := range interviewers {
		output[i] = MapInterviewerModelToOutput(interviewer)
	}
	return output
}
