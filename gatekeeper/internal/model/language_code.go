package model

import (
	"database/sql/driver"
	"errors"
)

type LanguageCode string

const (
	LanguageCodePolish     LanguageCode = "pl"
	LanguageCodeUkrainian  LanguageCode = "uk"
	LanguageCodeEnglish    LanguageCode = "en"
	LanguageCodeBelarusian LanguageCode = "be"
)

func (q *LanguageCode) Scan(value interface{}) error {
	strValue, ok := value.(string)
	if !ok {
		return errors.New("language code type assertion to string failed")
	}

	switch strValue {
	case string(LanguageCodePolish), string(LanguageCodeUkrainian), string(LanguageCodeEnglish), string(LanguageCodeBelarusian):
		*q = LanguageCode(strValue)
		return nil
	default:
		return errors.New("invalid language code value")
	}
}

func (q *LanguageCode) Value() (driver.Value, error) {
	switch *q {
	case LanguageCodePolish, LanguageCodeUkrainian, LanguageCodeEnglish, LanguageCodeBelarusian:
		return string(*q), nil
	default:
		return nil, errors.New("invalid language code value")
	}
}
