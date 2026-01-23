import type { SpringOptions } from 'framer-motion';

export const smoothSpring: SpringOptions = {
  stiffness: 100,
  damping: 20,
  mass: 1
};

export const snappySpring: SpringOptions = {
  stiffness: 300,
  damping: 30,
  mass: 0.8
};

export const bouncySpring: SpringOptions = {
  stiffness: 400,
  damping: 25,
  mass: 1.2
};

export const gentleSpring: SpringOptions = {
  stiffness: 50,
  damping: 15,
  mass: 1
};
