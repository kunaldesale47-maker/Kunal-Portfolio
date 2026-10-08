import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Code2, Globe, Cpu, Users, GraduationCap, Award, Compass, Sparkles, BookOpen } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';
import { useCountUp } from '../hooks/useCountUp';

function AnimatedStat({ value, label, helper, isNumeric, numValue, decimals = 0, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 'some' });
  const count = useCountUp(numValue || 0, 1800, decimals, isInView && isNumeric);

  return (
    <div
      ref={ref}
      className="p-5 rounded-3xl bg-[#0b0f19] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between group shadow-lg"
    >
      <div className="text-3xl sm:text-4xl font-extrabold font-display bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
        {isNumeric ? `${count}${suffix}` : value}
      </div>
      <div className="mt-3">
        <div className="text-xs sm:text-sm font-semibold text-slate-200">
          {label}
        </div>
        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
          {helper}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Background & Identity"
          title="WHO I AM"
          subtitle="Honest, curious, and dedicated to learning through hands-on engineering."
        />

        {/* Split Layout: LEFT Portrait, RIGHT Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: Portrait (translateX(-100px) -> 0, opacity 0 -> 1) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -100 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: PREMIUM_EASE }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#101726] to-[#07090e] p-3 shadow-2xl group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                <img
                  src={personalInfo.portrait}
                  alt="Kunal Desale - Computer Engineering Student"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/90 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#07090e]/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-display font-semibold text-sm">PES Modern College of Engineering</p>
                      <p className="text-[11px] text-blue-400 font-mono">Pune, Maharashtra</p>
                    </div>
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Text (translateX(100px) -> 0, opacity 0 -> 1) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 100 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1, ease: PREMIUM_EASE }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0e1424] to-[#07090e] border border-white/10 shadow-xl space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white leading-snug">
                I'm a Computer Engineering student passionate about technology, problem solving, and building practical projects.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Currently pursuing my Bachelor of Technology in Computer Engineering at{' '}
                <span className="text-blue-300 font-medium">PES Modern College of Engineering, Pune</span> (affiliated with Savitribai Phule Pune University). 
                I believe genuine engineering growth comes from active experimentation, tackling challenging concepts, and turning code into working digital solutions.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed font-light">
                From developing an artisan management portal for traditional Ganpati sculptors during our college community engagement project, 
                to architecting farm-to-market solutions for the Smart India Hackathon and designing interactive optics simulations in physics, 
                I enjoy learning through direct implementation.
              </p>

              {/* What Kunal enjoys checklist */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Core C, C++, and Python programming",
                  "Responsive web applications with React",
                  "Experimenting with modern tech & APIs",
                  "Building real-world student projects",
                  "Hands-on debugging and problem solving",
                  "Participating in technical hackathons"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics: Multi-directional Entrances */}
        {/* Card 1: translateY(60px)
            Card 2: translateX(50px)
            Card 3: scale(0.8) -> 1
            Card 4: translateY(-40px) */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: translateY(60px) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 60 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05, ease: PREMIUM_EASE }}
          >
            <AnimatedStat
              value="9.11"
              numValue={9.11}
              isNumeric={true}
              decimals={2}
              label="9.11 CGPA"
              helper="First-Year Academic Record"
            />
          </motion.div>

          {/* Card 2: translateX(50px) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 50 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: PREMIUM_EASE }}
          >
            <AnimatedStat
              value="PES MCOE"
              isNumeric={false}
              label="Computer Engineering"
              helper="SPPU Affiliated Department"
            />
          </motion.div>

          {/* Card 3: scale(0.8) -> scale(1) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.25, ease: PREMIUM_EASE }}
          >
            <AnimatedStat
              value="8+"
              numValue={8}
              isNumeric={true}
              suffix="+"
              label="Projects Built"
              helper="Full-Stack, Simulations & Tools"
            />
          </motion.div>

          {/* Card 4: translateY(-40px) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -40 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.35, ease: PREMIUM_EASE }}
          >
            <AnimatedStat
              value="Active"
              isNumeric={false}
              label="Technology Explorer"
              helper="Continuous Hands-On Learning"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
