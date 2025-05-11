package dto

import "github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/model"

type CreateQuestionAnswerInputDto struct {
	Text      string `json:"text"`
	IsCorrect bool   `json:"is_correct"`
}

type CreateQuestionContentInputDto struct {
	Text        string  `json:"text"`
	Explanation string  `json:"explanation"`
	ImageURL    *string `json:"image_url"`
}

type CreateQuestionContentGroupInputDto struct {
	Lang    model.LanguageCode             `json:"lang"`
	Content CreateQuestionContentInputDto  `json:"content"`
	Answers []CreateQuestionAnswerInputDto `json:"answers"`
}

type CreateQuestionInputDto struct {
	Type     model.QuestionType                   `json:"type"`
	Contents []CreateQuestionContentGroupInputDto `json:"contents"`
}

type BatchCreateQuestionInputDto struct {
	Questions []CreateQuestionInputDto `json:"questions"`
}
