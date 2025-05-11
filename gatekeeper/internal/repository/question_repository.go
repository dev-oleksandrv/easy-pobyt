package repository

import (
	"context"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/database"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/model"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/queries"
	"github.com/google/uuid"
)

type QuestionRepository interface {
	FindAll(ctx context.Context, opts ...queries.QuestionQueryOption) ([]*model.Question, error)
	FindByID(ctx context.Context, id uuid.UUID, opts ...queries.QuestionQueryOption) (*model.Question, error)
	Create(ctx context.Context, question *model.Question) (*model.Question, error)
	BatchCreate(ctx context.Context, questions []*model.Question) ([]*model.Question, error)
	Update(ctx context.Context, question *model.Question) (*model.Question, error)
	Delete(ctx context.Context, id uuid.UUID) error
}

type questionRepositoryImpl struct {
	db *database.PGQLDatabase
}

func NewQuestionRepository(db *database.PGQLDatabase) QuestionRepository {
	return &questionRepositoryImpl{db}
}

func (r *questionRepositoryImpl) FindAll(ctx context.Context, opts ...queries.QuestionQueryOption) ([]*model.Question, error) {
	var questions []*model.Question
	query := r.db.WithContext(ctx)

	for _, opt := range opts {
		query = opt(query)
	}

	if err := query.Find(&questions).Error; err != nil {
		return nil, err
	}

	return questions, nil
}

func (r *questionRepositoryImpl) FindByID(ctx context.Context, id uuid.UUID, opts ...queries.QuestionQueryOption) (*model.Question, error) {
	var question *model.Question
	query := r.db.WithContext(ctx)

	for _, opt := range opts {
		query = opt(query)
	}

	if err := query.First(&question, id).Error; err != nil {
		return nil, err
	}

	return question, nil
}

func (r *questionRepositoryImpl) Create(ctx context.Context, question *model.Question) (*model.Question, error) {
	tx := r.db.WithContext(ctx).Begin()
	if err := tx.Error; err != nil {
		return nil, err
	}

	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	if err := tx.Create(&question).Error; err != nil {
		tx.Rollback()
		return nil, err
	}

	if err := tx.Commit().Error; err != nil {
		return nil, err
	}

	return question, nil
}

func (r *questionRepositoryImpl) BatchCreate(ctx context.Context, questions []*model.Question) ([]*model.Question, error) {
	tx := r.db.WithContext(ctx).Begin()
	if err := tx.Error; err != nil {
		return nil, err
	}

	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	for _, question := range questions {
		if err := tx.Create(&question).Error; err != nil {
			tx.Rollback()
			return nil, err
		}
	}

	if err := tx.Commit().Error; err != nil {
		return nil, err
	}

	return questions, nil
}

func (r *questionRepositoryImpl) Update(ctx context.Context, question *model.Question) (*model.Question, error) {
	tx := r.db.WithContext(ctx).Begin()
	if err := tx.Error; err != nil {
		return nil, err
	}

	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	var existingQuestion model.Question
	if err := tx.First(&existingQuestion, question.ID).Error; err != nil {
		tx.Rollback()
		return nil, err
	}

	if err := tx.Model(&question).Omit("Contents", "Answers").Updates(question).Error; err != nil {
		tx.Rollback()
		return nil, err
	}

	if len(question.Contents) > 0 {
		if err := tx.Where("question_id = ?", question.ID).Delete(&model.QuestionContent{}).Error; err != nil {
			tx.Rollback()
			return nil, err
		}

		for i := range question.Contents {
			question.Contents[i].QuestionID = question.ID
			if err := tx.Create(&question.Contents[i]).Error; err != nil {
				tx.Rollback()
				return nil, err
			}
		}
	}

	if len(question.Answers) > 0 {
		if err := tx.Where("question_id = ?", question.ID).Delete(&model.QuestionAnswer{}).Error; err != nil {
			tx.Rollback()
			return nil, err
		}

		for i := range question.Answers {
			question.Answers[i].QuestionID = question.ID
			if err := tx.Create(&question.Answers[i]).Error; err != nil {
				tx.Rollback()
				return nil, err
			}
		}
	}

	var updatedQuestion model.Question
	if err := tx.Preload("Contents").Preload("Answers").First(&updatedQuestion, question.ID).Error; err != nil {
		tx.Rollback()
		return nil, err
	}

	if err := tx.Commit().Error; err != nil {
		return nil, err
	}

	return &updatedQuestion, nil
}

func (r *questionRepositoryImpl) Delete(ctx context.Context, id uuid.UUID) error {
	tx := r.db.WithContext(ctx).Begin()
	if err := tx.Error; err != nil {
		return err
	}

	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	if err := tx.Delete(&model.Question{}, id).Error; err != nil {
		tx.Rollback()
		return err
	}

	if err := tx.Commit().Error; err != nil {
		return err
	}

	return nil
}
