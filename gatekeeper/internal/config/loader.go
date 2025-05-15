package config

import (
	"github.com/joho/godotenv"
	"github.com/spf13/viper"
	"log/slog"
)

func LoadConfig() (*Config, error) {
	if err := godotenv.Load(".env.local", ".env"); err != nil {
		slog.Warn("cannot read config", "error", err)
	}

	viper.AutomaticEnv()

	config := new(Config)

	config.AppProxy.Port = viper.GetInt("APP_PROXY_PORT")
	config.AppProxy.Env = viper.GetString("APP_PROXY_ENV")
	config.AppAuth.Secret = viper.GetString("APP_AUTH_SECRET")
	config.AppAuth.Key = viper.GetString("APP_AUTH_KEY")
	config.AppAuth.Google.ClientID = viper.GetString("APP_AUTH_GOOGLE_CLIENT_ID")
	config.AppAuth.Google.Secret = viper.GetString("APP_AUTH_GOOGLE_SECRET")

	config.AdminProxy.Port = viper.GetInt("ADMIN_PROXY_PORT")
	config.AdminProxy.Env = viper.GetString("ADMIN_PROXY_ENV")
	config.AdminAuth.Secret = viper.GetString("ADMIN_AUTH_SECRET")

	config.AI.APIKey = viper.GetString("AI_API_KEY")
	config.AI.QuestionsGenerationAssistantID = viper.GetString("AI_QUESTIONS_GENERATION_ASSISTANT_ID")
	config.AI.QuestionsGenerationThreadID = viper.GetString("AI_QUESTIONS_GENERATION_THREAD_ID")
	config.AI.InterviewAssistantID = viper.GetString("AI_INTERVIEW_ASSISTANT_ID")

	config.Postgres.Url = viper.GetString("POSTGRES_URL")
	config.Postgres.AutoMigrateEnabled = viper.GetBool("POSTGRES_AUTO_MIGRATE_ENABLED")

	config.WebClient.Url = viper.GetString("WEB_CLIENT_URL")
	config.BackofficeClient.Url = viper.GetString("BACKOFFICE_CLIENT_URL")

	return config, nil
}
