import React, { useState } from 'react';
import { SmoothScrollProvider } from './providers/SmoothScrollProvider';
import ScrollProgress from './components/ScrollProgress';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import BackgroundParticles from './components/BackgroundParticles';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ThinFilmSignature from './sections/ThinFilmSignature';
import Certificates from './sections/Certificates';
import Gallery from './sections/Gallery';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import LearningJourney from './sections/LearningJourney';
import ResumeSection from './sections/ResumeSection';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const viewParam = urlParams ? urlParams.get('view') : null;

  const [introFinished, setIntroFinished] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search);
      return !!sessionStorage.getItem('kunal_intro_viewed') || p.get('skipIntro') === 'true' || !!p.get('view') || !!window.location.hash;
    }
    return false;
  });

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-blue-600/30 selection:text-blue-200">
        {/* Subtle Scroll Progress Indicator at very top */}
        <ScrollProgress />

        {/* Cinematic Intro Experience */}
        {!introFinished && (
          <IntroScreen onComplete={() => setIntroFinished(true)} />
        )}

        {/* Global Ambience and Interactions */}
        <BackgroundParticles />
        <CustomCursor />

        {/* Sticky Premium Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10 pt-16">
          {viewParam === 'about' ? (
            <div className="pt-10"><About /></div>
          ) : viewParam === 'skills' ? (
            <div className="pt-10"><Skills /></div>
          ) : viewParam === 'projects' ? (
            <div className="pt-10"><Projects /><ThinFilmSignature /></div>
          ) : viewParam === 'physics' ? (
            <div className="pt-10"><ThinFilmSignature /></div>
          ) : viewParam === 'certificates' ? (
            <div className="pt-10"><Certificates /></div>
          ) : viewParam === 'gallery' ? (
            <div className="pt-10"><Gallery /></div>
          ) : viewParam === 'education' ? (
            <div className="pt-10"><Education /><Achievements /></div>
          ) : viewParam === 'journey' ? (
            <div className="pt-10"><LearningJourney /></div>
          ) : viewParam === 'resume' ? (
            <div className="pt-10"><ResumeSection /></div>
          ) : viewParam === 'contact' ? (
            <div className="pt-10"><Contact /></div>
          ) : (
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <ThinFilmSignature />
              <Certificates />
              <Gallery />
              <Education />
              <Achievements />
              <LearningJourney />
              <ResumeSection />
              <Contact />
            </>
          )}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
