package mapper

import (
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/model"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/backoffice-proxy/dto"
)

func MapQuestionModelToContentGroupOutputDtoList(question *model.Question) []dto.QuestionContentGroupOutputDto {
	groupedAnswersByLang := make(map[model.LanguageCode][]model.QuestionAnswer)
	for _, answer := range question.Answers {
		groupedAnswersByLang[answer.Lang] = append(groupedAnswersByLang[answer.Lang], answer)
	}

	contentGroupList := make([]dto.QuestionContentGroupOutputDto, len(question.Contents))
	for i, content := range question.Contents {
		var answers []dto.QuestionAnswerOutputDto
		for _, answer := range groupedAnswersByLang[content.Lang] {
			answers = append(answers, dto.QuestionAnswerOutputDto{
				Text:      answer.Text,
				IsCorrect: answer.IsCorrect,
			})
		}

		contentGroup := dto.QuestionContentGroupOutputDto{
			Lang: string(content.Lang),
			Content: dto.QuestionContentOutputDto{
				Text:        content.Text,
				Explanation: content.Explanation,
				ImageURL:    content.ImageURL,
			},
			Answers: answers,
		}

		contentGroupList[i] = contentGroup
	}

	return contentGroupList
}

func MapQuestionModelToOutputDto(question *model.Question) *dto.QuestionOutputDto {
	return &dto.QuestionOutputDto{
		ID:        question.ID.String(),
		Type:      string(question.Type),
		Contents:  MapQuestionModelToContentGroupOutputDtoList(question),
		CreatedAt: question.CreatedAt.Format("2006-01-02 15:04:05"),
		UpdatedAt: question.UpdatedAt.Format("2006-01-02 15:04:05"),
	}
}

func MapQuestionModelToOutputDtoList(questions []*model.Question) []dto.QuestionOutputDto {
	questionList := make([]dto.QuestionOutputDto, len(questions))
	for i, question := range questions {
		questionList[i] = *MapQuestionModelToOutputDto(question)
	}
	return questionList
}

func MapQuestionInputDtoToModel(input *dto.QuestionInputDto, existing *model.Question) *model.Question {
	if existing == nil {
		existing = &model.Question{
			Contents: []model.QuestionContent{},
			Answers:  []model.QuestionAnswer{},
		}
	} else {
		existing.Contents = []model.QuestionContent{}
		existing.Answers = []model.QuestionAnswer{}
	}

	if input.Type != "" {
		existing.Type = input.Type
	}

	if len(input.Contents) > 0 {
		for _, inputContent := range input.Contents {
			existing.Contents = append(existing.Contents, model.QuestionContent{
				Text:        inputContent.Content.Text,
				Explanation: inputContent.Content.Explanation,
				ImageURL:    inputContent.Content.ImageURL,
				Lang:        inputContent.Lang,
			})

			for _, answerContent := range inputContent.Answers {
				existing.Answers = append(existing.Answers, model.QuestionAnswer{
					Text:      answerContent.Text,
					IsCorrect: answerContent.IsCorrect,
					Lang:      inputContent.Lang,
				})
			}

		}
	}

	return existing
}

func MapQuestionInputDtoToModelList(input dto.QuestionBatchInputDto) []*model.Question {
	models := make([]*model.Question, len(input.Questions))
	for i, inputQuestion := range input.Questions {
		models[i] = MapQuestionInputDtoToModel(&inputQuestion, nil)
	}
	return models
}
