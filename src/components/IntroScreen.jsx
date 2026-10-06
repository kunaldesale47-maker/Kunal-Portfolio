import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, FastForward, Sparkles, Terminal } from 'lucide-react';

export default function IntroScreen({ onComplete }) {
  const [skipped, setSkipped] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if intro has already been shown in this session or skipped via URL
    const hasSeenIntro = sessionStorage.getItem('kunal_intro_viewed');
    const urlParams = new URLSearchParams(window.location.search);
    if (hasSeenIntro || urlParams.get('skipIntro') === 'true' || window.location.hash) {
      onComplete();
      return;
    }

    // Auto-complete after 3.8 seconds max if user doesn't interact
    const timer = setTimeout(() => {
      handleFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem('kunal_intro_viewed', 'true');
    setSkipped(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <AnimatePresence>
      {!skipped && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#07090e] text-white overflow-hidden"
        >
          {/* Subtle Ambient Video Background if available */}
          {!videoError ? (
            <video
              ref={videoRef}
              src="/assets/videos/intro.mp4"
              autoPlay
              muted
              playsInline
              onError={() => setVideoError(true)}
              onEnded={handleFinish}
              className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-75 contrast-125"
            />
          ) : null}

          {/* Radial Gradient Glows */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.18),rgba(255,255,255,0))]"></div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(139,92,246,0.15),rgba(255,255,255,0))]"></div>

          {/* Central Animated Content */}
          <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
            {/* Terminal tag pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>system.init(kunal.portfolio)</span>
            </motion.div>

            {/* Main Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 font-display"
            >
              HELLO, I'M <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">KUNAL</span>.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-slate-300 text-lg sm:text-xl font-light tracking-wide max-w-md mx-auto"
            >
              I turn ideas into reality.
            </motion.p>

            {/* Student Identity Tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-slate-500 text-xs sm:text-sm font-mono mt-3 uppercase tracking-widest"
            >
              Computer Engineering Student • PES MCOE Pune
            </motion.p>

            {/* Loading progress bar */}
            <div className="w-48 sm:w-64 h-1 bg-slate-800/80 rounded-full mx-auto mt-8 overflow-hidden border border-white/5">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>
          </div>

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleFinish}
            className="absolute bottom-8 right-8 z-20 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 backdrop-blur-md transition-all duration-200"
          >
            <span>Skip Intro</span>
            <FastForward className="w-3.5 h-3.5 text-blue-400" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
