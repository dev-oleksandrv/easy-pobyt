package model

import (
	"github.com/google/uuid"
	"time"
)

type Quiz struct {
	ID        uuid.UUID  `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	Status    QuizStatus `gorm:"type:varchar(50);not null;default:'pending'"`
	CreatorID *uuid.UUID `gorm:"type:uuid;index"`
	Questions []Question `gorm:"many2many:quiz_questions;"`
	CreatedAt time.Time  `gorm:"autoCreateTime"`
	UpdatedAt time.Time  `gorm:"autoUpdateTime"`
}
