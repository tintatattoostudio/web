'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { slideUnderline } from '@/lib/animations/variants';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, label, onClick, className = '' }: NavLinkProps) {
  return (
    <Link href={href} onClick={onClick} className="relative group">
      <motion.span
        initial="rest"
        whileHover="hover"
        className={`text-base font-medium transition-colors ${className}`}
      >
        {label}
        <motion.span
          variants={slideUnderline}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-current origin-left"
        />
      </motion.span>
    </Link>
  );
}
