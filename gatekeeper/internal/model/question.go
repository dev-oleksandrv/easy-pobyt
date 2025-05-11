package model

import (
	"github.com/google/uuid"
	"time"
)

type Question struct {
	ID        uuid.UUID    `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	Type      QuestionType `gorm:"size:255;not null"`
	CreatedAt time.Time    `gorm:"autoCreateTime"`
	UpdatedAt time.Time    `gorm:"autoUpdateTime"`
}
