import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowUpRight,
  Code2,
  FolderGit2,
  Terminal,
  ChevronRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projectsData, githubReposData } from '../data/projectsData';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const shouldReduceMotion = useReducedMotion();

  const filterOptions = ['ALL', 'WEB', 'FULL STACK', 'SIMULATION', 'VISUALIZATION', 'EXPERIMENTS'];

  // Filter projects based on categories
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ALL') return projectsData;
    return projectsData.filter((p) => p.categories && p.categories.includes(activeFilter));
  }, [activeFilter]);

  // Featured vs More Projects for "ALL" view
  const featuredList = useMemo(() => {
    return filteredProjects.filter((p) => p.featured);
  }, [filteredProjects]);

  const moreList = useMemo(() => {
    return filteredProjects.filter((p) => !p.featured);
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Featured Portfolio Work"
          title="THINGS I'VE BUILT"
          subtitle="Projects, experiments and ideas I've turned into working experiences."
        />

        {/* Project Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
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

        {/* ======================================================== */}
        {/* VIEW: ALL FILTER (Separated Featured & More Projects)   */}
        {/* ======================================================== */}
        {activeFilter === 'ALL' ? (
          <div className="space-y-20">
            {/* FEATURED PROJECTS SUBSECTION */}
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  <h3 className="text-sm sm:text-base font-mono font-bold tracking-widest uppercase text-white">
                    FEATURED PROJECTS
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {featuredList.length} Selected Works
                </span>
              </div>

              {/* Featured Projects Grid: 2-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {featuredList.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isFeatured={true}
                    onSelect={setSelectedProject}
                  />
                ))}
              </div>
            </div>

            {/* MORE PROJECTS SUBSECTION */}
            {moreList.length > 0 && (
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    <h3 className="text-sm sm:text-base font-mono font-bold tracking-widest uppercase text-white">
                      MORE PROJECTS
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {moreList.length} Experiments & Tools
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {moreList.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      isFeatured={false}
                      onSelect={setSelectedProject}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* ======================================================== */
          /* VIEW: FILTERED CATEGORIES                                */
          /* ======================================================== */
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: PREMIUM_EASE }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isFeatured={project.featured}
                  onSelect={setSelectedProject}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

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
          {/* Section Heading Header */}
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
                  {/* Top Bar */}
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

                  {/* Title & Description */}
                  <div>
                    <h4 className="text-base font-bold font-display text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                      {repo.name}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed mt-1.5 line-clamp-2">
                      {repo.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
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

        {/* Project Case Study Modal */}
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
