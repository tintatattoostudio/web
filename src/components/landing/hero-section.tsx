'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';
import { STUDIO_INFO } from '@/lib/constants';

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  const logoSrc = resolvedTheme === 'dark' ? '/logo.png' : '/logo-dark.png';
  const decorSrc = resolvedTheme === 'dark' ? '/decor.svg' : '/decor-dark.svg';

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url('${decorSrc}')`,
          backgroundPosition: 'top right',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          maxWidth: '800px',
          maxHeight: '800px',
          opacity: 0.2,
        }}
      />

      <div className="absolute top-8 left-8 z-10">
        <Image
          src={logoSrc}
          alt={STUDIO_INFO.name}
          width={200}
          height={60}
          className="w-auto h-auto max-w-[200px] md:max-w-[250px]"
          priority
        />
      </div>

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
          Ljubljana, Slovenia
        </p>
      </motion.div>
    </div>
  );
}
