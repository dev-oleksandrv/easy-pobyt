package model

import (
	"github.com/google/uuid"
	"time"
)

type QuestionAnswer struct {
	ID         uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	QuestionID uuid.UUID `gorm:"type:uuid;not null;index"`
	Question   *Question `gorm:"foreignKey:QuestionID;constraint:OnDelete:CASCADE"`
	Text       string    `gorm:"type:text;not null"`
	IsCorrect  *bool     `gorm:"not null;default:false"`
	Lang       string    `gorm:"size:10;not null"`
	CreatedAt  time.Time `gorm:"autoCreateTime"`
	UpdatedAt  time.Time `gorm:"autoUpdateTime"`
}
