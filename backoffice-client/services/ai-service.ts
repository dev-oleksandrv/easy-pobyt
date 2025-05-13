import { KyInstance } from "ky";
import { AIQuestionsGenerationSchemaType } from "@/schemas/ai-questions-generation-schema";
import { apiClient } from "@/api/api-client";
import { QuestionsBatchCreateSchemaType } from "@/schemas/questions-create-schema";

export class AIService {
  private readonly prefixSegment = "ai";

  constructor(private readonly apiClient: KyInstance) {}

  public generateQuestions(input: AIQuestionsGenerationSchemaType) {
    return this.apiClient
      .post(`${this.prefixSegment}/generate-questions`, {
        json: input,
      })
      .json<{ data: QuestionsBatchCreateSchemaType }>();
  }
}

export const aiService = new AIService(apiClient);
