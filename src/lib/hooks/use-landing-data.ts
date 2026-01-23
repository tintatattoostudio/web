import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import API from '@/lib/api/client';

export function useLandingData() {
  const locale = useLocale();

  return useQuery({
    queryKey: ['landing', locale],
    queryFn: () => API.getLanding(locale === 'en'),
  });
}
