import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/lib/contexts/language-context';
import API from '@/lib/api/client';

export function useLandingData() {
  const { language } = useLanguage();

  return useQuery({
    queryKey: ['landing', language],
    queryFn: () => API.getLanding(language === 'en'),
  });
}
