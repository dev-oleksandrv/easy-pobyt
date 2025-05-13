"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LANGUAGES_LIST } from "@/data/common-constants";

export function PracticeHeaderLanguageSelect() {
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES_LIST[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-1.5 rounded-full border-gray-200"
        >
          {/*<span className="text-base">{currentLanguage.flag}</span>*/}
          <span className="hidden sm:inline text-sm font-medium">{currentLanguage.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl overflow-hidden">
        {LANGUAGES_LIST.map((language) => (
          <DropdownMenuItem
            key={language.value}
            onClick={() => setCurrentLanguage(language)}
            className="cursor-pointer flex items-center gap-2"
          >
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
