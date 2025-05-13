import { z } from "zod";

export const aiQuestionsGenerationSchema = z.object({
  langs: z.array(z.string()).min(1),
  limit: z.number().min(1).max(10),
});

export type AIQuestionsGenerationSchemaType = z.infer<typeof aiQuestionsGenerationSchema>;
