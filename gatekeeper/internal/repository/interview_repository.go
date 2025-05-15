package repository

import (
	"context"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/database"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/model"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/queries"
	"github.com/google/uuid"
)

type InterviewRepository interface {
	FindByID(ctx context.Context, id uuid.UUID, opts ...queries.InterviewQueryOption) (*model.Interview, error)
	Create(ctx context.Context, interview *model.Interview) (*model.Interview, error)
	CreateMessage(ctx context.Context, interviewMessage *model.InterviewMessage) (*model.InterviewMessage, error)
	CreateResult(ctx context.Context, interviewResult *model.InterviewResult) (*model.InterviewResult, error)
}

type interviewRepositoryImpl struct {
	db *database.PGQLDatabase
}

func NewInterviewRepository(db *database.PGQLDatabase) InterviewRepository {
	return &interviewRepositoryImpl{
		db: db,
	}
}

func (r *interviewRepositoryImpl) FindByID(ctx context.Context, id uuid.UUID, opts ...queries.InterviewQueryOption) (*model.Interview, error) {
	var interview *model.Interview
	query := r.db.WithContext(ctx)

	for _, opt := range opts {
		query = opt(query)
	}

	if err := query.First(&interview, "id = ?", id).Error; err != nil {
		return nil, err
	}

	return interview, nil
}

func (r *interviewRepositoryImpl) Create(ctx context.Context, interview *model.Interview) (*model.Interview, error) {
	if err := r.db.WithContext(ctx).Create(interview).Error; err != nil {
		return nil, err
	}
	return interview, nil
}

func (r *interviewRepositoryImpl) CreateMessage(ctx context.Context, interviewMessage *model.InterviewMessage) (*model.InterviewMessage, error) {
	if err := r.db.WithContext(ctx).Create(interviewMessage).Error; err != nil {
		return nil, err
	}
	return interviewMessage, nil
}

func (r *interviewRepositoryImpl) CreateResult(ctx context.Context, interviewResult *model.InterviewResult) (*model.InterviewResult, error) {
	if err := r.db.WithContext(ctx).Create(interviewResult).Error; err != nil {
		return nil, err
	}
	return interviewResult, nil
}
