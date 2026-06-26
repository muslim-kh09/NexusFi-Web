import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ title, description, url, repo, imageColor, t }: { title: string, description: string, url: string, repo: string, imageColor: string, t: any }) => (
  <div className="group relative p-1.5 rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur-xl transition-all duration-700 hover:bg-white/10 md:w-1/2">
    <div className="h-full rounded-[calc(2rem-0.375rem)] bg-obsidian overflow-hidden relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col">
      
      {/* Fake Image Area */}
      <div className={`w-full h-48 ${imageColor} relative overflow-hidden shrink-0`}>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-80"></div>
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-obsidian/50 backdrop-blur-md flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ring-1 ring-white/20">
          <ArrowUpRight size={16} weight="light" className="text-white" />
        </div>
      </div>

      <div className="p-8 flex flex-col gap-6 flex-1">
        <div>
          <h3 className="text-2xl font-serif text-white mb-3">{title}</h3>
          <p className="text-sm font-light text-white/50 leading-relaxed">{description}</p>
        </div>
        
        <div className="mt-auto pt-4 flex items-center gap-4 text-sm font-medium">
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-white/30 after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500">{t.portfolio.liveProject}</a>
          <span className="text-white/20">•</span>
          <a href={repo} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-white/30 after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500">{t.portfolio.sourceCode}</a>
        </div>
      </div>
    </div>
  </div>
);

export const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="w-full px-4 py-32 md:py-40 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col gap-4 items-center text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/50">
            {t.portfolio.badge}
          </span>
          <h2 className="text-4xl md:text-6xl rtl:text-5xl rtl:md:text-7xl font-serif font-light text-white leading-tight">
            {t.portfolio.title}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <ProjectCard 
            title="NetAnatomy" 
            description={t.portfolio.netAnatomyDesc}
            url="https://net-anatomy.vercel.app" 
            repo="https://github.com/muslim-kh09/NetAnatomy"
            imageColor="bg-gradient-to-br from-indigo-900/50 to-obsidian"
            t={t}
          />
          <ProjectCard 
            title="Decisify" 
            description={t.portfolio.decisifyDesc}
            url="https://decisify-web.vercel.app" 
            repo="https://github.com/muslim-kh09/Decisify"
            imageColor="bg-gradient-to-br from-emerald-900/40 to-obsidian"
            t={t}
          />
        </div>

      </div>
    </section>
  );
};
