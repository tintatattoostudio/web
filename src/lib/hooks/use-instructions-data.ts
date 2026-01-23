import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import API from '@/lib/api/client';

export function useInstructionsData() {
  const locale = useLocale();

  return useQuery({
    queryKey: ['instructions', locale],
    queryFn: () => API.getInstructions(locale === 'en'),
  });
}
