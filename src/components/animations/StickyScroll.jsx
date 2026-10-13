import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { PREMIUM_EASE } from '../../hooks/useScrollAnimations';

export default function StickyScroll({
  stages = [],
  className = '',
  stickyHeight = 'h-[80vh]',
  sectionHeight = 'min-h-[300vh]',
  renderVisual,
}) {
  const containerRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const total = stages.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const stageIndex = Math.min(
      total - 1,
      Math.max(0, Math.floor(latest * total))
    );
    if (stageIndex !== activeStage) {
      setActiveStage(stageIndex);
    }
  });

  return (
    <div ref={containerRef} className={`relative ${sectionHeight} ${className}`}>
      <div className={`sticky top-20 w-full ${stickyHeight} flex flex-col justify-between overflow-hidden z-20`}>
        {/* Stage Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          {/* Stepper Pills */}
          <div className="flex items-center gap-2 pb-4">
            {stages.map((stg, i) => (
              <div
                key={stg.id || i}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 ${
                  activeStage === i
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                    : 'bg-white/5 text-slate-400 border border-white/5'
                }`}
              >
                <span>{stg.step || `0${i + 1}`}</span>{' '}
                <span className="hidden sm:inline">{stg.title}</span>
              </div>
            ))}
          </div>

          {/* Active Stage Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
            <div className="lg:col-span-5 space-y-4">
              <motion.div
                key={activeStage}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, ease: PREMIUM_EASE }}
                className="space-y-3"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  {stages[activeStage]?.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {stages[activeStage]?.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {stages[activeStage]?.desc}
                </p>
                {stages[activeStage]?.extra}
              </motion.div>
            </div>

            <div className="lg:col-span-7 flex justify-center">
              {renderVisual ? (
                renderVisual(activeStage, scrollYProgress)
              ) : (
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950 p-2">
                  <img
                    src={stages[activeStage]?.image}
                    alt={stages[activeStage]?.title}
                    className="w-full aspect-[16/10] object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Scroll Track */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-4">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-purple-500 origin-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
