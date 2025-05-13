import { z } from "zod";
import { QuestionType } from "@/types/question-types";

export const questionsCreateAnswerSchema = z.object({
  text: z.string(),
  is_correct: z.boolean().default(false),
});

export const questionsCreateContentSchema = z.object({
  text: z.string(),
  explanation: z.string().default(""),
  image_url: z.string().default("").optional(),
});

export const questionsCreateContentGroupSchema = z.object({
  lang: z.string(),
  content: questionsCreateContentSchema,
  answers: z.array(questionsCreateAnswerSchema).min(1).max(4),
});

export const questionsCreateSchema = z.object({
  type: z.string().default(QuestionType.SelectOne),
  contents: z.array(questionsCreateContentGroupSchema).min(1),
});

export const questionsBatchCreateSchema = z.object({
  questions: z.array(questionsCreateSchema),
});

export type QuestionsBatchCreateSchemaType = z.infer<typeof questionsBatchCreateSchema>;
