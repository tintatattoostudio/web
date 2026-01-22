'use client';

import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/animations/variants';

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  );
}
