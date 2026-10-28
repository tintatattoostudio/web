'use client';

import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/sections/animated-section';
import { ArtistCard } from './artist-card';
import { fadeInUp, staggerChild } from '@/lib/animations/variants';
import { Artist } from '@/lib/types';
import { useTranslations } from 'next-intl';

export function ArtistsSection() {
  const t = useTranslations("landing");

  const specialties = (key: string, count: number) =>
    Array.from({ length: count }, (_, i) => t(`artists.list.${key}.specialties.${i + 1}`));

  const artists: Array<Artist> = [
    {
      name: t("artists.list.lana.name"),
      alias: t("artists.list.lana.alias"),
      since: 2019,
      specialties: specialties('lana', 4),
      instagram: 'taro_tattoo_',
      picture: '/artists/lana.jpeg',
      textSide: 'right'
    },
    {
      name: t("artists.list.milan.name"),
      alias: t("artists.list.milan.alias"),
      since: 2013,
      specialties: specialties('milan', 2),
      instagram: 'milly_tattoos',
      picture: '/artists/milan.jpeg',
      textSide: 'left'
    },
    {
      name: t("artists.list.mito.name"),
      alias: t("artists.list.mito.alias"),
      since: 2014,
      specialties: specialties('mito', 2),
      instagram: 'mitopir',
      picture: '/artists/mito.jpeg',
      textSide: 'left'
    },
    {
      name: t("artists.list.nejc.name"),
      alias: t("artists.list.nejc.alias"),
      since: 2021,
      specialties: specialties('nejc', 3),
      instagram: 'brahma.tattoos',
      picture: '/artists/nejc.jpeg',
      textSide: 'right'
    },
  ];

  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <AnimatedSection
        variants={fadeInUp}
        className="text-center mb-16"
        threshold={0.1}
      >
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          {t("artists.title")}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
          {t("artists.content1")}
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
          {t("artists.content2")}
        </p>
      </AnimatedSection>

      {/* Up to 4 artists share one row on xl; beyond that split into two rows (5 -> 3/2) */}
      <div
        className="flex flex-wrap justify-center gap-6"
        style={{ '--cols': artists.length <= 4 ? artists.length : Math.ceil(artists.length / 2) } as CSSProperties}
      >
        {artists.map((artist) => (
          <motion.div
            key={artist.instagram}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChild}
            className="w-full max-w-sm md:basis-[calc((100%-1.5rem)/2)] xl:basis-[calc((100%-(var(--cols)-1)*1.5rem)/var(--cols))] xl:max-w-80"
          >
            <ArtistCard artist={artist} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
