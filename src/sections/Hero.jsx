import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin, Mail, Sparkles, Terminal, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

export default function Hero() {
  const [videoError, setVideoError] = useState(false);
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ['0%', '0%'] : ['0%', '25%']);
  const yGlow = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ['0%', '0%'] : ['0%', '-15%']);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Video with subtle parallax and heavy contrast overlay */}
      {!videoError && (
        <motion.div
          style={{ y: yBg }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        >
          <video
            src={personalInfo.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover opacity-40 sm:opacity-50 filter contrast-115 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/70 via-[#07090e]/50 to-[#07090e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#07090e_85%)]" />
        </motion.div>
      )}

      {/* Decorative ambient glow with parallax */}
      <motion.div
        style={{ y: yGlow }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/15 via-purple-600/10 to-sky-400/10 blur-[130px] rounded-full pointer-events-none -z-10"
      />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status / Role Tag */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: PREMIUM_EASE }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-[11px] sm:text-xs font-mono tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>Computer Engineering Student • SPPU</span>
            </motion.div>

            {/* Main Headings */}
            <div className="space-y-2">
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2, ease: PREMIUM_EASE }}
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight font-display text-white"
              >
                HELLO, I'M{' '}
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                  KUNAL
                </span>
                <span className="text-blue-500">.</span>
              </motion.h1>

              <motion.h2
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.32, ease: PREMIUM_EASE }}
                className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-300 font-display flex items-center justify-center lg:justify-start gap-2"
              >
                <span>Computer Engineering Student</span>
              </motion.h2>
            </div>

            {/* Supporting Text & Honest Positioning */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: PREMIUM_EASE }}
              className="space-y-3"
            >
              <p className="text-blue-300/90 font-medium text-base sm:text-lg">
                Learning. Building. Exploring Technology.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Second-year student at <span className="text-white font-medium">PES Modern College of Engineering, Pune</span> with a passion for web technologies, scientific problem solving, and turning ideas into working digital systems.
              </p>
            </motion.div>

            {/* Short punchline */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: PREMIUM_EASE }}
              className="text-xs sm:text-sm font-mono text-blue-400/90 flex items-center justify-center lg:justify-start gap-2"
            >
              <Terminal className="w-4 h-4 text-purple-400" />
              <span>&ldquo;{personalInfo.tagline}&rdquo;</span>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.58, ease: PREMIUM_EASE }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto justify-center group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-sky-400 text-white font-medium text-sm shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                <span>EXPLORE PROJECTS</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 hover:border-blue-500/40 font-medium text-sm transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>VIEW RESUME</span>
              </a>
            </motion.div>

            {/* Social Icons Bar (fade + slight upward movement, staggered) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.68, ease: PREMIUM_EASE }}
              className="flex items-center justify-center lg:justify-start gap-3 pt-4"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mr-2">
                Connect:
              </span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/10 hover:border-blue-500/30 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/10 hover:border-blue-500/30 transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/10 hover:border-blue-500/30 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Frame (scale 0.95 -> 1, opacity 0 -> 1) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: PREMIUM_EASE }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Soft ambient back-glow behind portrait */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-sky-400/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Main Portrait Card Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#141a29]/90 to-[#07090e] p-2 shadow-2xl backdrop-blur-md">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                  <img
                    src={personalInfo.portrait}
                    alt="Kunal Desale - Computer Engineering Student"
                    className="w-full h-full object-cover object-center filter contrast-105"
                  />
                  {/* Subtle inner lighting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/90 via-transparent to-transparent opacity-70" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#07090e]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-display font-bold text-sm">
                        Kunal Desale
                      </h4>
                      <p className="text-[11px] text-blue-400 font-mono">
                        B.Tech Computer Engineering
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs font-bold">
                      9.11 CGPA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 sm:mt-24 flex justify-center"
        >
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="group flex flex-col items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Explore</span>
            <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-blue-400/50 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-2.5 rounded-full bg-blue-400"
              />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
