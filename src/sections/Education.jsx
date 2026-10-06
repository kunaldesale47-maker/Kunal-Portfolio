import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Award, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/portfolioData';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

export default function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="education" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Academic Background"
          title="EDUCATION"
          subtitle="Strong academic foundation in Computer Engineering and sciences with consistent performance."
        />

        <div className="relative max-w-4xl mx-auto space-y-8">
          {/* Vertical Track Line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-slate-800 -z-0" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: index * 0.15, ease: PREMIUM_EASE }}
              className="relative pl-12 sm:pl-20 group"
            >
              {/* Node Icon on Timeline */}
              <div className="absolute left-1.5 sm:left-5 top-4 w-6 h-6 rounded-full bg-[#07090e] border-2 border-blue-500 group-hover:border-purple-400 flex items-center justify-center -translate-x-1/2 transition-colors z-10 shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-purple-300 transition-colors" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0b0f19] border border-white/10 group-hover:border-blue-500/30 transition-all duration-300 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                      {edu.branch || 'Secondary Education'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-blue-300 font-medium text-sm sm:text-base mt-1">
                      {edu.degree}
                    </p>
                    {edu.location && (
                      <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{edu.location}</span>
                      </p>
                    )}
                  </div>

                  {/* Highlight Score Pill */}
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white font-mono font-bold text-sm border border-blue-500/30 shadow-sm">
                      <Award className="w-4 h-4 text-blue-400" />
                      <span>{edu.highlight}</span>
                    </span>
                  </div>
                </div>

                {/* Details list */}
                <div className="space-y-2 pt-2 border-t border-white/[0.05]">
                  {edu.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
