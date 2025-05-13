"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuestionsBatchCreateSchemaType } from "@/schemas/questions-create-schema";
import { ChangeEvent, ReactNode, useState } from "react";
import { FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  aiQuestionsGenerationSchema,
  AIQuestionsGenerationSchemaType,
} from "@/schemas/ai-questions-generation-schema";
import { Button } from "@/components/ui/button";
import { aiService } from "@/services/ai-service";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AIQuestionsGenerationModalProps {
  children: ReactNode;
  onSubmit: (output: QuestionsBatchCreateSchemaType) => void;
}

export function AIQuestionsGenerationModal({
  children,
  onSubmit,
}: AIQuestionsGenerationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [langsValue, setLangsValue] = useState("");
  const [limitValue, setLimitValue] = useState(0);

  const isValid = langsValue.length > 0 && limitValue > 0;

  const createInputHandler =
    (isNumber: boolean = false) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (isNumber) {
        setLimitValue(value ? parseInt(value) : 0);
      } else {
        setLangsValue(value);
      }
    };

  const openChangeHandler = (isOpen: boolean) => {
    if (isPending) {
      return;
    }

    setIsOpen(isOpen);
  };

  const generateHandler = async () => {
    if (!isValid) {
      return;
    }

    const input: AIQuestionsGenerationSchemaType = {
      langs: langsValue.split(",").map((lang) => lang.trim()),
      limit: limitValue,
    };

    const isSchemaValid = await aiQuestionsGenerationSchema.safeParseAsync(input);
    if (!isSchemaValid.success) {
      setError(isSchemaValid.error.message);
      return;
    }

    setIsPending(true);
    setError(null);
    try {
      const response = await aiService.generateQuestions(input);

      onSubmit(response.data);
    } catch (error) {
      setError((error as Error)?.message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={openChangeHandler}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-[500px]">
        <DialogHeader>
          <DialogTitle>AI Questions Generation</DialogTitle>
        </DialogHeader>

        <FormItem className="flex-1">
          <FormLabel>Languages</FormLabel>
          <Input
            placeholder="e.g. pl, uk, en, by"
            defaultValue={langsValue}
            onChange={createInputHandler()}
          />
        </FormItem>

        <FormItem className="flex-1">
          <FormLabel>Limit</FormLabel>
          <Input type="number" defaultValue={limitValue} onChange={createInputHandler(true)} />
        </FormItem>

        {error && (
          <Alert className="my-2">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <DialogFooter>
          <Button type="button" disabled={isPending || !isValid} onClick={generateHandler}>
            Generate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
