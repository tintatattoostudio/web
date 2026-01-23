'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { magneticHover, staggerFadeIn, staggerChild } from '@/lib/animations/variants';
import { Artist } from '@/lib/types';

type ArtistCardProps = {
  artist: Artist;
};

export function ArtistCard({ artist }: ArtistCardProps) {
  const { name, bio, styles, picture } = artist;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={magneticHover}
      className="will-change-transform"
    >
      <Card className="overflow-hidden h-full glass shadow-lg hover:shadow-2xl transition-shadow duration-500 max-w-sm">
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 }
          }}
          transition={{ duration: 0.5 }}
          className="relative w-full aspect-square overflow-hidden"
        >
          <Image
            src={picture}
            alt={name}
            fill
            className="object-cover will-change-transform"
          />
        </motion.div>

        <CardHeader className="pb-3">
          <CardTitle className="text-xl md:text-2xl font-semibold">{name}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm md:text-base text-muted-foreground line-clamp-3 leading-relaxed">
            {bio}
          </p>

          {styles.length > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerFadeIn}
              className="flex flex-wrap gap-2"
            >
              {styles.map((style, index) => (
                <motion.div key={index} variants={staggerChild}>
                  <Badge variant="secondary" className="text-xs">
                    {style}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
