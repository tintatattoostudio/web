'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';
import { fadeInUp } from '@/lib/animations/variants';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  threshold?: number;
  triggerOnce?: boolean;
};

export function AnimatedSection({
  children,
  className,
  variants = fadeInUp,
  threshold = 0.15,
  triggerOnce = false, // Apple-like: animations trigger both ways
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation(threshold, triggerOnce);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
}
