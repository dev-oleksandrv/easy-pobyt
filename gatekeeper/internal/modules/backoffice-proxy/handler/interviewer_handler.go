package handler

import (
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/backoffice-proxy/dto"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/backoffice-proxy/service"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type InterviewerHandler interface {
	GetAll(c *gin.Context)
	GetByID(c *gin.Context)
	Create(c *gin.Context)
	Update(c *gin.Context)
	Delete(c *gin.Context)
}

type interviewerHandlerImpl struct {
	interviewerService service.InterviewerService
}

func NewInterviewerHandler(interviewerService service.InterviewerService) InterviewerHandler {
	return &interviewerHandlerImpl{
		interviewerService: interviewerService,
	}
}

func (h *interviewerHandlerImpl) GetAll(c *gin.Context) {
	interviewers, err := h.interviewerService.FindAll(c.Request.Context())
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"data": interviewers})
}

func (h *interviewerHandlerImpl) GetByID(c *gin.Context) {
	id := c.Param("id")
	if err := uuid.Validate(id); err != nil {
		c.JSON(400, gin.H{"error": "invalid interviewer id"})
		return
	}

	interviewer, err := h.interviewerService.FindByID(c.Request.Context(), uuid.MustParse(id))
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"data": interviewer})
}

func (h *interviewerHandlerImpl) Create(c *gin.Context) {
	var input dto.InterviewerInputDto
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	output, err := h.interviewerService.Create(c.Request.Context(), &input)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(201, gin.H{"data": output})
}

func (h *interviewerHandlerImpl) Update(c *gin.Context) {
	var input dto.InterviewerInputDto
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	id := c.Param("id")
	if err := uuid.Validate(id); err != nil {
		c.JSON(400, gin.H{"error": "invalid interviewer id"})
		return
	}

	output, err := h.interviewerService.Update(c.Request.Context(), uuid.MustParse(id), &input)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"data": output})
}

func (h *interviewerHandlerImpl) Delete(c *gin.Context) {
	id := c.Param("id")
	if err := uuid.Validate(id); err != nil {
		c.JSON(400, gin.H{"error": "invalid interviewer id"})
		return
	}

	err := h.interviewerService.Delete(c.Request.Context(), uuid.MustParse(id))
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(204, nil)
}
