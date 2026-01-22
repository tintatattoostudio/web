import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/lib/contexts/language-context';
import API from '@/lib/api/client';

export function useCareData() {
  const { language } = useLanguage();

  return useQuery({
    queryKey: ['care', language],
    queryFn: () => API.getCare(language === 'en'),
  });
}
