import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/lib/contexts/language-context';
import API from '@/lib/api/client';

export function useArtistsData() {
  const { language } = useLanguage();

  return useQuery({
    queryKey: ['artists', language],
    queryFn: () => API.getArtists(language === 'en'),
  });
}
