package service

import (
	"context"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/backoffice-proxy/dto"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/backoffice-proxy/mapper"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/queries"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/repository"
	"github.com/google/uuid"
)

type QuestionService interface {
	GetAll(ctx context.Context) ([]dto.QuestionOutputDto, error)
	GetByID(ctx context.Context, id uuid.UUID) (*dto.QuestionOutputDto, error)
	Create(ctx context.Context, input *dto.QuestionInputDto) (*dto.QuestionOutputDto, error)
	BatchCreate(ctx context.Context, input *dto.QuestionBatchInputDto) ([]dto.QuestionOutputDto, error)
	Update(ctx context.Context, id uuid.UUID, input *dto.QuestionInputDto) (*dto.QuestionOutputDto, error)
	Delete(ctx context.Context, id uuid.UUID) error
}

type questionServiceImpl struct {
	questionRepository repository.QuestionRepository
}

func NewQuestionService(questionRepository repository.QuestionRepository) QuestionService {
	return &questionServiceImpl{questionRepository}
}

func (s *questionServiceImpl) GetAll(ctx context.Context) ([]dto.QuestionOutputDto, error) {
	questions, err := s.questionRepository.FindAll(ctx, queries.WithContents(), queries.WithAnswers())
	if err != nil {
		return nil, err
	}

	return mapper.MapQuestionModelToOutputDtoList(questions), nil
}

func (s *questionServiceImpl) GetByID(ctx context.Context, id uuid.UUID) (*dto.QuestionOutputDto, error) {
	question, err := s.questionRepository.FindByID(ctx, id, queries.WithContents(), queries.WithAnswers())
	if err != nil {
		return nil, err
	}

	return mapper.MapQuestionModelToOutputDto(question), nil
}

func (s *questionServiceImpl) Create(ctx context.Context, input *dto.QuestionInputDto) (*dto.QuestionOutputDto, error) {
	question, err := s.questionRepository.Create(ctx, mapper.MapQuestionInputDtoToModel(input, nil))
	if err != nil {
		return nil, err
	}

	return mapper.MapQuestionModelToOutputDto(question), nil
}

func (s *questionServiceImpl) BatchCreate(ctx context.Context, input *dto.QuestionBatchInputDto) ([]dto.QuestionOutputDto, error) {
	questions, err := s.questionRepository.BatchCreate(ctx, mapper.MapQuestionInputDtoToModelList(*input))
	if err != nil {
		return nil, err
	}

	return mapper.MapQuestionModelToOutputDtoList(questions), nil
}

func (s *questionServiceImpl) Update(ctx context.Context, id uuid.UUID, input *dto.QuestionInputDto) (*dto.QuestionOutputDto, error) {
	existingQuestion, err := s.questionRepository.FindByID(ctx, id, queries.WithContents(), queries.WithAnswers())
	if err != nil {
		return nil, err
	}

	question, err := s.questionRepository.Update(ctx, mapper.MapQuestionInputDtoToModel(input, existingQuestion))
	if err != nil {
		return nil, err
	}

	return mapper.MapQuestionModelToOutputDto(question), nil
}

func (s *questionServiceImpl) Delete(ctx context.Context, id uuid.UUID) error {
	return s.questionRepository.Delete(ctx, id)
}
