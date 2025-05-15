package dto

import "github.com/google/uuid"

type InterviewerOutputDto struct {
	ID        uuid.UUID `json:"id"`
	Name      string    `json:"name"`
	AvatarURL string    `json:"avatar_url"`
}

type InterviewInterviewerRelationInputDto struct {
	InterviewID   uuid.UUID `json:"interview_id"`
	InterviewerID uuid.UUID `json:"interviewer_id"`
}

type InterviewInterviewerRelationOutputDto struct {
	InterviewID   uuid.UUID `json:"interview_id"`
	InterviewerID uuid.UUID `json:"interviewer_id"`
}
