import React from 'react';
import { ArrowUp, Heart, Shield } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-16 px-6 sm:px-10 bg-[#020408] border-t border-white/[0.06] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-8 md:flex-row">
        {/* Brand & Stars */}
        <ScrollReveal direction="left" distance={20} className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bebas text-2xl tracking-widest text-white">
              MESSI
            </span>
            <span className="font-bebas text-2xl tracking-widest text-[#75AADB]">
              10
            </span>
            <div className="flex items-center gap-1 text-[#E5C158] text-xs ml-2">
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>

          <p className="text-xs font-editorial tracking-[0.2em] uppercase text-white/40 text-center md:text-left">
            LIONEL ANDRÉS MESSI · THE ART OF FOOTBALL
          </p>
        </ScrollReveal>

        {/* Center Tribute */}
        <ScrollReveal direction="up" distance={20} className="text-center text-xs font-editorial tracking-[0.2em] uppercase text-white/35">
          <span>Rosario · Barcelona · Paris · Miami · Argentina</span>
        </ScrollReveal>

        {/* Back to Top */}
        <ScrollReveal direction="right" distance={20}>
          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-[#75AADB]/60 bg-white/[0.03] hover:bg-white/[0.08] text-xs font-editorial tracking-[0.2em] uppercase text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#75AADB] transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </ScrollReveal>
      </div>

      {/* Subtle bottom note */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/[0.04] text-center text-[10px] font-editorial tracking-[0.25em] uppercase text-white/20">
        Curated tribute honoring the career of Lionel Andrés Messi · Campeón del Mundo 2022
      </div>
    </footer>
  );
}
