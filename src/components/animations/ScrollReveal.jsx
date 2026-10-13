import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PREMIUM_EASE, CINEMATIC_EASE } from '../../hooks/useScrollAnimations';

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate' | 'clip'
  delay = 0,
  duration = 0.75,
  distance = 50,
  blur = true,
  scale = 0.94,
  rotate = 0,
  amount = 0.15,
  as: Component = motion.div,
  ...props
}) {
  const getInitial = () => {
    const base = {
      opacity: 0,
      filter: blur ? 'blur(8px)' : 'none',
    };

    switch (direction) {
      case 'down':
        return { ...base, y: -distance };
      case 'left':
        return { ...base, x: -distance };
      case 'right':
        return { ...base, x: distance };
      case 'scale':
        return { ...base, scale };
      case 'rotate':
        return { ...base, scale, rotateZ: rotate || -4 };
      case 'clip':
        return {
          ...base,
          clipPath: 'inset(15% 0 15% 0)',
          y: distance * 0.5,
        };
      case 'up':
      default:
        return { ...base, y: distance };
    }
  };

  const getWhileInView = () => {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateZ: 0,
      filter: 'blur(0px)',
      clipPath: direction === 'clip' ? 'inset(0% 0 0% 0)' : undefined,
    };
  };

  return (
    <Component
      initial={getInitial()}
      whileInView={getWhileInView()}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: direction === 'clip' ? CINEMATIC_EASE : PREMIUM_EASE,
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
