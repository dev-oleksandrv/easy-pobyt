package model

import (
	"github.com/google/uuid"
	"time"
)

type InterviewThread struct {
	ID          uuid.UUID  `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	InterviewID uuid.UUID  `gorm:"type:uuid;not null;index"`
	Interview   *Interview `gorm:"foreignKey:InterviewID;constraint:OnDelete:CASCADE"`
	ThreadID    string     `gorm:"type:varchar(255);not null"`
	CreatedAt   time.Time  `gorm:"autoCreateTime"`
	UpdatedAt   time.Time  `gorm:"autoUpdateTime"`
}
