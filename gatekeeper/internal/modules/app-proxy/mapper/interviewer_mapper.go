package mapper

import (
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/model"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/app-proxy/dto"
)

func MapInterviewerModelToOutput(interviewer *model.Interviewer) *dto.InterviewerOutputDto {
	return &dto.InterviewerOutputDto{
		ID:        interviewer.ID,
		Name:      interviewer.Name,
		AvatarURL: interviewer.AvatarURL,
	}
}
