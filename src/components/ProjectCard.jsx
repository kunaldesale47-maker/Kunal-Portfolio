import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Eye, Sparkles, Terminal } from 'lucide-react';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

export default function ProjectCard({ project, onSelect, index = 0, isFeatured = false }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 50 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.12, ease: PREMIUM_EASE }}
      className={`group relative rounded-3xl bg-[#0b0f19] border border-white/10 hover:border-blue-500/40 transition-all duration-500 flex flex-col overflow-hidden shadow-xl hover:shadow-[0_20px_45px_-12px_rgba(59,130,246,0.25)] hover:-translate-y-2 ${
        isFeatured ? 'ring-1 ring-blue-500/20' : ''
      }`}
    >
      {/* Subtle top card gradient highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Top Media Frame */}
      <div
        onClick={() => onSelect(project)}
        className={`relative ${
          isFeatured ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[16/10]'
        } w-full overflow-hidden bg-slate-950 cursor-pointer`}
      >
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Clean dark modern gradient placeholder when image is not present */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-[#0e1628] to-[#070b14] p-6 text-center transition-transform duration-700 ease-out group-hover:scale-105">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:border-blue-400/40 transition-colors">
              <Terminal className="w-7 h-7" />
            </div>
            <h4 className="text-white font-display font-bold text-lg">{project.title}</h4>
            <p className="text-slate-400 text-xs font-mono mt-1">{project.category} Exploration</p>
          </div>
        )}

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-85 pointer-events-none" />

        {/* Badges on Top */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-2 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#07090e]/90 backdrop-blur-md text-blue-400 border border-white/10 shadow-lg">
              {project.category}
            </span>
            {isFeatured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/30 backdrop-blur-md shadow-lg">
                <Sparkles className="w-3 h-3 text-purple-400" />
                Featured
              </span>
            )}
          </div>

          {project.liveUrl && (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-300 bg-emerald-500/15 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Demo
            </span>
          )}
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-blue-950/45 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="px-4 py-2 rounded-full bg-blue-600/90 text-white text-xs font-medium tracking-wide flex items-center gap-2 shadow-xl group-hover:scale-105 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            <span>VIEW DETAILS</span>
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <h3
              onClick={() => onSelect(project)}
              className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-blue-400 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {project.description || project.tagline}
          </p>
        </div>

        {/* Real Technology Tags */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium font-mono bg-white/[0.04] text-slate-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-mono text-slate-500">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="pt-4 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-2.5">
          {/* View Details Button */}
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/25 transition-all group/btn"
          >
            <span>VIEW DETAILS</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>

          {/* External Action Buttons */}
          <div className="flex items-center gap-2">
            {/* SOURCE CODE Button */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 transition-all"
              >
                <Github className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                <span>SOURCE CODE</span>
              </a>
            )}

            {/* LIVE DEMO Button (strictly only when deployed URL exists) */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo (opens in a new tab)`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-sky-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
