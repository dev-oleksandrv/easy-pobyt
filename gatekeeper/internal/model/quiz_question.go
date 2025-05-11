package model

import (
	"github.com/google/uuid"
	"time"
)

type QuizQuestion struct {
	QuizID          uuid.UUID `gorm:"type:uuid;primaryKey"`
	QuestionID      uuid.UUID `gorm:"type:uuid;primaryKey"`
	CorrectAnswered bool      `gorm:"not null;default:false"`
	CreatedAt       time.Time `gorm:"autoCreateTime"`
}
