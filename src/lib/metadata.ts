import { Metadata } from 'next';
import { STUDIO_INFO } from './constants';

interface LocaleMetadata {
  title: string;
  description: string;
  keywords: string[];
}

const localeMetadata: Record<string, LocaleMetadata> = {
  en: {
    title: 'Tinta Tattoo Studio | Professional Tattoo Artists in Ljubljana',
    description:
      'Premium tattoo studio in Ljubljana, Slovenia. Experienced tattoo artists specializing in linework, illustrative, blackwork, black and grey realism, and fineline realism. Quality tattoos with highest hygiene standards.',
    keywords: [
      'tattoo studio Ljubljana',
      'tattoo artist Slovenia',
      'professional tattoo',
      'linework tattoo',
      'illustrative tattoo',
      'blackwork tattoo',
      'realism tattoo',
      'fineline tattoo',
      'custom tattoo design',
      'tattoo Ljubljana Slovenia',
      'Tinta Tattoo Studio',
      'Lana tattoo artist',
      'Milan tattoo artist',
      'tattoo care instructions',
      'quality tattoo studio',
      'hygienic tattoo studio'
    ]
  },
  sl: {
    title: 'Tinta Tattoo Studio | Profesionalni Tetoverji v Ljubljani',
    description:
      'Premium tattoo studio v Ljubljani, Slovenija. Izkušeni tetoverji specializirani za linework, illustrative, blackwork, black and grey realizem in fineline realizem. Kvalitetne tetovaže z najvišjimi higienskimi standardi.',
    keywords: [
      'tattoo studio Ljubljana',
      'tetover Slovenija',
      'profesionalna tetovaža',
      'linework tetovaža',
      'illustrative tetovaža',
      'blackwork tetovaža',
      'realizem tetovaža',
      'fineline tetovaža',
      'custom tattoo design',
      'tetovaža Ljubljana Slovenija',
      'Tinta Tattoo Studio',
      'Lana tetoverka',
      'Milan tetover',
      'navodila za nego tetovaže',
      'kvaliteten tattoo studio',
      'higienska tetovaža'
    ]
  }
};

const siteUrl = 'https://tinta.tattoo'; // Update with actual domain

export function generateMetadata(locale: string): Metadata {
  const meta = localeMetadata[locale] || localeMetadata.en;
  const localePrefix = locale === 'en' ? '' : `/${locale}`;
  const url = `${siteUrl}${localePrefix}`;

  return {
    title: {
      default: meta.title,
      template: `%s | ${STUDIO_INFO.name}`
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: STUDIO_INFO.name }],
    creator: STUDIO_INFO.name,
    publisher: STUDIO_INFO.name,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
      languages: {
        en: '/',
        sl: '/sl'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale === 'sl' ? 'sl_SI' : 'en_US',
      url,
      title: meta.title,
      description: meta.description,
      siteName: STUDIO_INFO.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    verification: {
      // Add your verification codes when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.png', type: 'image/png' }
      ],
      apple: [{ url: '/favicon.png' }]
    }
  };
}

export function generateStructuredData(locale: string) {
  const isEnglish = locale === 'en';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TattooShop',
    '@id': siteUrl,
    name: STUDIO_INFO.name,
    url: siteUrl,
    logo: `${siteUrl}/favicon.png`,
    image: `${siteUrl}/banner.png`,
    description:
      isEnglish
        ? 'Premium tattoo studio in Ljubljana, Slovenia. Experienced tattoo artists specializing in linework, illustrative, blackwork, and realism styles.'
        : 'Premium tattoo studio v Ljubljani, Slovenija. Izkušeni tetoverji specializirani za linework, illustrative, blackwork in realizem style.',
    email: 'tattoostudio.tinta@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: STUDIO_INFO.street,
      addressLocality: 'Ljubljana',
      postalCode: '1000',
      addressCountry: 'SI'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: STUDIO_INFO.coordinates.lat,
      longitude: STUDIO_INFO.coordinates.lng
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00'
    },
    sameAs: [
      STUDIO_INFO.social.instagram,
      STUDIO_INFO.social.facebook
    ],
    hasMap: STUDIO_INFO.mapsLinks.google,
    areaServed: {
      '@type': 'City',
      name: 'Ljubljana'
    },
    knowsLanguage: ['English', 'Slovenian'],
    paymentAccepted: 'Cash, Card',
    currenciesAccepted: 'EUR'
  };

  return structuredData;
}
