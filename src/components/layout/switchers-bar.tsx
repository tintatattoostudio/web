'use client';

import { ThemeSwitcher } from '@/components/theme-switcher';
import { LocaleSwitcher } from '@/components/layout/locale-switcher';

export function SwitchersBar() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-3">
      <ThemeSwitcher />
      <LocaleSwitcher />
    </div>
  );
}
