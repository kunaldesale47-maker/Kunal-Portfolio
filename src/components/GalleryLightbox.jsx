import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';

export default function GalleryLightbox({ items, currentIndex, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;
  const current = items[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#07090e]/95 backdrop-blur-xl"
        />

        {/* Top Controls */}
        <div className="fixed top-5 inset-x-0 z-30 max-w-7xl mx-auto px-6 flex items-center justify-between pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/15 text-blue-400 border border-blue-500/30 backdrop-blur-md">
              {current.category}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="pointer-events-auto p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-colors shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
              aria-label="Previous image"
              className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 backdrop-blur-md transition-all shadow-xl hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => onNavigate((currentIndex + 1) % items.length)}
              aria-label="Next image"
              className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 backdrop-blur-md transition-all shadow-xl hover:scale-105"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Modal Content Frame */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative z-20 max-w-5xl w-full flex flex-col items-center max-h-[85vh]"
        >
          {/* Main Visual Frame */}
          <div className="relative w-full max-h-[65vh] flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 bg-slate-950/80 shadow-2xl">
            <img
              src={current.image}
              alt={current.title}
              className="max-h-[65vh] w-auto max-w-full object-contain"
            />
          </div>

          {/* Caption & Metadata Card */}
          <div className="w-full mt-4 p-4 sm:p-5 rounded-2xl bg-[#0b0f19]/90 border border-white/10 backdrop-blur-md text-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-base sm:text-lg font-bold font-display text-white">
                {current.title}
              </h3>
              {current.date && (
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  {current.date}
                </span>
              )}
            </div>

            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {current.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
