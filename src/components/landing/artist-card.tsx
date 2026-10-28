'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Artist } from '@/lib/types';

type ArtistCardProps = {
  artist: Artist;
};

export function ArtistCard({ artist }: ArtistCardProps) {
  const t = useTranslations('landing.artists');
  const { name, alias, since, specialties, instagram, picture, textSide } = artist;

  return (
    <motion.a
      href={`https://www.instagram.com/${instagram}/`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} – @${instagram}`}
      initial="rest"
      whileHover="hover"
      variants={{
        rest: { y: 0 },
        hover: { y: -8 }
      }}
      transition={{ duration: 0.4 }}
      className="@container relative block aspect-[4/5] overflow-hidden rounded-lg bg-black font-(family-name:--font-geist-sans) text-white shadow-lg hover:shadow-2xl transition-shadow duration-500 will-change-transform"
    >
      <motion.div
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.03 }
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <Image
          src={picture}
          alt={name}
          fill
          sizes="(min-width: 768px) 384px, 100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      <div
        className={cn(
          'absolute bottom-[7%]',
          textSide === 'right' ? 'left-[40%] right-[5%]' : 'left-[5%] right-[33%]',
        )}
      >
        <h3 className="text-[15cqw] font-semibold uppercase leading-none tracking-tight">
          {name}
        </h3>
        <p className="mt-[2cqw] text-[4.8cqw] font-light leading-tight">
          [{alias}]
        </p>
        <p className="mt-[2.5cqw] text-[4cqw] font-light italic leading-snug text-white/80">
          {t('since', { year: since })}
        </p>
        <p className="text-[4cqw] leading-snug">
          {t('specialty')}{' '}
          <span className="font-semibold">{specialties.join(' | ')}</span>
        </p>
        <p className="mt-[3cqw] text-[4cqw] font-semibold leading-snug">
          {t('booking')} @{instagram}
        </p>
      </div>
    </motion.a>
  );
}
