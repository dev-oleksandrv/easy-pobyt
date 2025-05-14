package main

import (
	"fmt"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/config"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/database"
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
	fmt.Println(db)

	openaiClient := openai.NewClient(cfg.AdminAI.APIKey)
	fmt.Println(openaiClient)

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
	fmt.Println(apiGroup)

	if err := router.Run(fmt.Sprintf(":%d", cfg.AppProxy.Port)); err != nil {
		slog.Error("failed to start server", "err", err)
		os.Exit(1)
	}
}
