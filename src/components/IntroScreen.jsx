import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PREMIUM_EASE, CINEMATIC_EASE } from '../hooks/useScrollAnimations';

export default function IntroScreen({ onComplete }) {
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('skipIntro') === 'true' || window.location.hash) {
      onComplete();
      return;
    }

    // Auto-complete after 3.2 seconds
    const timer = setTimeout(() => {
      handleFinish();
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  const handleFinish = () => {
    setSkipped(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <AnimatePresence>
      {!skipped && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
          transition={{ duration: 0.7, ease: CINEMATIC_EASE }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070d] text-white overflow-hidden"
        >
          {/* Subtle Ambient Light Movement in Deep Navy / Black */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.15, 0.35, 0.2], scale: [0.9, 1.15, 1] }}
            transition={{ duration: 3.4, ease: 'easeInOut' }}
            className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-blue-700/20 via-sky-500/15 to-purple-600/10 blur-[140px] rounded-full pointer-events-none"
          />

          {/* Central Animated Content */}
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-4">
            
            {/* Identity Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: PREMIUM_EASE }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>Computer Engineering Student</span>
            </motion.div>

            {/* Main Reveal: HELLO, I'M KUNAL.
                Animation:
                - initially invisible (opacity 0)
                - slight blur (blur 12px)
                - scale 1.08
                - gradually becomes sharp (blur 0px)
                - scale reaches 1
                - opacity reaches 1 */}
            <motion.h1
              initial={{ opacity: 0, scale: 1.08, filter: 'blur(12px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.45, ease: CINEMATIC_EASE }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-white"
            >
              HELLO, I'M{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                KUNAL
              </span>
              <span className="text-blue-500">.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 1.2, ease: PREMIUM_EASE }}
              className="text-slate-300 text-base sm:text-xl font-light tracking-wide max-w-md mx-auto"
            >
              I turn ideas into reality.
            </motion.p>

            {/* Engineering Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-slate-400 text-xs font-mono tracking-widest uppercase pt-2"
            >
              PES Modern College of Engineering • Pune
            </motion.p>

          </div>

          {/* Skip CTA */}
          <div className="absolute bottom-8 right-8 z-20">
            <button
              onClick={handleFinish}
              className="text-xs font-mono text-slate-500 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/20"
            >
              Skip Intro →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
