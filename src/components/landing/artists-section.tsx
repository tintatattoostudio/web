'use client';

import { AnimatedSection } from '@/components/sections/animated-section';
import { ArtistCard } from './artist-card';
import { staggerContainer, staggerChild } from '@/lib/animations/variants';
import { motion } from 'framer-motion';
import { Artist } from '@/lib/types';
import { useTranslations } from 'next-intl';

export function ArtistsSection() {
  const t = useTranslations("landing");

  const artists: Array<Artist> = [
    {
      name: t("artists.list.lana.name"),
      bio: t("artists.list.lana.bio"),
      styles: Array.from({ length: 3 }, (_, i) => t(`artists.list.lana.styles.${i + 1}`)),
      picture: '/lana.jpg',
    },
    {
      name: t("artists.list.milly.name"),
      bio: t("artists.list.milly.bio"),
      styles: Array.from({ length: 2 }, (_, i) => t(`artists.list.milly.styles.${i + 1}`)),
      picture: '/milly.jpg',
    },
  ]

  return (
    <AnimatedSection variants={staggerContainer} className="container mx-auto px-4 py-24 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          {t("artists.title")}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
          {t("artists.content")}
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        className="flex flex-row items-center justify-center gap-4"
      >
        {artists.map((artist) => (
          <motion.div key={artist.name} variants={staggerChild}>
            <ArtistCard artist={artist} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
