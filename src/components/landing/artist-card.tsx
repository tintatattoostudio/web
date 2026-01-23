'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import API from '@/lib/api/client';
import type { Artist } from '@/lib/api/types';
import { motion } from 'framer-motion';
import { scaleOnHover } from '@/lib/animations/variants';

type ArtistCardProps = {
  artist: Artist;
};

export function ArtistCard({ artist }: ArtistCardProps) {
  const { name, bio, styles, pfp } = artist.attributes;
  const imageUrl = API.getImageUrl(pfp.data.attributes.url);

  const stylesArray = styles.split(',').map(s => s.trim()).filter(Boolean);

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={scaleOnHover}
    >
      <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-2xl transition-shadow duration-400">
        <div className="relative w-full aspect-square">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-xl md:text-2xl font-semibold">{name}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm md:text-base text-muted-foreground line-clamp-3 leading-relaxed">
            {bio}
          </p>

          {stylesArray.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {stylesArray.map((style, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {style}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
