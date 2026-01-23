'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

export function LocaleSwitcher() {
  const t = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    localStorage.setItem('preferred-locale', newLocale);
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
        <span className="text-xs font-semibold">
          {locale.toUpperCase()}
        </span>
        <span className="sr-only">{t('switchLanguage')}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLocale('en')}>
          <Languages className="mr-2 h-4 w-4" />
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale('sl')}>
          <Languages className="mr-2 h-4 w-4" />
          Slovenščina
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
