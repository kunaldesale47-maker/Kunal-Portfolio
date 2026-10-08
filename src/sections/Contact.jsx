import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { PREMIUM_EASE } from '../hooks/useScrollAnimations';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [sentNotice, setSentNotice] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Kunal,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nSent from your portfolio website.`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 relative bg-[#07090e] overflow-hidden">
      {/* Background ambient glow: slowly expands as user enters viewport */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0.2 } : { scale: 0.8, opacity: 0.15 }}
        whileInView={shouldReduceMotion ? { opacity: 0.3 } : { scale: 1.25, opacity: 0.35 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] bg-gradient-to-r from-blue-600/20 via-sky-500/15 to-purple-600/20 blur-[150px] rounded-full pointer-events-none -z-0"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* FINAL SCENE CINEMATIC HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: PREMIUM_EASE }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Final Scene • Get In Touch</span>
          </motion.div>

          {/* Line 1: "HAVE AN IDEA?" starts slightly below viewport, moves upward */}
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 50 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: PREMIUM_EASE }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white"
          >
            HAVE AN IDEA?
          </motion.h2>

          {/* Line 2: "LET'S BUILD IT." appears with slight scale animation */}
          <motion.h3
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.28, ease: PREMIUM_EASE }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent"
          >
            LET'S BUILD IT.
          </motion.h3>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4, ease: PREMIUM_EASE }}
            className="text-slate-400 text-sm sm:text-base font-light max-w-xl mx-auto pt-2"
          >
            I'm always eager to learn, collaborate with fellow engineering students, and explore exciting software projects.
          </motion.p>
        </div>

        {/* Contact Container: Contact buttons & clean form fade in */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.45, ease: PREMIUM_EASE }}
          className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b0f19] border border-white/10 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Let's Connect
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed font-light">
                  Whether you have questions about my projects, internship opportunities, or college initiatives, feel free to reach out.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                {/* Email with 1-click copy */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Email Address</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Institution & Location</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-200">
                      PES Modern College of Engineering • Pune, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels Bar */}
              <div className="pt-4 border-t border-white/[0.07] flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/5 text-xs font-mono transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/5 text-xs font-mono transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Box */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b0f19] border border-white/10 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
                  Fill out this quick form to initiate an email directly to my inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Kunal, I loved your projects and would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-sky-400 text-white font-medium text-xs sm:text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>

                  {sentNotice && (
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Client Mailer Opened!
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
