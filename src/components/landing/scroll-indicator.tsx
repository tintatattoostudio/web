'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const y = useTransform(scrollY, [0, 200], [0, 20]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }}
    >
      <span className="text-sm text-muted-foreground font-light">Scroll</span>
      <motion.div
        animate={{
          y: [0, 8, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </motion.div>
  );
}
