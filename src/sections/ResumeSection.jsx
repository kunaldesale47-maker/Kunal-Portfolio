import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download, ExternalLink, FileText, CheckCircle2, Sparkles, Eye, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import MagneticButton from '../components/animations/MagneticButton';
import { personalInfo } from '../data/portfolioData';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

export default function ResumeSection() {
  const shouldReduceMotion = false;

  return (
    <section id="resume" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Curriculum Vitae"
          title="MY RESUME"
          subtitle="Want to know more about my education, skills, and projects? You can view or download my verified PDF resume below."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Container */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0e1424] via-[#0b0f19] to-[#07090e] border border-white/15 p-8 sm:p-10 shadow-2xl overflow-hidden group">
            {/* Ambient Background Light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Text side */}
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Kunal Gulab Desale • A4 PDF Resume</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                  Academic & Technical Curriculum Vitae
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  Includes full details on my coursework at PES Modern College of Engineering, first-year 9.11 CGPA, 
                  Shree Ganesh Kala Kendra CEP project, KrishiSetu Smart India Hackathon participation, 
                  and programming competencies in C, C++, Python, and React.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Updated for 2026 Internships</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Authentic SPPU Academic Record</span>
                  </div>
                </div>

                {/* Buttons: Enter Separately with Magnetic Physics and Hover Details */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25, filter: 'blur(4px)' }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: 0.25, ease: PREMIUM_EASE }}
                  className="pt-4 flex flex-wrap items-center gap-3"
                >
                  <MagneticButton strength={0.25}>
                    <a
                      href={personalInfo.resumePdf}
                      download="Kunal_Gulab_Desale_Resume.pdf"
                      className="group/btn relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-[1.03]"
                    >
                      <Download className="w-4 h-4" />
                      <span>DOWNLOAD RESUME</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </MagneticButton>

                  <MagneticButton strength={0.25}>
                    <a
                      href={personalInfo.resumePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-200 hover:text-white border border-white/10 hover:border-blue-500/40 font-medium text-sm transition-all duration-300 hover:scale-[1.03]"
                    >
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span>VIEW RESUME (PDF)</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/btn:text-white transition-colors" />
                    </a>
                  </MagneticButton>
                </motion.div>
              </div>

              {/* Resume Preview Frame:
                  scale 0.92 -> 1, opacity 0 -> 1, blur -> sharp */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { scale: 0.92, opacity: 0, filter: 'blur(8px)' }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { scale: 1, opacity: 1, filter: 'blur(0px)' }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.15, ease: PREMIUM_EASE }}
                className="md:col-span-4 flex justify-center"
              >
                <div className="relative w-48 aspect-[3/4] rounded-2xl bg-[#07090e] border border-white/10 p-4 shadow-xl flex flex-col justify-between group-hover:border-blue-500/40 group-hover:scale-105 transition-all duration-500">
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-20 bg-white/20 rounded"></div>
                      <div className="h-1.5 w-full bg-white/10 rounded"></div>
                      <div className="h-1.5 w-4/5 bg-white/10 rounded"></div>
                      <div className="h-1.5 w-full bg-white/10 rounded"></div>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] font-mono text-center text-slate-400">
                    <span className="text-blue-300 font-semibold block">Kunal_Desale_CV.pdf</span>
                    <span>751 KB • Ready to download</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
