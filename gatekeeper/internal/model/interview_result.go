package model

import (
	"github.com/google/uuid"
	"time"
)

type InterviewResult struct {
	ID                   uuid.UUID  `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	TotalScore           int        `gorm:"not null;default:0"`
	TotalFeedbackText    string     `gorm:"type:text;not null;default:''"`
	GrammarScore         int        `gorm:"not null;default:0"`
	GrammarFeedbackText  string     `gorm:"type:text;not null;default:''"`
	AccuracyScore        int        `gorm:"not null;default:0"`
	AccuracyFeedbackText string     `gorm:"type:text;not null;default:''"`
	InterviewID          uuid.UUID  `gorm:"type:uuid;unique;index"`
	Interview            *Interview `gorm:"foreignKey:InterviewID;constraint:OnDelete:CASCADE"`
	CreatedAt            time.Time  `gorm:"autoCreateTime"`
	UpdatedAt            time.Time  `gorm:"autoUpdateTime"`
}
