'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  revealWithBlur,
  staggerContainer,
  staggerChild
} from '@/lib/animations/variants';
import { STUDIO_INFO } from '@/lib/constants';
import { useTranslations } from 'next-intl';
import { ScrollIndicator } from './scroll-indicator';

export function HeroSection() {
  const t = useTranslations('landing.hero');
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const init = () => setMounted(true);

    init();
  }, []);

  if (!mounted) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            {STUDIO_INFO.name}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ opacity, scale, y }}
        className="text-center px-4 z-10 will-change-transform"
      >
        {/* Title with letter-by-letter reveal */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6"
        >
          {STUDIO_INFO.name.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={staggerChild}
              className="inline-block"
              style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle with blur reveal */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={revealWithBlur}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-3xl text-muted-foreground font-light"
        >
          {t('subtitle')}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </div>
  );
}
