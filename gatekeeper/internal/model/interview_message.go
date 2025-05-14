package model

import (
	"github.com/google/uuid"
	"time"
)

type InterviewMessage struct {
	ID                  uuid.UUID            `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	ContextText         string               `gorm:"type:text;not null"`
	TipsText            string               `gorm:"type:text;not null;default:''"`
	TranslationText     string               `gorm:"type:text;not null;default:''"`
	TranslationLanguage LanguageCode         `gorm:"size:10;not null"`
	Role                InterviewMessageRole `gorm:"type:varchar(50);not null"`
	InterviewID         uuid.UUID            `gorm:"type:uuid;not null;index"`
	Interview           *Interview           `gorm:"foreignKey:InterviewID;constraint:OnDelete:CASCADE"`
	CreatedAt           time.Time            `gorm:"autoCreateTime"`
	UpdatedAt           time.Time            `gorm:"autoUpdateTime"`
}
