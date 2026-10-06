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

const highlights = [
  {
    icon: Code2,
    title: "Programming Fundamentals",
    desc: "Writing structured, logic-driven code in C, C++, and Python with an emphasis on OOP and computational clarity."
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Building responsive frontend experiences with React.js, Tailwind CSS, and exploring Node.js APIs."
  },
  {
    icon: Cpu,
    title: "Scientific Simulations",
    desc: "Bridging physics concepts and computer graphics by designing interactive optical and wave simulations."
  },
  {
    icon: Users,
    title: "Teamwork & Hackathons",
    desc: "Collaborating with fellow student engineers to brainstorm and prototype solutions for Smart India Hackathon."
  }
];

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Portrait Card (slide from left + fade) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -35 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#101726] to-[#07090e] p-3 shadow-2xl group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                <img
                  src={personalInfo.portrait}
                  alt="Kunal Desale at Work"
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

          {/* Right Column: Text & Narrative (slide from right + fade) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 35 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.7, delay: 0.1, ease: PREMIUM_EASE }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0e1424] to-[#07090e] border border-white/10 shadow-xl space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white leading-snug">
                I'm a Computer Engineering student passionate about technology, problem solving, and building practical projects.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Currently pursuing my Bachelor of Engineering in Computer Engineering at{' '}
                <span className="text-blue-300 font-medium">PES Modern College of Engineering, Pune</span> (affiliated with Savitribai Phule Pune University). 
                I believe genuine engineering growth comes from active experimentation, tackling challenging concepts, and turning code into working digital solutions.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
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

        {/* Verified Stats Cards with Count-Up Animation (opacity 0 -> 1, translateY 30px -> 0, staggered) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.65, delay: 0.15, ease: PREMIUM_EASE }}
          className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatedStat
            value="9.11"
            numValue={9.11}
            isNumeric={true}
            decimals={2}
            label="9.11 CGPA"
            helper="First-Year Academic Record"
          />
          <AnimatedStat
            value="PES MCOE"
            isNumeric={false}
            label="Computer Engineering"
            helper="SPPU Affiliated Department"
          />
          <AnimatedStat
            value="4+"
            numValue={4}
            isNumeric={true}
            suffix="+"
            label="Projects Built"
            helper="Full-Stack & Simulations"
          />
          <AnimatedStat
            value="Active"
            isNumeric={false}
            label="Technology Explorer"
            helper="Continuous Hands-On Learning"
          />
        </motion.div>

        {/* Highlight Focus Cards (Staggered) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: PREMIUM_EASE }}
                className="p-5 rounded-2xl bg-[#090d16] border border-white/5 hover:border-blue-500/25 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold font-display text-white mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
