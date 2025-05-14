package model

import "github.com/google/uuid"

type InterviewInterviewer struct {
	InterviewID   uuid.UUID   `gorm:"type:uuid;primaryKey"`
	InterviewerID uuid.UUID   `gorm:"type:uuid;primaryKey"`
	Interview     Interview   `gorm:"foreignKey:InterviewID;constraint:OnDelete:CASCADE"`
	Interviewer   Interviewer `gorm:"foreignKey:InterviewerID;constraint:OnDelete:CASCADE"`
}

func (InterviewInterviewer) TableName() string {
	return "interview_interviewers"
}
