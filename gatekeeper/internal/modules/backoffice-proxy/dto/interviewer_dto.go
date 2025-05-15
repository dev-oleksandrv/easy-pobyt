package dto

type InterviewerInputDto struct {
	Name         string `json:"name"`
	AvatarURL    string `json:"avatar_url"`
	EntryMessage string `json:"entry_message"`
}

type InterviewerOutputDto struct {
	ID           string `json:"id"`
	Name         string `json:"name"`
	AvatarURL    string `json:"avatar_url"`
	EntryMessage string `json:"entry_message"`
	CreatedAt    string `json:"created_at"`
	UpdatedAt    string `json:"updated_at"`
}
