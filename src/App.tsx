import React, { useEffect } from 'react';
import { Feather } from './components/Feather';
import { FeatherBackground } from './components/FeatherBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Gamification } from './components/Gamification';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

function App() {
  // Reveal elements on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0', 'blur-0');
          entry.target.classList.remove('opacity-0', 'translate-y-16', 'blur-md');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-16', 'blur-md', 'transition-all', 'duration-1000', 'ease-[cubic-bezier(0.32,0.72,0,1)]');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-white/20 selection:text-white">
      {/* Ambient Background Blur/Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-30%] ltr:left-[-20%] rtl:right-[-20%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full bg-champagne/15 blur-[200px] mix-blend-screen opacity-70" style={{ animation: 'float-ambient 20s ease-in-out infinite' }}></div>
        <div className="absolute bottom-[-30%] ltr:right-[-20%] rtl:left-[-20%] w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] rounded-full bg-pale-blue/15 blur-[250px] mix-blend-screen opacity-60" style={{ animation: 'float-ambient-reverse 25s ease-in-out infinite alternate' }}></div>
      </div>

      <div className="film-grain"></div>
      
      <FeatherBackground />

      <Feather />

      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        
        <div className="reveal-on-scroll">
          <BentoGrid />
        </div>
        
        <div className="reveal-on-scroll">
          <Gamification />
        </div>
        
        <div className="reveal-on-scroll">
          <Portfolio />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
