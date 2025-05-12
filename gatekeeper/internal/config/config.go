package config

type AppProxyConfig struct {
	Port int
	Env  string
}

type AdminProxyConfig struct {
	Port int
	Env  string
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

type AdminAIConfig struct {
	APIKey        string
	QGAssistantID string
	QGThreadID    string
}

type WebAdminConfig struct {
	ClientUrl string
}

type Config struct {
	AppProxy   AppProxyConfig
	AdminProxy AdminProxyConfig
	Postgres   PostgresConfig
	AppAuth    AppAuthConfig
	AdminAuth  AdminAuthConfig
	AdminAI    AdminAIConfig
	WebAdmin   WebAdminConfig
}
