import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import GalleryCard from '../components/GalleryCard';
import GalleryLightbox from '../components/GalleryLightbox';
import { galleryData } from '../data/portfolioData';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const categories = ['All', 'Hackathons', 'College', 'Projects', 'Presentations'];

  const filteredItems = galleryData.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  return (
    <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
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
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>

        {/* Fullscreen Lightbox */}
        {lightboxIndex !== null && (
          <GalleryLightbox
            items={filteredItems}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={(newIndex) => setLightboxIndex(newIndex)}
          />
        )}
      </div>
    </section>
  );
}
