import { KyInstance } from "ky";
import { QuestionsBatchCreateSchemaType } from "@/schemas/questions-create-schema";
import { apiClient } from "@/api/api-client";
import { QuestionBatchCreateResponseDto, QuestionGetListResponseDto } from "@/dto/question-dto";

export class QuestionService {
  private readonly prefixSegment = "question";

  constructor(private readonly apiClient: KyInstance) {}

  public getList() {
    return this.apiClient.get(`${this.prefixSegment}/list`).json<QuestionGetListResponseDto>();
  }

  public batchCreate(input: QuestionsBatchCreateSchemaType) {
    return this.apiClient
      .post(`${this.prefixSegment}/batch`, {
        json: input,
      })
      .json<QuestionBatchCreateResponseDto>();
  }
}

export const questionService = new QuestionService(apiClient);
