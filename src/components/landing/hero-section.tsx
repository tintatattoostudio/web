'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';
import { STUDIO_INFO } from '@/lib/constants';
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('landing.hero');
  const [mounted, setMounted] = useState(false);

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
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center px-4 z-10"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6">
          {STUDIO_INFO.name}
        </h1>
        <p className="text-xl md:text-3xl text-muted-foreground font-light">
          {t('subtitle')}
        </p>
      </motion.div>
    </div>
  );
}
