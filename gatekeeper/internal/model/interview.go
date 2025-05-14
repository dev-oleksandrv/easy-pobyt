package model

import (
	"github.com/google/uuid"
	"time"
)

type Interview struct {
	ID          uuid.UUID          `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	Status      InterviewStatus    `gorm:"type:varchar(50);not null;default:'pending'"`
	Thread      InterviewThread    `gorm:"foreignKey:InterviewID;constraint:OnDelete:CASCADE"`
	Interviewer *Interviewer       `gorm:"many2many:interview_interviewers"`
	Result      *InterviewResult   `gorm:"foreignKey:InterviewID;constraint:OnDelete:CASCADE"`
	Messages    []InterviewMessage `gorm:"foreignKey:InterviewID;constraint:OnDelete:CASCADE"`
	CreatedAt   time.Time          `gorm:"autoCreateTime"`
	UpdatedAt   time.Time          `gorm:"autoUpdateTime"`
}
