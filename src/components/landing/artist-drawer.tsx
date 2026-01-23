'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Artist } from '@/lib/types';
import { motion } from 'framer-motion';
import { staggerFadeIn, staggerChild } from '@/lib/animations/variants';
import Link from 'next/link';

type ArtistDrawerProps = {
  artist: Artist | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ArtistDrawer({
  artist,
  open,
  onOpenChange,
}: ArtistDrawerProps) {
  if (!artist) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto">
        <SheetHeader>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-full md:w-48 h-48 md:h-48 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={artist.picture}
                alt={artist.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <SheetTitle className="text-2xl md:text-3xl font-semibold mb-2">
                  {artist.name}
                </SheetTitle>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerFadeIn}
                  className="flex flex-wrap gap-2 mt-3"
                >
                  <Link
                    href={artist.ig}
                    target="_blank"
                    className="text-sm hover:underline transition-all"
                  >
                    instagram
                  </Link>
                </motion.div>

                {artist.styles.length > 0 && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerFadeIn}
                    className="flex flex-wrap gap-2 mt-3"
                  >
                    {artist.styles.map((style, index) => (
                      <motion.div key={index} variants={staggerChild}>
                        <Badge variant="secondary" className="text-xs">
                          {style}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>

              <SheetDescription
                className="text-base md:text-lg leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: artist.bio }}
              ></SheetDescription>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
