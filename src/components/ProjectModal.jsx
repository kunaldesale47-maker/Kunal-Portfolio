import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  ArrowUpRight,
  GraduationCap
} from 'lucide-react';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#07090e]/85 backdrop-blur-md"
        />

        {/* Modal Window: Opening animation scale 0.96 -> 1, opacity 0 -> 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.4, ease: PREMIUM_EASE }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#0b0f19] border border-white/10 shadow-2xl z-10 text-slate-100 flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0b0f19]/90 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.category}
              </span>
              {project.status && (
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  {project.status}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              aria-label="Close case study modal"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Tagline */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-blue-400 text-sm font-medium mt-1">
                  {project.subtitle}
                </p>
              )}
              <p className="text-slate-300 mt-3 text-sm sm:text-base leading-relaxed">
                {project.overview || project.description}
              </p>
            </div>

            {/* Main Showcase Image */}
            {project.thumbnail && (
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 shadow-lg">
                <motion.img
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, ease: PREMIUM_EASE }}
                  src={project.thumbnail}
                  alt={`${project.title} detailed screenshot`}
                  className="w-full max-h-[420px] object-cover object-top"
                  loading="lazy"
                />
              </div>
            )}

            {/* Information container: fade + slide upward */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: PREMIUM_EASE }}
              className="space-y-8"
            >
              {/* Problem / Idea & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <h4>Problem / Idea</h4>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <h4>Built Solution</h4>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-slate-300"
                      >
                        <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Learning / Outcome */}
              {project.outcome && (
                <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/15 space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                    <GraduationCap className="w-4 h-4" />
                    <h4>Learning & Engineering Outcome</h4>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}

              {/* Secondary Image if available */}
              {project.secondaryImage && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Additional Project Screenshot
                  </h4>
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60">
                    <img
                      src={project.secondaryImage}
                      alt={`${project.title} additional preview`}
                      className="w-full max-h-[360px] object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {/* Technologies Used */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-sky-400 text-white font-medium text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 text-xs sm:text-sm transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>SOURCE CODE</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  Press ESC to close
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
