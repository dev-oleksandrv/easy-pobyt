package main

import (
	"fmt"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/config"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/database"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/app-proxy/handler"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/app-proxy/service"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/repository"
	"github.com/gin-contrib/cors"
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

	isProductionMode := cfg.AppProxy.Env == "production"
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
	aiService := service.NewAIService(openaiClient)

	interviewRepository := repository.NewInterviewRepository(db)
	interviewerRepository := repository.NewInterviewerRepository(db)

	interviewService := service.NewInterviewService(interviewRepository)
	interviewerService := service.NewInterviewerService(interviewerRepository)

	interviewHandler := handler.NewInterviewHandler(aiService, interviewService, interviewerService)

	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOriginFunc: func(origin string) bool {
			return origin == cfg.WebClient.Url
		},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowCredentials: true,
	}))

	apiGroup := router.Group("/api")
	interviewGroup := apiGroup.Group("/interview")
	{
		interviewGroup.GET("/:id", interviewHandler.GetByID)
		interviewGroup.POST("/", interviewHandler.Create)
	}

	if err := router.Run(fmt.Sprintf(":%d", cfg.AppProxy.Port)); err != nil {
		slog.Error("failed to start server", "err", err)
		os.Exit(1)
	}
}
