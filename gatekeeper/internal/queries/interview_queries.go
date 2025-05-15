package queries

import "gorm.io/gorm"

type InterviewQueryOption func(*gorm.DB) *gorm.DB

func WithInterviewer() InterviewQueryOption {
	return func(db *gorm.DB) *gorm.DB {
		return db.Preload("Interviewer")
	}
}

func WithMessages() InterviewQueryOption {
	return func(db *gorm.DB) *gorm.DB {
		return db.Preload("Messages")
	}
}

func WithResult() InterviewQueryOption {
	return func(db *gorm.DB) *gorm.DB {
		return db.Preload("Result")
	}
}
