package dto

import "github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/model"

type QuestionContentOutputDto struct {
	Text        string  `json:"text"`
	Explanation string  `json:"explanation"`
	ImageURL    *string `json:"image_url"`
}

type QuestionAnswerOutputDto struct {
	Text      string `json:"text"`
	IsCorrect bool   `json:"is_correct"`
}

type QuestionContentGroupOutputDto struct {
	Lang    string                    `json:"lang"`
	Content QuestionContentOutputDto  `json:"content"`
	Answers []QuestionAnswerOutputDto `json:"answers"`
}

type QuestionOutputDto struct {
	ID        string                          `json:"id"`
	Type      string                          `json:"type"`
	Contents  []QuestionContentGroupOutputDto `json:"contents"`
	CreatedAt string                          `json:"created_at"`
	UpdatedAt string                          `json:"updated_at"`
}

type QuestionContentInputDto struct {
	Text        string  `json:"text"`
	Explanation string  `json:"explanation"`
	ImageURL    *string `json:"image_url"`
}

type QuestionAnswerInputDto struct {
	Text      string `json:"text"`
	IsCorrect bool   `json:"is_correct"`
}

type QuestionContentGroupInputDto struct {
	Lang    model.LanguageCode       `json:"lang"`
	Content QuestionContentInputDto  `json:"content"`
	Answers []QuestionAnswerInputDto `json:"answers"`
}

type QuestionInputDto struct {
	Type     model.QuestionType             `json:"type"`
	Contents []QuestionContentGroupInputDto `json:"contents"`
}

type QuestionBatchInputDto struct {
	Questions []QuestionInputDto `json:"questions"`
}
