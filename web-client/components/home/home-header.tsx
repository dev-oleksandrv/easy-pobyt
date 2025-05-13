"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GraduationCapIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "be", name: "Беларуская", flag: "🇧🇾" },
];

export function HomeHeader() {
  const t = useTranslations("HomePage.Header");

  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#E12D39] flex items-center justify-center">
            <GraduationCapIcon className="text-white size-6" />
          </div>
          <h1 className="text-xl font-bold text-[#0C3B5F] font-['Poppins']">Easy Pobyt</h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <a href="#features" className="text-[#0C3B5F] hover:text-[#E12D39] transition-colors">
              {t("features")}
            </a>
            <a href="#pricing" className="text-[#0C3B5F] hover:text-[#E12D39] transition-colors">
              {t("pricing")}
            </a>
            <a href="#faq" className="text-[#0C3B5F] hover:text-[#E12D39] transition-colors">
              {t("faq")}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <span>{currentLanguage.flag}</span>
                  <span>{currentLanguage.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setCurrentLanguage(language)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{language.flag}</span>
                    {language.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/auth#login">
              <Button variant="outline" className="border-[#0C3B5F] text-[#0C3B5F]">
                {t("login")}
              </Button>
            </Link>

            <Link href="/auth#register">
              <Button className="bg-gradient-to-r from-[#E12D39] to-[#FF4D58] text-white shadow-md border border-[#E12D39]/20 hover:shadow-lg transition-all">
                {t("register")}
              </Button>
            </Link>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <span>{currentLanguage.flag}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => setCurrentLanguage(language)}
                  className="cursor-pointer"
                >
                  <span className="mr-2">{language.flag}</span>
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100 py-4"
        >
          <div className="container mx-auto px-4">
            <nav className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-[#0C3B5F] py-2 hover:text-[#E12D39] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("features")}
              </a>
              <a
                href="#pricing"
                className="text-[#0C3B5F] py-2 hover:text-[#E12D39] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("pricing")}
              </a>
              <a
                href="#faq"
                className="text-[#0C3B5F] py-2 hover:text-[#E12D39] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("faq")}
              </a>
              <div className="flex gap-2 pt-2">
                <Link href="/auth#login" className="flex-1">
                  <Button variant="outline" className="w-full border-[#0C3B5F] text-[#0C3B5F]">
                    {t("login")}
                  </Button>
                </Link>
                <Link href="/auth#register" className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-[#E12D39] to-[#FF4D58] text-white shadow-md border border-[#E12D39]/20 hover:shadow-lg transition-all">
                    {t("register")}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
}
