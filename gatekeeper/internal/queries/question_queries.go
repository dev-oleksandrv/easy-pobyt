package queries

import (
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/model"
	"gorm.io/gorm"
)

type QuestionQueryOption func(*gorm.DB) *gorm.DB

func WithContents() QuestionQueryOption {
	return func(db *gorm.DB) *gorm.DB {
		return db.Preload("Contents")
	}
}

func WithContentByLanguage(language model.LanguageCode) QuestionQueryOption {
	return func(db *gorm.DB) *gorm.DB {
		return db.Preload("Contents", "lang = ?", language)
	}
}

func WithAnswers() QuestionQueryOption {
	return func(db *gorm.DB) *gorm.DB {
		return db.Preload("Answers")
	}
}

func WithAnswerByLanguage(language model.LanguageCode) QuestionQueryOption {
	return func(db *gorm.DB) *gorm.DB {
		return db.Preload("Answers", "lang = ?", language)
	}
}
