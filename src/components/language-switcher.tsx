"use client";

import { useLanguage } from "@/lib/contexts/language-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
        <span className="text-xs font-semibold">
          {language.toUpperCase()}
        </span>
        <span className="sr-only">Switch language</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          <Languages className="mr-2 h-4 w-4" />
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("sl")}>
          <Languages className="mr-2 h-4 w-4" />
          Slovenščina
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
