import type { Spring } from 'framer-motion';

export const smoothSpring: Spring = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1
};

export const snappySpring: Spring = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
  mass: 0.8
};

export const bouncySpring: Spring = {
  type: 'spring',
  stiffness: 400,
  damping: 25,
  mass: 1.2
};

export const gentleSpring: Spring = {
  type: 'spring',
  stiffness: 50,
  damping: 15,
  mass: 1
};
