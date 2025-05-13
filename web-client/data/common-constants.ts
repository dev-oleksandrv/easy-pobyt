import { LanguageCode } from "@/types/common-types";

export const LANGUAGE_NAMES_MAP: Record<LanguageCode, string> = {
  [LanguageCode.Polish]: "Polish",
  [LanguageCode.English]: "English",
  [LanguageCode.Ukrainian]: "Ukrainian",
  [LanguageCode.Belarusian]: "Belarusian",
};

export const LANGUAGES_LIST = [
  { value: LanguageCode.Polish, label: LANGUAGE_NAMES_MAP[LanguageCode.Polish] },
  { value: LanguageCode.English, label: LANGUAGE_NAMES_MAP[LanguageCode.English] },
  { value: LanguageCode.Ukrainian, label: LANGUAGE_NAMES_MAP[LanguageCode.Ukrainian] },
  { value: LanguageCode.Belarusian, label: LANGUAGE_NAMES_MAP[LanguageCode.Belarusian] },
];
