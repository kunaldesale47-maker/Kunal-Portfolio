import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center';
  const shouldReduceMotion = false;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.6, ease: PREMIUM_EASE }}
      className={`mb-12 sm:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'} ${className}`}
    >
      {badge && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: PREMIUM_EASE }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-medium uppercase tracking-wider mb-4 ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25, filter: 'blur(8px)' }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: PREMIUM_EASE }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display text-white"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15, filter: 'blur(6px)' }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: PREMIUM_EASE }}
          className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
