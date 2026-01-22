import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Apple-like scroll animations that revert when scrolling up
export function useScrollAnimation(threshold = 0.15, triggerOnce = false) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
    margin: "-100px" // Start animation slightly before element comes into view
  });

  return { ref, isInView };
}
