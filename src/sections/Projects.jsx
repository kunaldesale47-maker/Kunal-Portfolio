import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowUpRight,
  Code2,
  FolderGit2,
  Terminal,
  Eye,
  ChevronRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projectsData, githubReposData } from '../data/projectsData';
import { PREMIUM_EASE, CINEMATIC_EASE } from '../hooks/useScrollAnimations';

/**
 * Editorial alternating case-study card for Featured Projects
 * Layouts:
 * PROJECT 01 & 03: Text on LEFT, Image on RIGHT
 * PROJECT 02 & 04: Image on LEFT, Text on RIGHT
 */
function CinematicProjectItem({ project, index, onSelect }) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking per project block
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax subtle vertical movement: -40px
  const imageYParallax = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [20, -40]
  );

  // Transition when leaving project: scale 1 -> 0.95, opacity 1 -> 0.4
  const exitScale = useTransform(
    scrollYProgress,
    [0.75, 1],
    shouldReduceMotion ? [1, 1] : [1, 0.95]
  );
  const exitOpacity = useTransform(
    scrollYProgress,
    [0.8, 1],
    shouldReduceMotion ? [1, 1] : [1, 0.5]
  );

  // PROJECT 01 & 03: Text Left, Image Right
  // PROJECT 02 & 04: Image Left, Text Right
  const isImageRight = index % 2 === 0;

  return (
    <motion.div
      ref={containerRef}
      style={{ scale: exitScale, opacity: exitOpacity }}
      className="relative rounded-3xl bg-[#0b0f19]/90 border border-white/10 hover:border-blue-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-sm transition-colors duration-500"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* TEXT COLUMN */}
        <div
          className={`lg:col-span-6 space-y-6 ${
            isImageRight ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
          }`}
        >
          {/* Project Number & Category Pill */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            className="flex items-center gap-3"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-blue-400">
              PROJECT {String(index + 1).padStart(2, '0')}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
              {project.category}
            </span>
            {project.liveUrl && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            )}
          </motion.div>

          {/* Project Title: translateY(60px) -> 0 */}
          <motion.h3
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 60 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: PREMIUM_EASE }}
            onClick={() => onSelect(project)}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white hover:text-blue-400 transition-colors cursor-pointer"
          >
            {project.title}
          </motion.h3>

          {/* Description: translateY(40px) -> 0 */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: PREMIUM_EASE }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed font-light"
          >
            {project.description || project.overview}
          </motion.p>

          {/* Technology tags: opacity 0 -> 1, stagger */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: PREMIUM_EASE }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.04] text-slate-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Buttons: translateY(20px) -> 0 */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.4, ease: PREMIUM_EASE }}
            className="pt-2 flex flex-wrap items-center gap-3"
          >
            {/* VIEW DETAILS */}
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/25 transition-all group/btn"
            >
              <span>VIEW DETAILS</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>

            {/* SOURCE CODE */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all"
              >
                <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                <span>SOURCE CODE</span>
              </a>
            )}

            {/* LIVE DEMO */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo (opens in a new tab)`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-sky-400 shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        </div>

        {/* IMAGE COLUMN: scale 1.15 -> 1, opacity 0 -> 1, translateY 60px -> 0 + parallax */}
        <motion.div
          style={{ y: imageYParallax }}
          className={`lg:col-span-6 ${
            isImageRight ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
          }`}
        >
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 1.15, y: 60 }
            }
            whileInView={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: CINEMATIC_EASE }}
            onClick={() => onSelect(project)}
            className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-white/10 hover:border-blue-500/50 shadow-2xl cursor-pointer"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60" />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-blue-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-medium tracking-wide flex items-center gap-2 shadow-lg group-hover:scale-105 transition-transform">
                  <Eye className="w-3.5 h-3.5" />
                  <span>VIEW DETAILS</span>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const shouldReduceMotion = useReducedMotion();

  const filterOptions = ['ALL', 'WEB', 'FULL STACK', 'SIMULATION', 'VISUALIZATION', 'EXPERIMENTS'];

  // Filter projects based on categories
  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'ALL') return true;
    return p.categories && p.categories.includes(activeFilter);
  });

  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Featured Portfolio Work"
          title="THINGS I'VE BUILT"
          subtitle="Projects, experiments and ideas I've turned into working experiences."
        />

        {/* ======================================================== */}
        {/* FEATURED PROJECTS: Alternating Editorial Showcase         */}
        {/* ======================================================== */}
        <div className="space-y-16 sm:space-y-24 mb-24">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <h3 className="text-sm sm:text-base font-mono font-bold tracking-widest uppercase text-white">
                FEATURED PROJECTS
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">
              4 Case Studies
            </span>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {featuredProjects.map((project, index) => (
              <CinematicProjectItem
                key={project.id}
                project={project}
                index={index}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* PROJECT FILTER NAVIGATION & MORE PROJECTS                */}
        {/* ======================================================== */}
        <div className="pt-16 border-t border-white/10 space-y-12">
          <div className="text-center space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              EXPLORE MORE PROJECTS & EXPERIMENTS
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Filter through web applications, simulations, and computational tools.
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt;
              return (
                <button
                  key={opt}
                  onClick={() => setActiveFilter(opt)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.35)]'
                      : 'text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10'
                  }`}
                >
                  {opt}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-full bg-blue-600 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Grid of Projects (Shows Other Projects when ALL, or Filtered Results) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {(activeFilter === 'ALL' ? otherProjects : filteredProjects).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isFeatured={project.featured}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* GITHUB REPOSITORY SECTION: MORE FROM GITHUB              */}
        {/* ======================================================== */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="mt-24 sm:mt-32 pt-16 border-t border-white/10"
        >
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Open Source Activity</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight">
              MORE FROM GITHUB
            </h3>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              Explore more of my experiments, learning projects and code.
            </p>
          </div>

          {/* GitHub Repos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {githubReposData.map((repo, i) => (
              <motion.div
                key={repo.name}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: PREMIUM_EASE }}
                className="group relative rounded-2xl bg-[#0b0f19] border border-white/10 hover:border-blue-500/40 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-white/[0.04] text-slate-300 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: repo.languageColor || '#38bdf8' }}
                      />
                      {repo.language}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold font-display text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                      {repo.name}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed mt-1.5 line-clamp-2">
                      {repo.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${repo.name} repository on GitHub (opens in a new tab)`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-link-hover:translate-x-0.5 group-link-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Profile Callout */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://github.com/kunaldesale47-maker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Kunal Desale GitHub profile (opens in a new tab)"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 hover:border-blue-500/30 text-xs sm:text-sm font-mono tracking-wide transition-all group"
            >
              <Github className="w-4 h-4 text-blue-400" />
              <span>github.com/kunaldesale47-maker</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Case Study Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
