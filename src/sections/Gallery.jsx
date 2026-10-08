import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import GalleryCard from '../components/GalleryCard';
import GalleryLightbox from '../components/GalleryLightbox';
import { galleryData } from '../data/portfolioData';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

// Multi-directional entrances for gallery items:
// slide from top, bottom, left, right, scale-in
const getGalleryEntrance = (index, shouldReduceMotion) => {
  if (shouldReduceMotion) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.4 },
    };
  }

  const variations = [
    { initial: { opacity: 0, y: -50 }, whileInView: { opacity: 1, y: 0 } },  // slide from top
    { initial: { opacity: 0, x: -60 }, whileInView: { opacity: 1, x: 0 } },  // slide from left
    { initial: { opacity: 0, scale: 0.82 }, whileInView: { opacity: 1, scale: 1 } }, // scale-in
    { initial: { opacity: 0, x: 60 }, whileInView: { opacity: 1, x: 0 } },   // slide from right
    { initial: { opacity: 0, y: 60 }, whileInView: { opacity: 1, y: 0 } },   // slide from bottom
    { initial: { opacity: 0, scale: 0.85 }, whileInView: { opacity: 1, scale: 1 } }, // scale-in
  ];

  return variations[index % variations.length];
};

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const categories = ['All', 'Hackathons', 'College', 'Projects', 'Presentations'];

  const filteredItems = galleryData.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  // Scroll tracking across Gallery container for depth parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Multi-plane parallax speeds to create depth:
  // Column 1 moves faster (-30 to 30)
  // Column 2 moves inverted (20 to -20)
  // Column 3 moves slower (-40 to 40)
  const yCol1 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-25, 25]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [20, -20]);
  const yCol3 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-35, 35]);

  return (
    <section
      ref={containerRef}
      id="gallery"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Campus Moments & Field Work"
          title="BEYOND THE CODE"
          subtitle="Real snapshots from college academic presentations at PES MCOE, hackathons, artisan field visits, and project team moments."
        />

        {/* Filter Pills */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cinematic Masonry Gallery with Multi-Directional Entrance & Depth Parallax */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const entrance = getGalleryEntrance(index, shouldReduceMotion);
            // Distribute column parallax
            const colIndex = index % 3;
            const colY = colIndex === 0 ? yCol1 : colIndex === 1 ? yCol2 : yCol3;

            return (
              <motion.div
                key={item.id}
                style={{ y: colY }}
                initial={entrance.initial}
                whileInView={entrance.whileInView}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.75,
                  delay: (index % 3) * 0.12,
                  ease: PREMIUM_EASE,
                }}
              >
                <GalleryCard
                  item={item}
                  index={index}
                  onClick={() => setLightboxIndex(index)}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox Component */}
        {lightboxIndex !== null && (
          <GalleryLightbox
            images={filteredItems}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </div>
    </section>
  );
}
