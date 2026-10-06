import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Cpu, ExternalLink, Github, Sparkles, Layers, Sliders, Play, Code2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

export default function ThinFilmSignature() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Find thin film project
  const project = projectsData.find((p) => p.id === 'thin-film') || {
    title: 'Thin Film Interference Simulation',
    thumbnail: '/assets/projects/thin_film_simulation.png',
    githubUrl: 'https://github.com/kunaldesale47-maker/Thin-Film-Interference-Simulation',
    liveUrl: '#',
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Project screenshot moves slightly upward (subtle parallax)
  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0px', '0px'] : ['40px', '-40px']
  );

  return (
    <section
      ref={containerRef}
      id="physics-simulation"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#07090e] via-[#0a0f1d] to-[#07090e]"
    >
      {/* Ambient optical chromatic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading: PHYSICS × CODE */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: PREMIUM_EASE }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature Engineering Showcase</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: PREMIUM_EASE }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white"
          >
            PHYSICS{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              ×
            </span>{' '}
            CODE
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2, ease: PREMIUM_EASE }}
            className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Bridging theoretical wave optics and computational science. An interactive physics simulation engineered to visualize light wave interference across thin dielectric films in real time.
          </motion.p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual with Parallax upward movement */}
          <motion.div
            style={{ y: yParallax }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#090d16] p-2 sm:p-3 shadow-2xl shadow-cyan-950/40 group">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950">
                <img
                  src={project.thumbnail}
                  alt="Thin Film Interference Optics Simulation"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle chromatic overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/30 via-transparent to-purple-900/30 pointer-events-none" />

                {/* Status chip */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#07090e]/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Interactive Canvas Engine
                  </span>
                </div>
              </div>

              {/* Bottom formula pill */}
              <div className="mt-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2">
                <span>Path Diff: Δ = 2μt·cos(r) + λ/2</span>
                <span className="text-cyan-400">λ ∈ [380nm – 750nm]</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Progressive text reveal & scientific breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: PREMIUM_EASE }}
              className="space-y-3"
            >
              <h3 className="text-2xl font-bold font-display text-white">
                Thin Film Interference Simulation
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                When monochromatic or white light reflects from the upper and lower boundaries of a thin film (such as an oil slick or soap bubble), phase differences produce constructive and destructive interference fringes.
              </p>
            </motion.div>

            {/* Scientific Cards */}
            <div className="space-y-3">
              {[
                {
                  title: "Real-Time Phase Calculations",
                  desc: "Calculates optical path differences dynamically as users modify film thickness (t), angle of incidence (i), and refractive index (μ).",
                  icon: Sliders,
                  color: "text-cyan-400",
                },
                {
                  title: "Spectral Color Synthesis",
                  desc: "Converts calculated constructive wavelengths (nm) into corresponding RGB gamut values on HTML5 Canvas.",
                  icon: Layers,
                  color: "text-blue-400",
                },
                {
                  title: "Engineering Pedagogy",
                  desc: "Developed as part of the Engineering Physics curriculum at PES Modern College of Engineering to enhance visual intuition for wave optics.",
                  icon: Code2,
                  color: "text-purple-400",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                    whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: PREMIUM_EASE }}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all flex items-start gap-3.5 group"
                  >
                    <div className={`p-2 rounded-xl bg-white/5 ${item.color} group-hover:scale-110 transition-transform shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white font-display mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Links & CTA */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: PREMIUM_EASE }}
              className="flex items-center gap-3 pt-2"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 text-xs sm:text-sm font-medium transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs sm:text-sm transition-all"
              >
                <span>All Projects</span>
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
