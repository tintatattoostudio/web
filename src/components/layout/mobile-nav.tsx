'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { NAV_LINKS } from '@/lib/constants';
import { NavLink } from './nav-link';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { LocaleSwitcher } from './locale-switcher';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  fadeInDown,
  hamburgerLine,
  staggerFadeIn,
  staggerChild
} from '@/lib/animations/variants';

export function MobileNav() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
        className="fixed top-6 right-6 z-50"
      >
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="h-12 w-12 rounded-full glass-nav shadow-lg inline-flex flex-col items-center justify-center gap-1.5 p-3">
            <motion.span
              custom={0}
              animate={isOpen ? 'open' : 'closed'}
              variants={hamburgerLine}
              className="w-6 h-0.5 bg-foreground origin-center"
            />
            <motion.span
              custom={1}
              animate={isOpen ? 'open' : 'closed'}
              variants={hamburgerLine}
              className="w-6 h-0.5 bg-foreground origin-center"
            />
            <motion.span
              custom={2}
              animate={isOpen ? 'open' : 'closed'}
              variants={hamburgerLine}
              className="w-6 h-0.5 bg-foreground origin-center"
            />
            <span className="sr-only">
              {isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            </span>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-auto rounded-t-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerFadeIn}
              className="flex flex-col gap-6 py-6 px-6"
            >
              {/* Pull indicator */}
              <div className="flex justify-center -mt-2 mb-2">
                <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <motion.div key={link.href} variants={staggerChild}>
                    <NavLink
                      href={link.href}
                      label={t(link.labelKey)}
                      onClick={() => setIsOpen(false)}
                      className="text-lg"
                    />
                  </motion.div>
                ))}
              </nav>

              {/* Divider */}
              <motion.div variants={staggerChild} className="h-px bg-border" />

              {/* Switchers */}
              <motion.div
                variants={staggerChild}
                className="flex items-center justify-center gap-4"
              >
                <ThemeSwitcher />
                <LocaleSwitcher />
              </motion.div>
            </motion.div>
          </SheetContent>
        </Sheet>
      </motion.div>
    </>
  );
}
