import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { stadiumAudio } from './AudioAmbience';

interface NavbarProps {
  onOpenSection: (section: 'journey' | 'stats' | 'trophies' | 'argentina' | 'legacy') => void;
  activeLighting: 'night' | 'glory' | 'classic';
  onChangeLighting: (mode: 'night' | 'glory' | 'classic') => void;
}

export function Navbar({ onOpenSection, activeLighting, onChangeLighting }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const state = stadiumAudio.toggle();
    setAudioActive(state);
  };

  const cycleLighting = () => {
    const modes: ('night' | 'glory' | 'classic')[] = ['night', 'glory', 'classic'];
    const nextIndex = (modes.indexOf(activeLighting) + 1) % modes.length;
    onChangeLighting(modes[nextIndex]);
  };

  const scrollToSection = (sectionId: 'journey' | 'stats' | 'trophies' | 'argentina' | 'legacy') => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      onOpenSection(sectionId);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#03060c]/80 backdrop-blur-md border-b border-white/[0.06] py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative flex items-center">
            <span className="font-bebas text-2xl sm:text-3xl tracking-widest text-white transition-colors duration-300 group-hover:text-[#75AADB]">
              MESSI
            </span>
            <span className="font-bebas text-2xl sm:text-3xl tracking-widest text-[#75AADB] ml-1">
              10
            </span>
          </div>

          {/* 3 Golden Stars */}
          <div className="flex items-center gap-0.5 text-[#E5C158] text-[9px] tracking-widest opacity-90 pl-1 border-l border-white/15">
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 text-[11px] font-editorial uppercase tracking-[0.25em] text-white/70">
          <button
            id="nav-home-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
          >
            Home
          </button>
          <span className="text-white/20 select-none">·</span>

          <button
            id="nav-journey-btn"
            onClick={() => scrollToSection('journey')}
            className="px-3 py-1.5 rounded-full hover:text-[#A3D2F7] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
          >
            Journey
          </button>
          <span className="text-white/20 select-none">·</span>

          <button
            id="nav-stats-btn"
            onClick={() => scrollToSection('stats')}
            className="px-3 py-1.5 rounded-full hover:text-[#A3D2F7] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
          >
            Stats
          </button>
          <span className="text-white/20 select-none">·</span>

          <button
            id="nav-trophies-btn"
            onClick={() => scrollToSection('trophies')}
            className="px-3 py-1.5 rounded-full hover:text-[#A3D2F7] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
          >
            Trophies
          </button>
          <span className="text-white/20 select-none">·</span>

          <button
            id="nav-argentina-btn"
            onClick={() => scrollToSection('argentina')}
            className="px-3 py-1.5 rounded-full hover:text-[#A3D2F7] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
          >
            Argentina
          </button>
          <span className="text-white/20 select-none">·</span>

          <button
            id="nav-legacy-btn"
            onClick={() => scrollToSection('legacy')}
            className="px-3 py-1.5 rounded-full hover:text-[#A3D2F7] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
          >
            Legacy
          </button>
        </nav>

        {/* Right utility actions */}
        <div className="flex items-center gap-3">
          {/* Lighting Mode toggle */}
          <button
            id="lighting-mode-toggle"
            onClick={cycleLighting}
            title={`Current lighting: ${activeLighting.toUpperCase()}. Click to cycle atmospheric grade.`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase font-editorial tracking-[0.2em] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white/80 transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-[#75AADB]" />
            <span className="hidden sm:inline">{activeLighting}</span>
          </button>

          {/* Sound toggle */}
          <button
            id="audio-ambience-toggle"
            onClick={toggleSound}
            title={audioActive ? 'Mute stadium sound' : 'Enable cinematic ambient sound'}
            className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
              audioActive
                ? 'border-[#75AADB]/60 bg-[#75AADB]/15 text-[#75AADB] shadow-[0_0_15px_rgba(117,170,219,0.3)]'
                : 'border-white/10 bg-white/[0.04] text-white/60 hover:text-white hover:border-white/20'
            }`}
          >
            {audioActive ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
