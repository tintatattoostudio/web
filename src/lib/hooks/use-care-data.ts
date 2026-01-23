import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import API from '@/lib/api/client';

export function useCareData() {
  const locale = useLocale();

  return useQuery({
    queryKey: ['care', locale],
    queryFn: () => API.getCare(locale === 'en'),
  });
}
