'use client';

import { ThemeSwitcher } from '@/components/theme-switcher';
import { LanguageSwitcher } from '@/components/language-switcher';

export function SwitchersBar() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-3">
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
}
