import React from 'react';
import { Network, ShieldCheck, Crosshair, Cloud, HardDrives, Gauge } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';

export const BentoGrid = () => {
  const { t } = useLanguage();

  return (
    <section id="engine" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal-on-scroll">
          <span className="text-champagne/60 font-sans tracking-widest text-sm uppercase mb-4 block">{t.engine.badge}</span>
          <h2 className="text-4xl md:text-6xl rtl:text-5xl rtl:md:text-7xl font-serif font-light leading-tight">
            {t.engine.title1} <br />
            <span className="text-white/40 italic">{t.engine.title2}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* PENTA-SHIELD */}
          <div className="md:col-span-2 rounded-[2rem] bg-white/5 ring-1 ring-white/10 p-8 flex flex-col relative overflow-hidden group reveal-on-scroll">
            <div className="z-10 relative max-w-lg">
              <h3 className="text-3xl rtl:text-4xl font-serif font-light mb-4 leading-snug">{t.engine.pentaTitle}</h3>
              <p className="text-white/50 font-sans leading-relaxed">
                {t.engine.pentaDesc}
              </p>
            </div>
            <div className="absolute bottom-0 end-0 p-4 md:p-8 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none translate-y-1/4 ltr:translate-x-1/4 rtl:-translate-x-1/4 md:translate-x-0 md:translate-y-0">
              <ShieldCheck size={180} weight="thin" />
            </div>
          </div>

          {/* Ghost Radar */}
          <div className="rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent ring-1 ring-white/10 p-8 flex flex-col relative overflow-hidden group reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <div className="z-10 relative">
              <h3 className="text-2xl rtl:text-3xl font-serif font-light mb-4 leading-snug">{t.engine.radarTitle}</h3>
              <p className="text-white/50 font-sans text-sm leading-relaxed">
                {t.engine.radarDesc}
              </p>
            </div>
            <div className="absolute bottom-0 end-0 opacity-10 group-hover:opacity-30 transition-opacity group-hover:rotate-12 duration-700 pointer-events-none translate-y-1/4 ltr:translate-x-1/4 rtl:-translate-x-1/4 md:translate-x-0 md:translate-y-0">
              <Crosshair size={180} weight="thin" />
            </div>
          </div>

          {/* Smart Storage */}
          <div className="rounded-[2rem] bg-gradient-to-tr from-white/5 to-transparent ring-1 ring-white/10 p-8 flex flex-col relative overflow-hidden group reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="z-10 relative">
              <h3 className="text-2xl rtl:text-3xl font-serif font-light mb-4 leading-snug">{t.engine.storageTitle}</h3>
              <p className="text-white/50 font-sans text-sm leading-relaxed">
                {t.engine.storageDesc}
              </p>
            </div>
            <div className="absolute bottom-0 end-0 opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none translate-y-1/4 ltr:translate-x-1/4 rtl:-translate-x-1/4 md:translate-x-0 md:translate-y-0">
              <HardDrives size={180} weight="thin" />
            </div>
          </div>

          {/* DNS Sovereignty */}
          <div className="md:col-span-2 rounded-[2rem] bg-white/5 ring-1 ring-white/10 p-8 flex flex-col relative overflow-hidden group reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
            <div className="z-10 relative max-w-lg">
              <h3 className="text-3xl rtl:text-4xl font-serif font-light mb-4 leading-snug">{t.engine.dnsTitle}</h3>
              <p className="text-white/50 font-sans leading-relaxed">
                {t.engine.dnsDesc}
              </p>
            </div>
            <div className="absolute bottom-0 end-0 p-4 md:p-8 opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-105 duration-700 pointer-events-none translate-y-1/4 ltr:translate-x-1/4 rtl:-translate-x-1/4 md:translate-x-0 md:translate-y-0">
              <Gauge size={180} weight="thin" />
            </div>
          </div>

          {/* Local Cloud */}
          <div className="md:col-span-3 rounded-[2rem] bg-white/[0.02] ring-1 ring-white/10 p-8 flex flex-col relative overflow-hidden group reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
            <div className="max-w-xl z-10 relative">
              <h3 className="text-3xl rtl:text-4xl font-serif font-light mb-4 leading-snug">{t.engine.cloudTitle}</h3>
              <p className="text-white/50 font-sans leading-relaxed">
                {t.engine.cloudDesc}
              </p>
            </div>
            <div className="absolute bottom-0 end-0 md:top-1/2 md:-translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none translate-y-1/4 md:translate-y-0 ltr:translate-x-1/4 rtl:-translate-x-1/4 md:translate-x-0 md:end-12">
              <div className="relative flex items-center justify-center scale-75 md:scale-100">
                <Cloud size={250} weight="thin" className="animate-pulse" />
                <Network size={120} weight="thin" className="absolute text-champagne" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
