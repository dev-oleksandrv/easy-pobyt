package dto

import "github.com/google/uuid"

type InterviewInputDto struct {
	InterviewerID uuid.UUID `json:"interviewer_id"`
	ThreadID      string    `json:"thread_id"`
}

type InterviewResultOutputDto struct {
	ID                   uuid.UUID `json:"id"`
	TotalScore           int       `json:"total_score"`
	TotalFeedbackText    string    `json:"total_feedback_text"`
	GrammarScore         int       `json:"grammar_score"`
	GrammarFeedbackText  string    `json:"grammar_feedback_text"`
	AccuracyScore        int       `json:"accuracy_score"`
	AccuracyFeedbackText string    `json:"accuracy_feedback_text"`
}

type InterviewMessageOutputDto struct {
	ID                  uuid.UUID `json:"id"`
	ContentText         string    `json:"content_text"`
	TipsText            string    `json:"tips_text"`
	TranslationText     string    `json:"translation_text"`
	TranslationLanguage string    `json:"translation_language"`
	Role                string    `json:"role"`
	CreatedAt           string    `json:"created_at"`
}

type InterviewOutputDto struct {
	ID          uuid.UUID                    `json:"id"`
	Status      string                       `json:"status"`
	Interviewer *InterviewerOutputDto        `json:"interviewer"`
	Result      *InterviewResultOutputDto    `json:"result"`
	Messages    []*InterviewMessageOutputDto `json:"messages"`
}
