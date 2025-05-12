package main

import (
	"fmt"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/config"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/database"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/backoffice-proxy/handler"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/backoffice-proxy/service"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/repository"
	"github.com/gin-gonic/gin"
	"github.com/sashabaranov/go-openai"
	"log/slog"
	"os"
)

func main() {
	cfg, err := config.LoadConfig()
	if err != nil {
		slog.Error("failed to load config", "err", err)
		os.Exit(1)
	}

	isProductionMode := cfg.AdminProxy.Env == "production"
	if isProductionMode {
		gin.SetMode(gin.ReleaseMode)
	}

	db, err := database.NewPGQLDatabase(database.NewPGQLDatabaseConfig{
		ConnStr:           cfg.Postgres.Url,
		EnableAutoMigrate: cfg.Postgres.AutoMigrateEnabled,
		EnableDebug:       isProductionMode,
	})
	if err != nil {
		slog.Error("cannot connect to database", "err", err)
		os.Exit(1)
	}

	openaiClient := openai.NewClient(cfg.AdminAI.APIKey)

	aiService := service.NewAIService(cfg, openaiClient)
	aiHandler := handler.NewAIHandler(aiService)

	questionRepository := repository.NewQuestionRepository(db)
	questionService := service.NewQuestionService(questionRepository)
	questionHandler := handler.NewQuestionHandler(questionService)

	router := gin.Default()

	apiGroup := router.Group("/api")

	aiGroup := apiGroup.Group("/ai")
	{
		aiGroup.POST("/generate-questions", aiHandler.GenerateQuestions)
	}

	questionGroup := apiGroup.Group("/question")
	{
		questionGroup.GET("/list", questionHandler.GetAll)
		questionGroup.GET("/:id", questionHandler.GetByID)
		questionGroup.POST("/", questionHandler.Create)
		questionGroup.POST("/batch", questionHandler.BatchCreate)
		questionGroup.PUT("/:id", questionHandler.Update)
		questionGroup.DELETE("/:id", questionHandler.Delete)
	}

	if err := router.Run(fmt.Sprintf(":%d", cfg.AdminProxy.Port)); err != nil {
		slog.Error("failed to start server", "err", err)
		os.Exit(1)
	}
}
