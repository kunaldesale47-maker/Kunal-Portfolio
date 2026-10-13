import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function ParallaxImage({
  src,
  alt = '',
  className = '',
  aspectRatio = 'aspect-[16/10]',
  speed = 0.15,
  overlay = true,
  children,
}) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : [`${speed * 60}px`, `${-speed * 60}px`]
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden group ${aspectRatio} ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      )}
      {children}
    </div>
  );
}
