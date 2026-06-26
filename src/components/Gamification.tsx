import React from 'react';
import { GameController, LockKey } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';

export const Gamification = () => {
  const { t } = useLanguage();

  return (
    <section id="gamification" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pale-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 reveal-on-scroll">
          <span className="text-champagne/60 font-sans tracking-widest text-sm uppercase mb-4 block">{t.loyalty.badge}</span>
          <h2 className="text-4xl md:text-6xl rtl:text-5xl rtl:md:text-7xl font-serif font-light mb-6 leading-tight">
            {t.loyalty.title}
          </h2>
          <p className="text-white/50 font-sans text-lg leading-relaxed max-w-lg mb-8">
            {t.loyalty.desc}
          </p>
          
          <div className="flex items-center gap-4 text-champagne/70 bg-white/5 w-max px-4 py-2 rounded-full ring-1 ring-white/10">
            <LockKey size={20} />
            <span className="text-sm font-medium tracking-wide">Pessimistic DB Locks</span>
          </div>
        </div>

        <div className="flex-1 w-full reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
          <div className="relative max-w-sm mx-auto">
            {/* Holographic Card Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-champagne/20 to-pale-blue/20 rounded-[2rem] blur-xl animate-pulse"></div>
            
            <div className="relative bg-obsidian/80 backdrop-blur-xl ring-1 ring-white/20 rounded-[2rem] p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              
              <GameController size={48} weight="thin" className="text-white mb-8" />
              
              <h3 className="text-2xl font-sans font-bold mb-2">{t.loyalty.cardTitle}</h3>
              <p className="text-white/50 text-sm mb-8">
                {t.loyalty.cardDesc}
              </p>

              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold tracking-widest text-champagne/80">
                  <span>{t.loyalty.cardProgress}</span>
                  <span>70%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-gradient-to-r from-pale-blue to-champagne rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
