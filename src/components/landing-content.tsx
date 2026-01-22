"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/contexts/language-context";
import { translations } from "@/lib/translations";
import Image from "next/image";
import { useEffect, useState } from "react";

export function LandingContent() {
  const { resolvedTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const init = () => setMounted(true);

    init();
  }, []);

  const currentTheme = mounted ? resolvedTheme : "light";
  const logoSrc = currentTheme === "dark" ? "/logo.png" : "/logo-dark.png";
  const decorSrc = currentTheme === "dark" ? "/decor.svg" : "/decor-dark.svg";

  return (
    <>
      {/* Decorative background - top right */}
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url('${decorSrc}')`,
          backgroundPosition: "top right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          maxWidth: "800px",
          maxHeight: "800px",
          opacity: mounted ? 0.2 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />

      {/* Logo - top left */}
      <div className="absolute top-8 left-8 z-10">
        {mounted && (
          <Image
            src={logoSrc}
            alt="Tinta Tattoo Studio"
            width={200}
            height={60}
            className="w-auto h-auto max-w-[200px] md:max-w-[250px] transition-opacity duration-300"
            priority
          />
        )}
      </div>

      {/* Coming soon message - centered */}
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-fade-in">
          {translations[language].comingSoon}
        </h1>
      </div>
    </>
  );
}
