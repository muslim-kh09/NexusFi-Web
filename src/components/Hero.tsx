import React from 'react';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto reveal-on-scroll">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-champagne animate-pulse"></span>
          <span className="text-xs font-medium text-champagne/80 tracking-widest uppercase">{t.hero.badge}</span>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl rtl:text-7xl rtl:sm:text-8xl rtl:md:text-9xl rtl:lg:text-[10rem] font-serif font-light leading-[1.2] md:leading-[1.1] tracking-tight">
            {t.hero.title1} <br />
            <span className="italic text-champagne/90">{t.hero.title2}</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-white/50 font-sans font-light leading-relaxed">
            {t.hero.desc}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 z-20 mt-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button href="https://github.com/muslim-kh09/NexusFi">{t.nav.appSource}</Button>
            <Button variant="secondary" href="#engine">{t.hero.explore}</Button>
          </div>
          <span className="text-xs text-white/30 font-sans font-medium tracking-wide">
            {t.hero.disclaimer}
          </span>
        </div>
      </div>
    </section>
  );
};
