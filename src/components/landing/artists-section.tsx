'use client';

import { useState } from 'react';
import { AnimatedSection } from '@/components/sections/animated-section';
import { ArtistCard } from './artist-card';
import { ArtistDrawer } from './artist-drawer';
import { fadeInUp } from '@/lib/animations/variants';
import { Artist } from '@/lib/types';
import { useTranslations } from 'next-intl';

export function ArtistsSection() {
  const t = useTranslations("landing");
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
  ];

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
    setDrawerOpen(true);
  };

  return (
    <AnimatedSection
      variants={fadeInUp}
      className="container mx-auto px-4 py-24 md:py-32"
      threshold={0.1}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          {t("artists.title")}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
          {t("artists.content1")}
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
          {t("artists.content2")}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        {artists.map((artist) => (
          <div key={artist.name}>
            <ArtistCard
              artist={artist}
              onClick={() => handleArtistClick(artist)}
            />
          </div>
        ))}
      </div>

      <ArtistDrawer
        artist={selectedArtist}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
      />
    </AnimatedSection>
  );
}
