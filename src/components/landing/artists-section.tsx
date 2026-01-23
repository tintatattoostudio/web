'use client';

import { AnimatedSection } from '@/components/sections/animated-section';
import { ArtistCard } from './artist-card';
import { staggerContainer, staggerChild } from '@/lib/animations/variants';
import { motion } from 'framer-motion';
import { Artist } from '@/lib/types';
import { useTranslations } from 'next-intl';

// Updated stagger timing for smoother artist card animations
const artistsStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.h2
          variants={staggerChild}
          className="text-3xl md:text-5xl font-semibold mb-6"
        >
          {t("artists.title")}
        </motion.h2>
        <motion.p
          variants={staggerChild}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto whitespace-pre-line leading-relaxed"
        >
          {t("artists.content1")}
        </motion.p>
        <motion.p
          variants={staggerChild}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto whitespace-pre-line leading-relaxed"
        >
          {t("artists.content2")}
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={artistsStaggerContainer}
        className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
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
