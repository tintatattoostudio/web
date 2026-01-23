import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import API from '@/lib/api/client';

export function useArtistsData() {
  const locale = useLocale();

  return useQuery({
    queryKey: ['artists', locale],
    queryFn: () => API.getArtists(locale === 'en'),
  });
}
