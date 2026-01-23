'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { STUDIO_INFO } from '@/lib/constants';

type PageLayoutProps = {
  children: React.ReactNode;
  showLogo?: boolean;
};

export function PageLayout({ children, showLogo = false }: PageLayoutProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const init = () => setMounted(true);

    init();
  }, []);

  if (!mounted) {
    return <div className="relative min-h-screen">{children}</div>;
  }

  const logoSrc = resolvedTheme === 'dark' ? '/logo.png' : '/logo-dark.png';
  const decorSrc = resolvedTheme === 'dark' ? '/decor.svg' : '/decor-dark.svg';

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed top-0 right-0 w-full h-full pointer-events-none -z-10"
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

      {showLogo && (
        <motion.div
          style={{ opacity: logoOpacity }}
          className="fixed top-8 left-8 z-10"
        >
          <Image
            src={logoSrc}
            alt={STUDIO_INFO.name}
            width={200}
            height={60}
            className="w-auto h-auto max-w-[200px] md:max-w-[250px]"
            priority
          />
        </motion.div>
      )}

      {children}
    </div>
  );
}
