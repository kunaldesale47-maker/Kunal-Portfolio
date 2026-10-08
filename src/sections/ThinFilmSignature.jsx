import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import {
  Sparkles,
  Layers,
  Sliders,
  Code2,
  Atom,
  Eye,
  Github,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

const STAGES = [
  {
    step: '01',
    id: 'physics',
    title: 'PHYSICS',
    badge: 'Wave Optics Theory',
    desc: 'Light waves strike a thin dielectric film (oil slick or soap bubble). At the upper boundary, a fraction reflects immediately while the remainder refracts into the denser medium governed by Snell’s Law.',
    formula: 'n₁ · sin(θ₁) = n₂ · sin(θ₂)',
    tag: 'Electromagnetic Wave Boundary',
  },
  {
    step: '02',
    id: 'interference',
    title: 'INTERFERENCE',
    badge: 'Phase Reversal & Superposition',
    desc: 'Stokes’ relations dictate an automatic π phase change (equivalent to λ/2 optical path difference) upon reflection from a denser medium, determining whether reflected rays constructively reinforce or destructively cancel.',
    formula: 'Δ = 2μt · cos(r) ± λ/2',
    tag: 'Constructive vs. Destructive',
  },
  {
    step: '03',
    id: 'visualization',
    title: 'VISUALIZATION',
    badge: 'Dynamic Ray Tracing',
    desc: 'The simulation dynamically zooms into the microscopic dielectric boundary, calculating split ray angles, refractive index differentials (n₁, n₂, n₃), and generating spectral chromatic fringes in real time.',
    formula: 'Fringe Wavelength λ: [380nm – 750nm]',
    tag: 'Spectral Color Bands',
  },
  {
    step: '04',
    id: 'code',
    title: 'CODE',
    badge: 'Trigonometric Math Engine',
    desc: 'Engineered entirely in vanilla JavaScript with HTML5 Canvas. A high-performance 60fps render loop calculates exact optical coordinates and ray vectors with zero external physics library bloat.',
    formula: 'Vector Physics • 60 FPS Canvas',
    tag: 'Zero-Dependency Architecture',
  },
  {
    step: '05',
    id: 'result',
    title: 'RESULT',
    badge: 'Interactive Open-Source Tool',
    desc: 'An educational physics simulator used by college peers to experiment with real-time sliders for incidence angle, film thickness, and refractive indices to master wave optics through hands-on interaction.',
    formula: 'Interactive Simulator • Open Source',
    tag: 'SPPU Engineering Physics',
  },
];

export default function ThinFilmSignature() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Find thin film project data
  const project = projectsData.find((p) => p.id === 'thin-film') || {
    title: 'Thin Film Interference Simulation',
    thumbnail: '/assets/projects/thin_film_simulation.png',
    githubUrl: 'https://github.com/kunaldesale47-maker/Thin-Film-Interference-Simulation',
    liveUrl: '',
  };

  // Scroll progress for the tall section (350vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Dynamic transformations based on scroll progress:
  // Visual Scale: zooms subtly across stages 1-3 then stabilizes
  const visualScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    shouldReduceMotion ? [1, 1, 1, 1, 1] : [0.96, 1, 1.06, 1.02, 1]
  );

  // Subtle Y translation parallax
  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [20, -20]
  );

  // Chromatic glow intensity
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0.2, 0.45, 0.3, 0.5]
  );

  // Stage opacities for the 5 narrative cards
  const stage1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.22], [1, 1, 0]);
  const stage2Opacity = useTransform(scrollYProgress, [0.18, 0.25, 0.38, 0.45], [0, 1, 1, 0]);
  const stage3Opacity = useTransform(scrollYProgress, [0.42, 0.5, 0.6, 0.68], [0, 1, 1, 0]);
  const stage4Opacity = useTransform(scrollYProgress, [0.65, 0.72, 0.82, 0.88], [0, 1, 1, 0]);
  const stage5Opacity = useTransform(scrollYProgress, [0.85, 0.92, 1], [0, 1, 1]);

  // Stage translations (subtle slide-up as each stage becomes active)
  const stage1Y = useTransform(scrollYProgress, [0, 0.22], [0, -30]);
  const stage2Y = useTransform(scrollYProgress, [0.18, 0.28, 0.45], [30, 0, -30]);
  const stage3Y = useTransform(scrollYProgress, [0.42, 0.52, 0.68], [30, 0, -30]);
  const stage4Y = useTransform(scrollYProgress, [0.65, 0.75, 0.88], [30, 0, -30]);
  const stage5Y = useTransform(scrollYProgress, [0.85, 0.95], [30, 0]);

  // Top progress percentage
  const progressPercent = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      id="physics-simulation"
      className="relative min-h-[350vh] bg-[#07090e]"
    >
      {/* Sticky Cinematic Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-20">
        
        {/* Dynamic ambient background glow linked to scroll */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/20 via-blue-600/15 to-purple-600/20 blur-[140px] pointer-events-none rounded-full"
        />

        {/* TOP HEADER: Section Title & 5-Stage Stepper Pill */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                  STICKY SCROLL EXPERIENCE
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-white mt-1">
                THIN FILM INTERFERENCE SIMULATION
              </h2>
            </div>

            {/* Stage Indicators */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {STAGES.map((s, idx) => {
                const threshold = (idx + 1) * 0.2;
                return (
                  <div
                    key={s.id}
                    className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono border border-white/10 bg-white/[0.03] text-slate-400 transition-colors"
                  >
                    <span className="font-bold text-cyan-400">{s.step}</span>
                    <span className="hidden md:inline">{s.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MAIN CINEMATIC STAGE: Split Layout (Left: Sticky Narrative, Right: Dynamic Transforming Visual) */}
        <div className="max-w-7xl mx-auto w-full my-auto py-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Stacked Stage Narratives (Each fades and transforms in place) */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[280px]">
              
              {/* STAGE 1: PHYSICS */}
              <motion.div
                style={{ opacity: stage1Opacity, y: stage1Y }}
                className="absolute inset-0 flex flex-col justify-center space-y-4 pointer-events-none"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono w-fit">
                  <Atom className="w-3.5 h-3.5" />
                  <span>STAGE 01 • PHYSICS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Wave Boundary & Snell's Law
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {STAGES[0].desc}
                </p>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-cyan-300">
                  {STAGES[0].formula}
                </div>
              </motion.div>

              {/* STAGE 2: INTERFERENCE */}
              <motion.div
                style={{ opacity: stage2Opacity, y: stage2Y }}
                className="absolute inset-0 flex flex-col justify-center space-y-4 pointer-events-none"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono w-fit">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>STAGE 02 • INTERFERENCE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Stokes' Phase Reversal
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {STAGES[1].desc}
                </p>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-blue-300">
                  {STAGES[1].formula}
                </div>
              </motion.div>

              {/* STAGE 3: VISUALIZATION */}
              <motion.div
                style={{ opacity: stage3Opacity, y: stage3Y }}
                className="absolute inset-0 flex flex-col justify-center space-y-4 pointer-events-none"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono w-fit">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>STAGE 03 • VISUALIZATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Spectral Fringes & Real-Time Zoom
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {STAGES[2].desc}
                </p>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-purple-300">
                  {STAGES[2].formula}
                </div>
              </motion.div>

              {/* STAGE 4: CODE */}
              <motion.div
                style={{ opacity: stage4Opacity, y: stage4Y }}
                className="absolute inset-0 flex flex-col justify-center space-y-4 pointer-events-none"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono w-fit">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>STAGE 04 • CODE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Canvas Ray Engine & Math Loop
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {STAGES[3].desc}
                </p>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-emerald-300">
                  {STAGES[3].formula}
                </div>
              </motion.div>

              {/* STAGE 5: RESULT */}
              <motion.div
                style={{ opacity: stage5Opacity, y: stage5Y }}
                className="absolute inset-0 flex flex-col justify-center space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono w-fit">
                  <Eye className="w-3.5 h-3.5" />
                  <span>STAGE 05 • RESULT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Interactive Physics Project
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {STAGES[4].desc}
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Thin Film Simulation GitHub source code (opens in a new tab)"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-cyan-600/30 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>SOURCE CODE</span>
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs sm:text-sm border border-white/10 transition-all"
                  >
                    <span>View In Projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: The Sticky Visual Simulator Frame (Transforms with scale, blur, clip-path) */}
            <div className="lg:col-span-7 flex justify-center">
              <motion.div
                style={{ scale: visualScale, y: visualY }}
                className="relative w-full max-w-2xl rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#090d16] p-2 sm:p-3 shadow-2xl shadow-cyan-950/40 group"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950">
                  <img
                    src={project.thumbnail}
                    alt="Thin Film Interference Wave Optics Simulation"
                    className="w-full h-full object-cover object-top filter contrast-105"
                    loading="lazy"
                  />

                  {/* Dynamic Chromatic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/30 via-transparent to-purple-900/30 pointer-events-none" />

                  {/* Corner Status Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#07090e]/90 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                    Wave Optics Simulation Engine
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* BOTTOM SCROLL PROGRESS SPINE */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pb-2">
            <span>SCROLL TO ADVANCE STAGES</span>
            <span>STAGE 01 → 05</span>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ width: progressPercent }}
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
