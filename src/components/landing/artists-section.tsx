'use client';

import { AnimatedSection } from '@/components/sections/animated-section';
import { ArtistCard } from './artist-card';
import { useLandingData } from '@/lib/hooks/use-landing-data';
import { useArtistsData } from '@/lib/hooks/use-artists-data';
import { Skeleton } from '@/components/ui/skeleton';
import { staggerContainer, staggerChild } from '@/lib/animations/variants';
import { motion } from 'framer-motion';

export function ArtistsSection() {
  const { data: landingData, isLoading: landingLoading } = useLandingData();
  const { data: artistsData, isLoading: artistsLoading } = useArtistsData();

  if (landingLoading || artistsLoading) {
    return (
      <section className="container mx-auto px-4 py-20">
        <Skeleton className="h-12 w-64 mb-6 mx-auto" />
        <Skeleton className="h-24 w-full max-w-2xl mb-12 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-96 w-full" />
          ))}
        </div>
      </section>
    );
  }

  if (!landingData || !artistsData) return null;

  return (
    <AnimatedSection variants={staggerContainer} className="container mx-auto px-4 py-24 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          {landingData.artistsTitle}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
          {landingData.artistsContent}
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {artistsData.map((artist) => (
          <motion.div key={artist.attributes.artist} variants={staggerChild}>
            <ArtistCard artist={artist} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
