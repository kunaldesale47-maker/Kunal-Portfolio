import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  Layers,
  Sliders,
  Code2,
  Atom,
  Eye,
  Github,
  ArrowUpRight
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
    id: 'simulation',
    title: 'SIMULATION',
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
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const visualRef = useRef(null);
  const progressLineRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  // Find thin film project data
  const project = projectsData.find((p) => p.id === 'thin-film') || {
    title: 'Thin Film Interference Simulation',
    thumbnail: '/assets/projects/thin_film_simulation.png',
    githubUrl: 'https://github.com/kunaldesale47-maker/Thin-Film-Interference-Simulation',
    liveUrl: '',
  };

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const visual = visualRef.current;
    const progressLine = progressLineRef.current;

    if (!section || !sticky || !visual) return;

    const ctx = gsap.context(() => {
      // Create pinned ScrollTrigger timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
          pin: sticky,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            const stageIndex = Math.min(4, Math.floor(p * 5));
            setActiveStage(stageIndex);
            if (progressLine) {
              gsap.set(progressLine, { scaleX: p, transformOrigin: 'left center' });
            }
          },
        },
      });

      // STAGE 01 -> PHYSICS: visual enters from bottom
      tl.fromTo(
        visual,
        { y: 120, opacity: 0.3, scale: 0.9, filter: 'blur(8px)' },
        { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }
      )
      // STAGE 02 -> INTERFERENCE: visual zooms slightly
      .to(visual, {
        scale: 1.09,
        y: -10,
        filter: 'blur(0px) contrast(1.15)',
        duration: 1.2,
        ease: 'power1.inOut',
      })
      // STAGE 03 -> SIMULATION: visual moves horizontally & zooms
      .to(visual, {
        x: 25,
        scale: 1.14,
        rotateZ: 0.8,
        duration: 1.2,
        ease: 'power1.inOut',
      })
      // STAGE 04 -> CODE: visual shifts upward and recenters
      .to(visual, {
        x: 0,
        y: -35,
        rotateZ: 0,
        scale: 1.05,
        duration: 1.2,
        ease: 'power1.inOut',
      })
      // STAGE 05 -> RESULT: visual becomes fully visible and perfectly positioned
      .to(visual, {
        y: 0,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="physics-simulation"
      className="relative min-h-[350vh] bg-[#07090e]"
    >
      {/* Sticky Viewport pinned by GSAP */}
      <div
        ref={stickyRef}
        className="h-screen w-full flex flex-col justify-between py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-20"
      >
        {/* Dynamic ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-purple-600/15 blur-[140px] pointer-events-none rounded-full" />

        {/* TOP HEADER: Section Title & 5-Stage Stepper Pill */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                  GSAP SCROLLTRIGGER STICKY EXPERIENCE
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-white mt-1">
                THIN FILM INTERFERENCE SIMULATION
              </h2>
            </div>

            {/* Stage Indicators */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {STAGES.map((s, idx) => (
                <div
                  key={s.id}
                  className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono transition-all duration-300 ${
                    activeStage === idx
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                      : 'bg-white/[0.03] text-slate-500 border border-white/5'
                  }`}
                >
                  <span className="font-bold">{s.step}</span>
                  <span className="hidden md:inline">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CINEMATIC STAGE: Split Layout (Narrative Left, Sticky Visual Right) */}
        <div className="max-w-7xl mx-auto w-full my-auto py-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Active Stage Narrative */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[290px] flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono w-fit">
                <Atom className="w-3.5 h-3.5" />
                <span>
                  STAGE {STAGES[activeStage]?.step} • {STAGES[activeStage]?.title}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {STAGES[activeStage]?.badge}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                {STAGES[activeStage]?.desc}
              </p>

              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-cyan-300">
                {STAGES[activeStage]?.formula}
              </div>

              {activeStage === 4 && (
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
              )}
            </div>

            {/* RIGHT COLUMN: The Sticky Visual Controlled by GSAP ScrollTrigger */}
            <div className="lg:col-span-7 flex justify-center">
              <div
                ref={visualRef}
                className="relative w-full max-w-2xl rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#090d16] p-2 sm:p-3 shadow-2xl shadow-cyan-950/40 group will-change-transform"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950">
                  <img
                    src={project.thumbnail}
                    alt="Thin Film Interference Wave Optics Simulation"
                    className="w-full h-full object-cover object-top filter contrast-105"
                    loading="lazy"
                  />

                  {/* Chromatic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/30 via-transparent to-purple-900/30 pointer-events-none" />

                  {/* Corner Status Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#07090e]/90 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                    Wave Optics Simulation Engine
                  </div>
                </div>
              </div>
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
            <div
              ref={progressLineRef}
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 origin-left scale-x-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
