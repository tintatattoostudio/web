import { LandingContent } from "@/components/landing-content";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LanguageSwitcher } from "@/components/language-switcher";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <LandingContent />

      {/* Switchers - bottom right */}
      <div className="fixed bottom-6 right-6 z-10 flex gap-3">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </main>
  );
}
