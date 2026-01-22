import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/lib/contexts/language-context';
import API from '@/lib/api/client';

export function useFAQData() {
  const { language } = useLanguage();

  return useQuery({
    queryKey: ['faq', language],
    queryFn: () => API.getFAQ(language === 'en'),
  });
}
