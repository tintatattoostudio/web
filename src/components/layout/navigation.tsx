'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { NAV_LINKS } from '@/lib/constants';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Menu } from 'lucide-react';
import { useMediaQuery } from '@/lib/hooks/use-media-query';
import { Link } from '@/i18n/routing';

export function Navigation() {
  const t = useTranslations();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const navLinks = (
    <nav className="flex flex-col gap-3">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => {
            setMobileOpen(false);
            setDesktopOpen(false);
          }}
          className="text-base font-medium hover:underline transition-all"
        >
          {t(link.labelKey)}
        </Link>
      ))}
    </nav>
  );

  if (isMobile) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger className="h-12 w-12 rounded-full shadow-lg inline-flex items-center justify-center border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open navigation menu</span>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <div className="mt-8">
              {navLinks}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Popover open={desktopOpen} onOpenChange={setDesktopOpen}>
        <PopoverTrigger className="h-12 w-12 rounded-full shadow-lg inline-flex items-center justify-center border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation menu</span>
        </PopoverTrigger>
        <PopoverContent side="right" align="end" className="w-[200px]">
          {navLinks}
        </PopoverContent>
      </Popover>
    </div>
  );
}
