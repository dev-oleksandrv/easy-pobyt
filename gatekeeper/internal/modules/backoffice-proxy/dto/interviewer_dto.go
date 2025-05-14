package dto

type InterviewerInputDto struct {
	Name      string `json:"name"`
	AvatarURL string `json:"avatar_url"`
}

type InterviewerOutputDto struct {
	ID        string `json:"id"`
	Name      string `json:"name"`
	AvatarURL string `json:"avatar_url"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`
}
