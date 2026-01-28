import type { Variants } from 'framer-motion';

const appleEasing = [0.25, 0.1, 0.25, 1] as const;

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: appleEasing
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: appleEasing
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.04
    }
  }
};

export const staggerChild: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: appleEasing
    }
  }
};

export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.4, ease: appleEasing }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: appleEasing }
  }
};

export const scaleOnHover: Variants = {
  rest: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.03,
    y: -8,
    transition: {
      duration: 0.4,
      ease: appleEasing
    }
  }
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: appleEasing }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: appleEasing }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: appleEasing }
  }
};

export const revealWithBlur: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)', scale: 0.95 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: { duration: 0.8, ease: appleEasing }
  }
};

export const magneticHover: Variants = {
  rest: { scale: 1, y: 0, rotateY: 0 },
  hover: {
    scale: 1.05,
    y: -12,
    rotateY: 2,
    transition: { duration: 0.4, ease: appleEasing }
  }
};

export const slideUnderline: Variants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.3, ease: appleEasing } }
};

export const staggerFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

export const hamburgerLine: Variants = {
  closed: { rotate: 0, y: 0, opacity: 1 },
  open: (custom: number) => ({
    rotate: custom === 0 ? 45 : custom === 2 ? -45 : 0,
    y: custom === 0 ? 8 : custom === 2 ? -8 : 0,
    opacity: custom === 1 ? 0 : 1,
    transition: { duration: 0.3, ease: appleEasing }
  })
};
