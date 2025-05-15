package config

type AppProxyConfig struct {
	Port int
	Env  string
}

type AdminProxyConfig struct {
	Port int
	Env  string
}

type AIConfig struct {
	APIKey                         string
	QuestionsGenerationAssistantID string
	QuestionsGenerationThreadID    string
	InterviewAssistantID           string
}

type PostgresConfig struct {
	Url                string
	AutoMigrateEnabled bool
}

type GoogleAuthConfig struct {
	ClientID string
	Secret   string
}

type AppAuthConfig struct {
	Secret string
	Key    string
	Google GoogleAuthConfig
}

type AdminAuthConfig struct {
	Secret string
}

type WebAdminConfig struct {
	ClientUrl string
}

type WebClientConfig struct {
	Url string
}

type BackofficeClientConfig struct {
	Url string
}

type Config struct {
	AppProxy         AppProxyConfig
	AdminProxy       AdminProxyConfig
	AI               AIConfig
	Postgres         PostgresConfig
	AppAuth          AppAuthConfig
	AdminAuth        AdminAuthConfig
	WebClient        WebClientConfig
	BackofficeClient BackofficeClientConfig
}
