'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export function LocaleSync() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const preferredLocale = localStorage.getItem('preferred-locale');

    if (preferredLocale && preferredLocale !== currentLocale) {
      router.replace(pathname, { locale: preferredLocale });
    }
  }, [currentLocale, router, pathname]);

  return null;
}
