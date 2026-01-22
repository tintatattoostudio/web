import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/lib/contexts/language-context';
import API from '@/lib/api/client';

export function useInstructionsData() {
  const { language } = useLanguage();

  return useQuery({
    queryKey: ['instructions', language],
    queryFn: () => API.getInstructions(language === 'en'),
  });
}
