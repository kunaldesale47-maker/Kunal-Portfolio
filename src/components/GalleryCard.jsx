import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

export default function GalleryCard({ item, onClick, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 30 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: PREMIUM_EASE }}
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden bg-[#0b0f19] border border-white/10 hover:border-blue-500/40 cursor-pointer shadow-lg hover:shadow-[0_10px_30px_-8px_rgba(59,130,246,0.25)] transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#07090e]/85 backdrop-blur-md text-blue-400 border border-white/10">
            {item.category}
          </span>
        </div>

        {/* Zoom Hint Icon */}
        <div className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-900/80 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md group-hover:scale-110">
          <Maximize2 className="w-3.5 h-3.5" />
        </div>

        {/* Bottom Caption Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-4 transition-transform duration-300 group-hover:-translate-y-1">
          <h4 className="text-sm font-bold font-display text-white group-hover:text-blue-300 transition-colors line-clamp-1">
            {item.title}
          </h4>
          <p className="text-[11px] text-slate-300 line-clamp-2 mt-0.5 font-light">
            {item.caption}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
