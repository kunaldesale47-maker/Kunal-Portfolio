/**
 * Core Cinematic Scroll Animation System
 * Engineered for GPU-accelerated performance (transform & opacity only)
 * Full support for prefers-reduced-motion and responsive mobile viewpoints
 */

import { useReducedMotion } from 'framer-motion';

// Premium cubic-bezier easing curve for Apple / high-end portfolio feel
export const PREMIUM_EASE = [0.16, 1, 0.3, 1];
export const CINEMATIC_EASE = [0.22, 1, 0.36, 1];
export const SMOOTH_EASE = [0.25, 0.1, 0.25, 1];

/**
 * Standard Viewport Triggers
 */
export const DEFAULT_VIEWPORT = { once: true, amount: 0.2 };
export const EARLY_VIEWPORT = { once: true, amount: 0.08 };
export const MARGIN_VIEWPORT = { once: true, margin: '-60px' };

/**
 * Reusable Variant Generators
 */
export const fadeInUp = (delay = 0, duration = 0.7, distance = 40) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: DEFAULT_VIEWPORT,
  transition: { duration, delay, ease: PREMIUM_EASE },
});

export const fadeInDown = (delay = 0, duration = 0.7, distance = 40) => ({
  initial: { opacity: 0, y: -distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: DEFAULT_VIEWPORT,
  transition: { duration, delay, ease: PREMIUM_EASE },
});

export const fadeInLeft = (delay = 0, duration = 0.75, distance = 60) => ({
  initial: { opacity: 0, x: -distance },
  whileInView: { opacity: 1, x: 0 },
  viewport: DEFAULT_VIEWPORT,
  transition: { duration, delay, ease: PREMIUM_EASE },
});

export const fadeInRight = (delay = 0, duration = 0.75, distance = 60) => ({
  initial: { opacity: 0, x: distance },
  whileInView: { opacity: 1, x: 0 },
  viewport: DEFAULT_VIEWPORT,
  transition: { duration, delay, ease: PREMIUM_EASE },
});

export const scaleUp = (delay = 0, duration = 0.7, initialScale = 0.88) => ({
  initial: { opacity: 0, scale: initialScale },
  whileInView: { opacity: 1, scale: 1 },
  viewport: DEFAULT_VIEWPORT,
  transition: { duration, delay, ease: PREMIUM_EASE },
});

export const rotateIn = (delay = 0, duration = 0.7, deg = -4) => ({
  initial: { opacity: 0, scale: 0.95, rotateZ: deg },
  whileInView: { opacity: 1, scale: 1, rotateZ: 0 },
  viewport: DEFAULT_VIEWPORT,
  transition: { duration, delay, ease: PREMIUM_EASE },
});

export const clipPathReveal = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, clipPath: 'inset(10% 0 10% 0)' },
  whileInView: { opacity: 1, clipPath: 'inset(0% 0 0% 0)' },
  viewport: DEFAULT_VIEWPORT,
  transition: { duration, delay, ease: CINEMATIC_EASE },
});

/**
 * Multi-directional generator for grids (skills, gallery, cards)
 */
export const directionalEntrance = (direction = 'up', delay = 0, duration = 0.7) => {
  switch (direction) {
    case 'left':
      return fadeInLeft(delay, duration, 60);
    case 'right':
      return fadeInRight(delay, duration, 60);
    case 'down':
      return fadeInDown(delay, duration, 50);
    case 'scale':
      return scaleUp(delay, duration, 0.82);
    case 'rotate':
      return rotateIn(delay, duration, -4);
    case 'up':
    default:
      return fadeInUp(delay, duration, 50);
  }
};

/**
 * Stagger container helper
 */
export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0.05) => ({
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
  viewport: DEFAULT_VIEWPORT,
});
