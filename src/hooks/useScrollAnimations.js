/**
 * Standard animation curves and variants inspired by premium portfolio experiences
 */

export const PREMIUM_EASE = [0.16, 1, 0.3, 1]; // Smooth cubic bezier

export const fadeInUp = (delay = 0, duration = 0.7) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration, delay, ease: PREMIUM_EASE },
});

export const fadeInLeft = (delay = 0, duration = 0.75) => ({
  initial: { opacity: 0, x: -35 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration, delay, ease: PREMIUM_EASE },
});

export const fadeInRight = (delay = 0, duration = 0.75) => ({
  initial: { opacity: 0, x: 35 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration, delay, ease: PREMIUM_EASE },
});

export const scaleUp = (delay = 0, duration = 0.7) => ({
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration, delay, ease: PREMIUM_EASE },
});

export const cardStagger = (index = 0, duration = 0.65) => ({
  initial: { opacity: 0, y: 25, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration, delay: index * 0.08, ease: PREMIUM_EASE },
});
