package dto

type AIGenerateQuestionsInputDto struct {
	Langs []string `json:"langs"`
	Limit int      `json:"limit"`
}
