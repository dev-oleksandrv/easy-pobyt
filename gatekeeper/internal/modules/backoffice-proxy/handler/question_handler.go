package handler

import (
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/backoffice-proxy/dto"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/backoffice-proxy/service"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type QuestionHandler interface {
	GetAll(c *gin.Context)
	GetByID(c *gin.Context)
	Create(c *gin.Context)
	Update(c *gin.Context)
	BatchCreate(c *gin.Context)
	Delete(c *gin.Context)
}

type questionHandlerImpl struct {
	questionService service.QuestionService
}

func NewQuestionHandler(questionService service.QuestionService) QuestionHandler {
	return &questionHandlerImpl{questionService}
}

func (h *questionHandlerImpl) GetAll(c *gin.Context) {
	questions, err := h.questionService.GetAll(c)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"data": questions})
}

func (h *questionHandlerImpl) GetByID(c *gin.Context) {
	questionID := c.Param("id")
	if err := uuid.Validate(questionID); err != nil {
		c.JSON(400, gin.H{"error": "invalid question id"})
		return
	}

	question, err := h.questionService.GetByID(c, uuid.MustParse(questionID))
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"data": question})
}

func (h *questionHandlerImpl) Create(c *gin.Context) {
	var input dto.QuestionInputDto
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	output, err := h.questionService.Create(c.Request.Context(), &input)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"data": output})
}

func (h *questionHandlerImpl) Update(c *gin.Context) {
	var input dto.QuestionInputDto
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	id := c.Param("id")
	if err := uuid.Validate(id); err != nil {
		c.JSON(400, gin.H{"error": "invalid question id"})
		return
	}

	output, err := h.questionService.Update(c.Request.Context(), uuid.MustParse(id), &input)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"data": output})
}

func (h *questionHandlerImpl) BatchCreate(c *gin.Context) {
	var input dto.QuestionBatchInputDto
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	output, err := h.questionService.BatchCreate(c.Request.Context(), &input)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"data": output})
}

func (h *questionHandlerImpl) Delete(c *gin.Context) {
	questionID := c.Param("id")
	if err := uuid.Validate(questionID); err != nil {
		c.JSON(400, gin.H{"error": "invalid question id"})
	}

	if err := h.questionService.Delete(c.Request.Context(), uuid.MustParse(questionID)); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
	}

	c.JSON(200, gin.H{"success": true})
}
