package model

import (
	"github.com/google/uuid"
	"time"
)

type QuestionContent struct {
	ID          uuid.UUID    `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	QuestionID  uuid.UUID    `gorm:"type:uuid;not null;index"`
	Question    *Question    `gorm:"foreignKey:QuestionID;constraint:OnDelete:CASCADE"`
	Text        string       `gorm:"type:text;not null"`
	Explanation string       `gorm:"type:text"`
	ImageURL    *string      `gorm:"size:500"`
	Lang        LanguageCode `gorm:"size:10;not null"`
	CreatedAt   time.Time    `gorm:"autoCreateTime"`
	UpdatedAt   time.Time    `gorm:"autoUpdateTime"`
}
