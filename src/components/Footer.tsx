import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-white/5 py-12 px-4 mt-20 relative z-20 bg-obsidian">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="font-sans font-bold text-lg tracking-wide text-white">NEXUS<span className="text-white/50">FI</span></span>
        </div>
        
        <p className="text-white/40 text-sm font-light text-center md:text-left">
          {t.footer.desc}
        </p>

        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="https://github.com/muslim-kh09/NexusFi" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">{t.footer.github}</a>
          <a href="#" className="text-white/50 hover:text-white transition-colors">{t.footer.docs}</a>
        </div>
      </div>
    </footer>
  );
};
