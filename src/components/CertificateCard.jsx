import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Calendar, FileText, ArrowUpRight, Eye } from 'lucide-react';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

export default function CertificateCard({ certificate, onSelect, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: PREMIUM_EASE }}
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      className="group relative rounded-3xl bg-[#0b0f19] border border-white/10 hover:border-blue-500/40 p-5 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_12px_35px_-10px_rgba(59,130,246,0.22)]"
    >
      <div>
        {/* Certificate Image Frame */}
        <div
          onClick={() => onSelect(certificate)}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-white/5 cursor-pointer mb-5 group-hover:border-blue-500/30 transition-all"
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-blue-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg group-hover:scale-105 transition-transform">
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect Credential</span>
            </span>
          </div>

          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium bg-[#07090e]/90 text-blue-400 border border-white/10 backdrop-blur-md">
              {certificate.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-blue-400 text-xs font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>{certificate.issuer}</span>
          </div>

          <h3
            onClick={() => onSelect(certificate)}
            className="text-base font-bold font-display text-white group-hover:text-blue-300 transition-colors cursor-pointer line-clamp-2"
          >
            {certificate.title}
          </h3>

          {certificate.date && (
            <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1 pt-1">
              <Calendar className="w-3 h-3 text-slate-500" />
              <span>{certificate.date}</span>
            </p>
          )}
        </div>
      </div>

      {/* Card Action footer */}
      <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
        <button
          onClick={() => onSelect(certificate)}
          className="text-xs font-medium text-slate-300 group-hover:text-blue-400 flex items-center gap-1 transition-colors"
        >
          <span>View Certificate</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {certificate.pdfUrl && (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
            <FileText className="w-3 h-3" />
            PDF
          </span>
        )}
      </div>
    </motion.div>
  );
}
