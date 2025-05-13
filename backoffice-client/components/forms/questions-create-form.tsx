"use client";

import { FormProvider, useFieldArray, useForm, useFormContext, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  questionsBatchCreateSchema,
  QuestionsBatchCreateSchemaType,
} from "@/schemas/questions-create-schema";
import { Button } from "@/components/ui/button";
import { CheckIcon, LanguagesIcon, PlusIcon, SparklesIcon, TrashIcon, XIcon } from "lucide-react";
import { QuestionType } from "@/types/question-types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QUESTIONS_TYPES } from "@/data/question-constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LanguageCode } from "@/types/common-types";
import { useMemo, useState } from "react";
import { LANGUAGE_NAMES_MAP, LANGUAGES_LIST } from "@/data/common-constants";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { AIQuestionsGenerationModal } from "@/components/modals/ai-questions-generation-modal";
import { questionService } from "@/services/question-service";
import { useRouter } from "next/navigation";

interface TypeSelectProps {
  index: number;
}

function TypeSelect({ index }: TypeSelectProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={`questions.${index}.type`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Type</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl className="w-full">
              <SelectTrigger>
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {QUESTIONS_TYPES.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}

interface LanguagePopoverProps {
  selectedLanguages: LanguageCode[];
  onSelect: (languageCode: LanguageCode) => void;
}

function LanguagePopover({ selectedLanguages, onSelect }: LanguagePopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectHandler = (languageCode: LanguageCode) => {
    onSelect(languageCode);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          disabled={selectedLanguages.length >= LANGUAGES_LIST.length}
        >
          <LanguagesIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-1">
        {LANGUAGES_LIST.map((lang) => (
          <Button
            key={lang.value}
            disabled={selectedLanguages.includes(lang.value)}
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => selectHandler(lang.value)}
          >
            <span>{lang.label}</span>
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
}

interface ContentGroupAnswersSubFormProps {
  questionIndex: number;
  groupIndex: number;
}

function ContentGroupAnswersSubForm({
  questionIndex,
  groupIndex,
}: ContentGroupAnswersSubFormProps) {
  const { control } = useFormContext<QuestionsBatchCreateSchemaType>();

  const answersController = useFieldArray({
    control,
    name: `questions.${questionIndex}.contents.${groupIndex}.answers`,
  });

  const addAnswerHandler = () => {
    answersController.append({
      text: "",
      is_correct: false,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <h4 className="text-lg font-semibold">Answers</h4>
        <Button variant="outline" size="icon" onClick={addAnswerHandler}>
          <PlusIcon />
        </Button>
      </div>

      {answersController.fields.map((field, fieldIndex) => (
        <div key={field.id} className="flex flex-row items-center justify-between gap-2">
          <FormField
            control={control}
            name={`questions.${questionIndex}.contents.${groupIndex}.answers.${fieldIndex}.text`}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Answer Text</FormLabel>
                <Input defaultValue={field.value} onChange={field.onChange} />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`questions.${questionIndex}.contents.${groupIndex}.answers.${fieldIndex}.is_correct`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Is Correct</FormLabel>
                <Switch defaultChecked={!!field.value} onCheckedChange={field.onChange} />
              </FormItem>
            )}
          />
        </div>
      ))}
    </div>
  );
}

interface ContentGroupContentSubFormProps {
  questionIndex: number;
  groupIndex: number;
}

function ContentGroupContentSubForm({
  questionIndex,
  groupIndex,
}: ContentGroupContentSubFormProps) {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <FormField
        control={control}
        name={`questions.${questionIndex}.contents.${groupIndex}.content.text`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Text</FormLabel>
            <Textarea defaultValue={field.value} onChange={field.onChange} />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`questions.${questionIndex}.contents.${groupIndex}.content.explanation`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Explanation</FormLabel>
            <Textarea defaultValue={field.value} onChange={field.onChange} />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`questions.${questionIndex}.contents.${groupIndex}.content.image_url`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Image URL</FormLabel>
            <Input defaultValue={field.value} onChange={field.onChange} />
          </FormItem>
        )}
      />
    </div>
  );
}

interface ContentGroupCardProps {
  index: number;
  onDelete: (index: number) => void;
}

function ContentGroupCard({ index, onDelete }: ContentGroupCardProps) {
  const { control } = useFormContext<QuestionsBatchCreateSchemaType>();

  const contentsController = useFieldArray({
    control,
    name: `questions.${index}.contents`,
  });

  const contentsWatcher = useWatch({
    control,
    name: `questions.${index}.contents`,
  });

  const selectedLanguages = useMemo(() => {
    return contentsWatcher.map((item) => item.lang) as LanguageCode[];
  }, [contentsWatcher]);

  const deleteHandler = () => {
    onDelete(index);
  };

  const addContentHandler = (languageCode: LanguageCode) => {
    contentsController.append({
      lang: languageCode,
      content: {
        text: "",
        explanation: "",
        image_url: "",
      },
      answers: [],
    });
  };

  return (
    <Card className="p-4">
      <CardContent className="p-0 space-y-2">
        <TypeSelect index={index} />

        <Tabs defaultValue={selectedLanguages[0]} className="w-full">
          <div className="flex justify-between items-center gap-2">
            <TabsList className="flex-1 w-full justify-start">
              {selectedLanguages.map((lang) => (
                <TabsTrigger key={lang} value={lang} className="flex-none">
                  {LANGUAGE_NAMES_MAP[lang] || "Unknown"}
                  {selectedLanguages.length > 1 && (
                    <Button variant="ghost" size="sm" className="size-4">
                      <XIcon />
                    </Button>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            <LanguagePopover selectedLanguages={selectedLanguages} onSelect={addContentHandler} />
          </div>
          {selectedLanguages.map((lang, groupIndex) => (
            <TabsContent key={lang} value={lang} className="space-y-2">
              <ContentGroupContentSubForm questionIndex={index} groupIndex={groupIndex} />

              <ContentGroupAnswersSubForm questionIndex={index} groupIndex={groupIndex} />
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
      <CardFooter className="p-0">
        <Button variant="destructive" onClick={deleteHandler}>
          <TrashIcon />
          <span>Delete</span>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function QuestionsCreateForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(questionsBatchCreateSchema),
    mode: "onChange",
  });

  const questionsController = useFieldArray({
    control: form.control,
    name: "questions",
  });

  const submitHandler = async (values: QuestionsBatchCreateSchemaType) => {
    try {
      await questionService.batchCreate(values);

      router.push("/questions");
    } catch (error) {
      console.error(error);
    }
  };

  const generationHandler = (batch: QuestionsBatchCreateSchemaType) => {
    batch.questions.forEach((item) => {
      console.log(item);
      questionsController.prepend(item);
    });

    console.log(questionsController.fields);
  };

  const addQuestionHandler = () => {
    questionsController.append({
      type: QuestionType.SelectOne,
      contents: [
        {
          lang: LanguageCode.Polish,
          content: {
            text: "",
            explanation: "",
            image_url: "",
          },
          answers: [],
        },
      ],
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Create Questions</h2>

          <div className="flex justify-end items-center gap-2">
            <Button variant="outline" onClick={addQuestionHandler}>
              <PlusIcon />
              <span>Add Question</span>
            </Button>

            <AIQuestionsGenerationModal onSubmit={generationHandler}>
              <Button variant="outline">
                <SparklesIcon />
                <span>AI Generation</span>
              </Button>
            </AIQuestionsGenerationModal>

            <Button type="submit">
              <CheckIcon />
              <span>Save Changes</span>
            </Button>
          </div>
        </div>

        {questionsController.fields.length > 0 ? (
          <div className="grid grid-cols-2 gap-2">
            {questionsController.fields.map((field, index) => (
              <ContentGroupCard
                key={field.id}
                index={index}
                onDelete={questionsController.remove}
              />
            ))}
          </div>
        ) : (
          <Alert>
            <AlertTitle>No questions added yet. Add a question to get started.</AlertTitle>
          </Alert>
        )}
      </form>
    </FormProvider>
  );
}
