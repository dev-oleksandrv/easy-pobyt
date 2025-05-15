package service

import (
	"context"
	"errors"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/app-proxy/dto"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/app-proxy/mapper"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/repository"
)

type InterviewerService interface {
	FindRandom(ctx context.Context) (*dto.InterviewerOutputDto, error)
}

type interviewerServiceImpl struct {
	interviewerRepository repository.InterviewerRepository
}

func NewInterviewerService(interviewerRepository repository.InterviewerRepository) InterviewerService {
	return &interviewerServiceImpl{
		interviewerRepository: interviewerRepository,
	}
}

func (s *interviewerServiceImpl) FindRandom(ctx context.Context) (*dto.InterviewerOutputDto, error) {
	interviewer, err := s.interviewerRepository.FindRandom(ctx)
	if err != nil {
		return nil, err
	}

	if interviewer == nil {
		return nil, errors.New("no interviewer found")
	}

	return mapper.MapInterviewerModelToOutput(interviewer), nil
}
