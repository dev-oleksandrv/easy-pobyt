package model

import (
	"database/sql/driver"
	"errors"
)

type QuizStatus string

const (
	QuizStatusPending   QuizStatus = "pending"
	QuizStatusActive    QuizStatus = "active"
	QuizStatusCompleted QuizStatus = "completed"
	QuizStatusAbandoned QuizStatus = "abandoned"
)

func (q *QuizStatus) Scan(value interface{}) error {
	strValue, ok := value.(string)
	if !ok {
		return errors.New("quiz status assertion to string failed")
	}

	switch strValue {
	case string(QuizStatusPending), string(QuizStatusActive), string(QuizStatusCompleted), string(QuizStatusAbandoned):
		*q = QuizStatus(strValue)
		return nil
	default:
		return errors.New("invalid quiz status value")
	}
}

func (q *QuizStatus) Value() (driver.Value, error) {
	switch *q {
	case QuizStatusPending, QuizStatusActive, QuizStatusCompleted, QuizStatusAbandoned:
		return string(*q), nil
	default:
		return nil, errors.New("invalid quiz status value")
	}
}
