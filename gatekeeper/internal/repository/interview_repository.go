package repository

import (
	"context"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/model"
)

type InterviewRepository interface {
	CreateInterview(ctx context.Context, interview *model.Interview) (*model.Interview, error)
}
