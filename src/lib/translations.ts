export type Language = "en" | "sl";

export const translations = {
  en: {
    comingSoon: "Coming Soon",
  },
  sl: {
    comingSoon: "Kmalu",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
