package model

import (
	"database/sql/driver"
	"errors"
)

type QuestionType string

const (
	QuestionTypeFreeInput QuestionType = "free-input"
	QuestionTypeSelectOne QuestionType = "select-one"
)

func (q *QuestionType) Scan(value interface{}) error {
	strValue, ok := value.(string)
	if !ok {
		return errors.New("question type type assertion to string failed")
	}

	switch strValue {
	case string(QuestionTypeSelectOne), string(QuestionTypeFreeInput):
		*q = QuestionType(strValue)
		return nil
	default:
		return errors.New("invalid question type value")
	}
}

func (q *QuestionType) Value() (driver.Value, error) {
	switch *q {
	case QuestionTypeSelectOne, QuestionTypeFreeInput:
		return string(*q), nil
	default:
		return nil, errors.New("invalid question type value")
	}
}
