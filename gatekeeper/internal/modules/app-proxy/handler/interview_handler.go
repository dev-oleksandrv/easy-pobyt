package handler

import (
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/app-proxy/dto"
	"github.com/dev-oleksandrv/easy-pobyt/gatekeeper/internal/modules/app-proxy/service"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type InterviewHandler interface {
	GetByID(c *gin.Context)
	Create(c *gin.Context)
}

type interviewHandlerImpl struct {
	aiService          service.AIService
	interviewService   service.InterviewService
	interviewerService service.InterviewerService
}

func NewInterviewHandler(
	aiService service.AIService,
	interviewService service.InterviewService,
	interviewerService service.InterviewerService,
) InterviewHandler {
	return &interviewHandlerImpl{
		aiService:          aiService,
		interviewService:   interviewService,
		interviewerService: interviewerService,
	}
}

func (h *interviewHandlerImpl) GetByID(c *gin.Context) {
	id := c.Param("id")
	if err := uuid.Validate(id); err != nil {
		c.JSON(400, gin.H{"error": "ID is required"})
		return
	}

	interview, err := h.interviewService.FindByID(c.Request.Context(), uuid.MustParse(id))
	if err != nil {
		c.JSON(404, gin.H{"error": "Interview not found"})
		return
	}

	c.JSON(200, gin.H{"data": interview})
}

func (h *interviewHandlerImpl) Create(c *gin.Context) {
	interviewer, err := h.interviewerService.FindRandom(c.Request.Context())
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to find interviewer"})
		return
	}

	aiThread, err := h.aiService.CreateThread(c.Request.Context(), interviewer.EntryMessage)
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to create AI thread"})
		return
	}

	interviewInput := &dto.InterviewInputDto{
		ThreadID:      aiThread.ID,
		InterviewerID: interviewer.ID,
	}

	interview, err := h.interviewService.Create(c.Request.Context(), interviewInput)
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to create interview"})
		return
	}

	c.JSON(200, gin.H{"data": interview})
}
