import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { BookOpen, Code, Compass, Rocket, Award, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

const journeyMilestones = [
  {
    step: '01',
    phase: 'Learning Fundamentals',
    focus: 'Core Engineering & Logic Foundations',
    desc: 'Mastered programming foundations in C, C++, and Python alongside SPPU coursework in discrete mathematics, object-oriented principles, and engineering physics.',
    icon: BookOpen,
    tag: 'SPPU First-Year Core',
  },
  {
    step: '02',
    phase: 'Exploring Web Technologies',
    focus: 'Component Architecture & Frontend',
    desc: 'Transitioned into modern web development with JavaScript, React, and Tailwind CSS, creating responsive layouts, state workflows, and component architectures.',
    icon: Code,
    tag: 'Modern Web Stack',
  },
  {
    step: '03',
    phase: 'Building Projects',
    focus: 'Wave Optics & Signal Simulators',
    desc: 'Engineered the Thin Film Interference Simulation on HTML5 Canvas and Fourier Series Visualization in Python, bridging academic equations with real-time digital visualizers.',
    icon: Compass,
    tag: 'Physics & Mathematical Code',
  },
  {
    step: '04',
    phase: 'Real-world Projects',
    focus: 'Community Engagement & SIH Hackathon',
    desc: 'Developed Shree Ganesh Kala Kendra to manage inventory and sales for artisanal idol workshops, and built KrishiSetu for Smart India Hackathon price discovery.',
    icon: Rocket,
    tag: 'Practical Full-Stack Applications',
  },
  {
    step: '05',
    phase: 'Continuous Learning',
    focus: 'Expanding Horizons & Future Readiness',
    desc: 'Consistently maintaining a 9.11 first-year CGPA at PES MCOE Pune while exploring APIs, system design fundamentals, and preparing for summer engineering opportunities.',
    icon: Briefcase,
    tag: 'Active Engineering Growth',
  },
];

export default function LearningJourney() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking to fill timeline spine gradually
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 75%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      id="journey"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#07090e]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Growth & Milestones"
          title="LEARNING JOURNEY"
          subtitle="How curiosity, foundational coursework, and hands-on projects guide my development as a computer engineering student."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12 sm:mt-16">
          
          {/* Vertical Timeline Spine Line: Background rail */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-white/[0.08]" />

          {/* Vertical Line Gradually Fills with Scroll: scaleY 0 -> 1 */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-sky-400 to-purple-500 origin-top shadow-[0_0_12px_rgba(59,130,246,0.6)]"
          />

          {/* Milestones Stack */}
          <div className="space-y-12 sm:space-y-16">
            {journeyMilestones.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              // Alternating entrance:
              // Even: translateX(-60px) -> 0
              // Odd: translateX(60px) -> 0
              const initialX = shouldReduceMotion ? 0 : isEven ? -60 : 60;

              return (
                <div
                  key={item.step}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center"
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 0 } : { scale: 0.5, opacity: 0 }}
                      whileInView={shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.1, ease: PREMIUM_EASE }}
                      className="w-8 h-8 rounded-full bg-[#0b0f19] border-2 border-blue-500/80 shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center text-xs font-mono font-bold text-blue-300"
                    >
                      {item.step}
                    </motion.div>
                  </div>

                  {/* Alternating Content Card:
                      opacity 0 -> 1, scale 0.85 -> 1, translateX alternating left/right -> 0 */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven
                        ? 'sm:pr-12 sm:text-right sm:self-start'
                        : 'sm:pl-12 sm:text-left sm:ml-auto'
                    }`}
                  >
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, scale: 0.85, x: initialX }
                      }
                      whileInView={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { opacity: 1, scale: 1, x: 0 }
                      }
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.75, delay: 0.1, ease: PREMIUM_EASE }}
                      whileHover={shouldReduceMotion ? {} : { y: -4 }}
                      className="p-6 rounded-3xl bg-[#0b0f19] border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl group"
                    >
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}
                      >
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-display text-white group-hover:text-blue-300 transition-colors">
                        {item.phase}
                      </h3>

                      <h4 className="text-xs font-mono text-blue-400 font-medium mt-0.5">
                        {item.focus}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
