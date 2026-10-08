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

// Helper to determine specific directional entrance based on user requirements
const getSkillEntrance = (skillName, idx, shouldReduceMotion) => {
  if (shouldReduceMotion) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.4 },
    };
  }

  const name = skillName.toLowerCase();

  // Explicit mappings from user prompt:
  if (name === 'c') {
    return {
      initial: { opacity: 0, x: -60 }, // left -> center
      whileInView: { opacity: 1, x: 0 },
    };
  }
  if (name.includes('c++')) {
    return {
      initial: { opacity: 0, y: 60 }, // bottom -> center
      whileInView: { opacity: 1, y: 0 },
    };
  }
  if (name.includes('python')) {
    return {
      initial: { opacity: 0, x: 60 }, // right -> center
      whileInView: { opacity: 1, x: 0 },
    };
  }
  if (name.includes('javascript')) {
    return {
      initial: { opacity: 0, y: -60 }, // top -> center
      whileInView: { opacity: 1, y: 0 },
    };
  }
  if (name.includes('react')) {
    return {
      initial: { opacity: 0, scale: 0.8 }, // scale 0.8 -> 1
      whileInView: { opacity: 1, scale: 1 },
    };
  }
  if (name.includes('mongo')) {
    return {
      initial: { opacity: 0, y: 60 }, // bottom -> center
      whileInView: { opacity: 1, y: 0 },
    };
  }

  // Cyclical multi-directional entrance for remaining skills
  const patterns = [
    { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 } }, // left
    { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 } },  // bottom
    { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 } },  // right
    { initial: { opacity: 0, y: -50 }, whileInView: { opacity: 1, y: 0 } }, // top
    { initial: { opacity: 0, scale: 0.85 }, whileInView: { opacity: 1, scale: 1 } }, // scale
  ];

  return patterns[idx % patterns.length];
};

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
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide transition-all ${
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
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skill Groups Grid with Multi-directional Staggered Entrances */}
        <div className="space-y-12">
          {categories
            .filter((c) => activeCategory === 'all' || activeCategory === c.key)
            .map((cat) => {
              const items = skillsData[cat.key] || [];
              const Icon = cat.icon;

              return (
                <div key={cat.key} className="space-y-4">
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -25 }}
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
                    {items.map((skill, idx) => {
                      const motionProps = getSkillEntrance(skill.name, idx, shouldReduceMotion);

                      return (
                        <motion.div
                          key={skill.name}
                          initial={motionProps.initial}
                          whileInView={motionProps.whileInView}
                          viewport={{ once: true, amount: 0.15 }}
                          transition={{
                            duration: 0.7,
                            delay: (idx % 4) * 0.09,
                            ease: PREMIUM_EASE,
                          }}
                          whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
                          className="group relative p-4 rounded-2xl bg-[#0b0f19] border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <h4 className="text-sm font-bold font-display text-white group-hover:text-blue-300 transition-colors">
                                {skill.name}
                              </h4>
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                {skill.level}
                              </span>
                            </div>

                            <p className="text-xs text-slate-400 leading-relaxed font-light">
                              {skill.desc}
                            </p>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500">
                            <span>Status</span>
                            <span className="text-slate-400">Practicing</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
}
