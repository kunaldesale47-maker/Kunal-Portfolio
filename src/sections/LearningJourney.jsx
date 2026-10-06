import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { BookOpen, Code, Compass, Rocket, Award, Briefcase, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

const journeyMilestones = [
  {
    step: '01',
    phase: 'Learning Fundamentals',
    focus: 'Core Engineering Foundations',
    desc: 'Mastered programming fundamentals in C, C++, and Python alongside SPPU coursework in discrete mathematics, object-oriented concepts, and engineering physics.',
    icon: BookOpen,
  },
  {
    step: '02',
    phase: 'Exploring Web Technologies',
    focus: 'Modern Web Stack',
    desc: 'Transitioned into modern web development with JavaScript, React, and Tailwind CSS, creating responsive layouts and exploring component-driven state architecture.',
    icon: Code,
  },
  {
    step: '03',
    phase: 'Building Projects',
    focus: 'Interactive Simulations & Tools',
    desc: 'Created the Thin Film Interference Simulation to model wave optics on HTML5 Canvas, connecting academic physics equations with interactive digital visualizers.',
    icon: Compass,
  },
  {
    step: '04',
    phase: 'Working With Real Projects',
    focus: 'Community Impact (CEP)',
    desc: 'Conducted field visits to traditional Ganpati idol sculptors in Pen, Maharashtra, developing Shree Ganesh Kala Kendra to streamline customer orders, catalog display, and accounts.',
    icon: Rocket,
  },
  {
    step: '05',
    phase: 'Improving Problem Solving',
    focus: 'Hackathons & Data Structures',
    desc: 'Competed with college peers in Smart India Hackathon (SIH 2025) with KrishiSetu, focusing on agricultural market intelligence, algorithms, and collaborative team engineering.',
    icon: Award,
  },
  {
    step: '06',
    phase: 'Preparing for Opportunities',
    focus: 'Internship Ready • Class of 2029',
    desc: 'Consistently maintaining a 9.11 first-year CGPA while building practical systems, expanding backend API knowledge, and preparing for summer 2026 engineering internships.',
    icon: Briefcase,
  },
];

export default function LearningJourney() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking to fill timeline spine
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 70%'],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['100%', '100%'] : ['0%', '100%']
  );

  return (
    <section
      ref={containerRef}
      id="journey"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#07090e]/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Growth Roadmap"
          title="MY LEARNING JOURNEY"
          subtitle="A progressive, honest roadmap tracking my evolution from engineering fundamentals to real-world software, hackathons, and internship preparation."
        />

        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Background Track */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-6 w-0.5 bg-white/10" />

          {/* Animated Growing Timeline Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 sm:left-8 top-3 w-0.5 bg-gradient-to-b from-blue-500 via-sky-400 to-purple-500 origin-top shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          />

          {/* Milestones list */}
          <div className="space-y-8 sm:space-y-12">
            {journeyMilestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -25 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: PREMIUM_EASE }}
                  className="relative pl-12 sm:pl-20 group"
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute left-1.5 sm:left-5.5 top-5 -translate-x-1/2 w-6 h-6 rounded-full bg-[#07090e] border-2 border-blue-500 flex items-center justify-center group-hover:scale-125 group-hover:border-sky-300 transition-all duration-300 shadow-[0_0_12px_rgba(59,130,246,0.4)]">
                    <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-white transition-colors" />
                  </div>

                  {/* Milestone Card */}
                  <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#0b0f19] border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_10px_35px_-10px_rgba(59,130,246,0.2)] hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-base sm:text-xl font-bold font-display text-white group-hover:text-blue-300 transition-colors">
                          {item.phase}
                        </h3>
                      </div>

                      <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 w-fit">
                        {item.focus}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
