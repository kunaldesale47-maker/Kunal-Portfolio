import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Building2, BookCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { achievementsData } from '../data/portfolioData';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

export default function Achievements() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="achievements" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Milestones"
          title="ACHIEVEMENTS & ACTIVITIES"
          subtitle="Verified technical activities, academic recognitions, and community-oriented engineering initiatives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: PREMIUM_EASE }}
              className="p-6 rounded-3xl bg-[#0b0f19] border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-400/80" />
                  <span>{item.organization}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.05] flex items-center gap-1 text-[11px] font-mono text-slate-400">
                <BookCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Activity</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
