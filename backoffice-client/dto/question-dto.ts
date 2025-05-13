import { QuestionType } from "@/types/question-types";
import { LanguageCode } from "@/types/common-types";

export interface QuestionAnswerDto {
  text: string;
  is_correct: boolean;
}

export interface QuestionContentDto {
  text: string;
  explanation: string;
  image_url: string;
}

export interface QuestionContentGroupDto {
  lang: LanguageCode;
  content: QuestionContentDto;
  answers: QuestionAnswerDto[];
}

export interface QuestionDto {
  id: string;
  type: QuestionType;
  contents: QuestionContentGroupDto[];
}

export interface QuestionBatchCreateResponseDto {
  data: QuestionDto[];
}

export interface QuestionGetListResponseDto {
  data: QuestionDto[];
}
