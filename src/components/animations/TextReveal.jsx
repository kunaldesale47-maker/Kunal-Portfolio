import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PREMIUM_EASE } from '../../hooks/useScrollAnimations';

export default function TextReveal({
  children,
  className = '',
  mode = 'word', // 'word' | 'line' | 'letter'
  delay = 0,
  stagger = 0.04,
  as: Component = 'span',
}) {
  const shouldReduceMotion = useReducedMotion();

  if (typeof children !== 'string') {
    return <Component className={className}>{children}</Component>;
  }

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  const items = mode === 'word' ? children.split(' ') : children.split('\n');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: 'blur(8px)',
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.65,
        ease: PREMIUM_EASE,
      },
    },
  };

  return (
    <Component className={`inline-flex flex-wrap ${className}`}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
        className="inline-flex flex-wrap"
      >
        {items.map((item, index) => (
          <span key={index} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
            <motion.span variants={itemVariants} className="inline-block">
              {item}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
