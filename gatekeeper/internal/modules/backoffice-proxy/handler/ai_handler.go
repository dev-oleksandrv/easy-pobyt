package handler

import (
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/backoffice-proxy/dto"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/backoffice-proxy/service"
	"github.com/gin-gonic/gin"
)

type AIHandler interface {
	GenerateQuestions(c *gin.Context)
}

type aiHandlerImpl struct {
	aiService service.AIService
}

func NewAIHandler(aiService service.AIService) AIHandler {
	return &aiHandlerImpl{aiService}
}

func (h *aiHandlerImpl) GenerateQuestions(c *gin.Context) {
	var input *dto.AIGenerateQuestionsInputDto
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	output, err := h.aiService.GenerateQuestions(c.Request.Context(), input)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"data": output})
}
