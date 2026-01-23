import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import API from '@/lib/api/client';

export function useFAQData() {
  const locale = useLocale();

  return useQuery({
    queryKey: ['faq', locale],
    queryFn: () => API.getFAQ(locale === 'en'),
  });
}
