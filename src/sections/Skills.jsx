import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code, Globe2, Server, Database, Wrench, Shield, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { skillsData } from '../data/portfolioData';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

const categories = [
  { key: 'programming', label: 'Programming', icon: Code },
  { key: 'web', label: 'Frontend', icon: Globe2 },
  { key: 'backend', label: 'Backend', icon: Server },
  { key: 'database', label: 'Database', icon: Database },
  { key: 'tools', label: 'Tools', icon: Wrench },
  { key: 'foundations', label: 'Foundations', icon: Shield },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Continuous Growth"
          title="WHAT I'M LEARNING"
          subtitle="Honest, category-organized technologies and fundamental concepts I actively practice and apply in student projects."
        />

        {/* Category Filter Pills */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            All Areas
          </button>

          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skill Groups Grid */}
        <div className="space-y-10">
          {categories
            .filter((c) => activeCategory === 'all' || activeCategory === c.key)
            .map((cat) => {
              const items = skillsData[cat.key] || [];
              const Icon = cat.icon;

              return (
                <div key={cat.key} className="space-y-4">
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                    whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: PREMIUM_EASE }}
                    className="flex items-center gap-2.5 pb-2 border-b border-white/[0.07]"
                  >
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold font-display text-white tracking-wide">
                      {cat.label}
                    </h3>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {items.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
                        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ duration: 0.6, delay: idx * 0.07, ease: PREMIUM_EASE }}
                        whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.01 }}
                        className="group p-4 rounded-2xl bg-[#0b0f19] border border-white/10 hover:border-blue-500/40 hover:bg-[#0f1424] transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-[0_8px_30px_-5px_rgba(59,130,246,0.25)]"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-display font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                              {skill.name}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {skill.desc}
                          </p>
                        </div>

                        <div className="pt-3 mt-3 border-t border-white/[0.04] flex items-center justify-between">
                          <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 group-hover:bg-blue-400 transition-colors" />
                            Active practice
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Note on genuine learning */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.2, ease: PREMIUM_EASE }}
          className="mt-12 p-4 rounded-2xl bg-white/[0.02] border border-white/5 max-w-2xl mx-auto text-center"
        >
          <p className="text-xs text-slate-400 font-mono">
            💡 <span className="text-slate-300">Engineering Philosophy:</span> Focusing on clean code fundamentals, understanding memory & algorithms, and writing readable, testable implementations rather than memorizing frameworks.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
