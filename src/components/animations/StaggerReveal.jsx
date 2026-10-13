import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PREMIUM_EASE } from '../../hooks/useScrollAnimations';

export default function StaggerReveal({
  children,
  className = '',
  stagger = 0.08,
  delay = 0,
  distance = 30,
  direction = 'up',
  as: Component = motion.div,
}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const getChildInitial = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -distance, filter: 'blur(4px)' };
      case 'right':
        return { opacity: 0, x: distance, filter: 'blur(4px)' };
      case 'scale':
        return { opacity: 0, scale: 0.9, filter: 'blur(4px)' };
      case 'up':
      default:
        return { opacity: 0, y: distance, filter: 'blur(4px)' };
    }
  };

  const itemVariants = {
    hidden: getChildInitial(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: PREMIUM_EASE,
      },
    },
  };

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return <motion.div variants={itemVariants}>{child}</motion.div>;
      })}
    </Component>
  );
}
