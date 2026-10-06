import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
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

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#07090e]/90 backdrop-blur-md"
        />

        {/* Modal Body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0b0f19] border border-white/10 shadow-2xl z-10 text-slate-100 flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0b0f19]/90 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span className="font-display font-bold text-white text-sm sm:text-base">
                Verified Credential
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close certificate preview"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Certificate Visual Preview */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white shadow-2xl flex items-center justify-center p-2">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full max-h-[520px] object-contain rounded-xl"
              />
            </div>

            {/* Credential Details */}
            <div className="space-y-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {certificate.category}
                  </span>
                  {certificate.regId && (
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-white/5 border border-white/10">
                      ID: {certificate.regId}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {certificate.title}
                </h3>
                <p className="text-blue-400 font-medium text-sm mt-0.5">
                  {certificate.issuer}
                </p>
              </div>

              {certificate.description && (
                <p className="text-slate-300 text-sm leading-relaxed">
                  {certificate.description}
                </p>
              )}

              {certificate.date && (
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span>Issue Date: {certificate.date}</span>
                </div>
              )}
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                {certificate.pdfUrl ? (
                  <>
                    <a
                      href={certificate.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open PDF in New Tab</span>
                    </a>

                    <a
                      href={certificate.pdfUrl}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 font-medium text-xs sm:text-sm transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                  </>
                ) : (
                  <a
                    href={certificate.image}
                    download={`${certificate.id}.jpg`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm shadow-md transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Image</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
