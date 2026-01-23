import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const baseUrl = 'https://tinta.tattoo'; // Update with actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;
  const pages = ['', '/instructions', '/care', '/faq'];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add all pages for each locale
  for (const locale of locales) {
    for (const page of pages) {
      const localePrefix = locale === 'en' ? '' : `/${locale}`;
      sitemap.push({
        url: `${baseUrl}${localePrefix}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}${page}`,
            sl: `${baseUrl}/sl${page}`
          }
        }
      });
    }
  }

  return sitemap;
}
