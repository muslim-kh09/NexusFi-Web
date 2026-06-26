import React, { useState, useEffect } from 'react';
import { GithubLogo, Translate, Feather as FeatherIcon } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, setLang, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 ${dir === 'rtl' ? 'right-0' : 'left-0'} w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className="mx-auto w-max max-w-full px-4">
          <div className="flex items-center justify-between gap-8 md:gap-12 rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur-2xl px-6 py-3 shadow-2xl">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 font-sans font-bold text-lg tracking-wide text-white cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap group">
              <div className="relative flex items-center justify-center rtl:-scale-x-100 transition-transform group-hover:rotate-12 text-champagne">
                <FeatherIcon size={32} weight="thin" className="absolute opacity-40 blur-md pointer-events-none" />
                <FeatherIcon size={24} weight="thin" className="relative z-10" />
              </div>
              <span>NEXUS<span className="text-white/50">FI</span></span>
            </a>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
              <a href="#engine" className="hover:text-white transition-colors">{t.nav.engine}</a>
              <a href="#gamification" className="hover:text-white transition-colors">{t.nav.loyalty}</a>
              <a href="#portfolio" className="hover:text-white transition-colors">{t.nav.architect}</a>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="text-white/70 hover:text-white transition-colors flex items-center justify-center w-8 h-8 rounded-full bg-white/5 ring-1 ring-white/10"
                title="Toggle Language"
              >
                <Translate size={16} />
              </button>

              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 rounded-full bg-white/10 flex flex-col justify-center items-center gap-1.5 overflow-hidden transition-transform active:scale-95 shrink-0"
              >
                <span className={`w-4 h-[1px] bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'translate-y-[3.5px] rotate-45' : ''}`}></span>
                <span className={`w-4 h-[1px] bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Modal */}
      <div 
        className={`fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col items-center justify-center ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center gap-8">
          {[
            { id: 'engine', label: t.nav.engine },
            { id: 'gamification', label: t.nav.loyalty },
            { id: 'portfolio', label: t.nav.architect }
          ].map((item, i) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`text-6xl font-serif font-light text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-white/70 ${isOpen ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-12 opacity-0 blur-md'}`}
              style={{ transitionDelay: `${isOpen ? 100 + i * 100 : 0}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://github.com/muslim-kh09/NexusFi"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-12 flex items-center gap-3 text-white/50 hover:text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-12 opacity-0 blur-md'}`}
            style={{ transitionDelay: `${isOpen ? 400 : 0}ms` }}
          >
            <GithubLogo size={24} />
            <span>{t.nav.appSource}</span>
          </a>
        </div>
      </div>
    </>
  );
};
