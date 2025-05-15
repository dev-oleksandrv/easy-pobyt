package service

import (
	"context"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/model"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/app-proxy/dto"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/app-proxy/mapper"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/queries"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/repository"
	"github.com/google/uuid"
)

type InterviewService interface {
	Create(ctx context.Context, input *dto.InterviewInputDto) (*dto.InterviewOutputDto, error)
	FindByID(ctx context.Context, id uuid.UUID) (*dto.InterviewOutputDto, error)
}

type interviewServiceImpl struct {
	interviewRepository repository.InterviewRepository
}

func NewInterviewService(interviewRepository repository.InterviewRepository) InterviewService {
	return &interviewServiceImpl{
		interviewRepository: interviewRepository,
	}
}

func (s *interviewServiceImpl) FindByID(ctx context.Context, id uuid.UUID) (*dto.InterviewOutputDto, error) {
	interview, err := s.interviewRepository.FindByID(
		ctx,
		id,
		queries.WithInterviewer(),
		queries.WithMessages(),
		queries.WithResult(),
	)
	if err != nil {
		return nil, err
	}

	return mapper.MapInterviewModelToOutput(interview), nil
}

func (s *interviewServiceImpl) Create(ctx context.Context, input *dto.InterviewInputDto) (*dto.InterviewOutputDto, error) {
	interview, err := s.interviewRepository.Create(ctx, &model.Interview{
		Status:        model.InterviewStatusPending,
		ThreadID:      input.ThreadID,
		InterviewerID: input.InterviewerID,
	})
	if err != nil {
		return nil, err
	}

	return mapper.MapInterviewModelToOutput(interview), nil
}
