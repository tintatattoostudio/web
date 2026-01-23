'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { NAV_LINKS } from '@/lib/constants';
import { NavLink } from './nav-link';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { LocaleSwitcher } from './locale-switcher';
import { fadeInDown } from '@/lib/animations/variants';

export function FloatingNav() {
  const t = useTranslations();

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      className="fixed top-6 right-6 z-50 glass-nav rounded-full px-6 py-3 shadow-lg"
    >
      <div className="flex items-center gap-6">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.href} href={link.href} label={t(link.labelKey)} />
        ))}
        <div className="h-6 w-px bg-border" />
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </div>
    </motion.nav>
  );
}
