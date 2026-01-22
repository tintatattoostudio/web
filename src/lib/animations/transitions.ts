import type { Transition } from 'framer-motion';

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

export const smoothTransition: Transition = {
  duration: 0.4,
  ease: "easeInOut"
};

export const quickTransition: Transition = {
  duration: 0.2,
  ease: "easeOut"
};
