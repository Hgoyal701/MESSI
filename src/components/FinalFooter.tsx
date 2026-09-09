import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useMotionValue, useMotionTemplate } from 'motion/react';
import { ArrowUp, Heart, Trophy, Globe, Sparkles, Star } from 'lucide-react';
import { StadiumParticlesCanvas } from './StadiumParticlesCanvas';

interface FinalFooterProps {
  onNavigateSection?: (section: 'home' | 'journey' | 'barcelona' | 'argentina' | 'worldcup' | 'trophies' | 'legacy') => void;
}

export function FinalFooter({ onNavigateSection }: FinalFooterProps) {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Staggered motion variants for Act I (The Last Whistle)
  const act1ContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const act1ItemVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 28,
      filter: prefersReducedMotion ? 'none' : 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'none',
      transition: {
        duration: prefersReducedMotion ? 0.3 : 1.15,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Nested stagger for the poetic handwritten lines
  const poetryContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.18,
        delayChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const poetryLineVariants = {
    hidden: {
      opacity: 0,
      x: prefersReducedMotion ? 0 : -14,
      filter: prefersReducedMotion ? 'none' : 'blur(4px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'none',
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Staggered variants for Act II: The Final Immortal Tribute ('1987 — ∞')
  const finalTributeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.28,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const finalTributeItemVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 32,
      scale: prefersReducedMotion ? 1 : 0.96,
      filter: prefersReducedMotion ? 'none' : 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'none',
      transition: {
        duration: prefersReducedMotion ? 0.4 : 1.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Scroll progress through this massive cinematic footer
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  // Background color transition from deep navy to sky blue
  const footerBackground = useTransform(
    scrollYProgress,
    [0.7, 1],
    ['#020409', '#0A2542'] // Deep midnight navy to Argentina sky-blue tint
  );

  const footerStyle = useMotionTemplate`radial-gradient(circle 400px at ${mouseX}px ${mouseY}px, rgba(117,170,219,0.15), transparent), ${footerBackground}`;

  // Parallax & zoom-out animation
  // As user reaches the bottom, Messi image slowly zooms out and fades deeper into the stadium darkness
  const messiScale = useTransform(scrollYProgress, [0, 0.85, 1], [1.08, 1.0, 0.96]);
  const messiOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.3, 0.9, 0.65, 0.35]);
  const messiY = useTransform(scrollYProgress, [0, 1], [60, -100]);

  // Background huge "10" parallax and opacity
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.02, 0.08, 0.06, 0.02]);
  const ghostY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  // Atmosphere glow shift
  const stadiumLightIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.8, 0.2]);

  const handleNavClick = (section: 'home' | 'journey' | 'barcelona' | 'argentina' | 'worldcup' | 'trophies' | 'legacy') => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (section === 'worldcup') {
      const el = document.getElementById('argentina');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (section === 'barcelona') {
      const el = document.getElementById('journey');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const targetEl = document.getElementById(section);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (onNavigateSection) {
      onNavigateSection(section);
    }
  };

  // Swipe detection for "coffee table book" feel
  const touchStartY = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;
    // Swipe up threshold
    if (deltaY > 50) {
      handleNavClick('legacy');
    }
    touchStartY.current = null;
  };

  return (
    <motion.footer
      ref={containerRef}
      id="final-whistle-footer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseMove={(e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); }}
      style={{ background: footerStyle }}
      className="relative w-full min-h-[160vh] lg:min-h-[190vh] flex flex-col justify-between text-white overflow-hidden select-none"
    >
      {/* =========================================================================
          ATMOSPHERIC LAYERS: Film Grain, Fog, Stadium Beams, Floating Embers
         ========================================================================= */}

      {/* 1. Deep Midnight Navy fading gradually into Argentina Sky-Blue and Pitch Black */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#03060c] via-[#040e24] via-[45%] via-[#030a1c] to-[#010206]" />

      {/* 2. Argentina Sky-Blue Stadium Floodlight Dome Glow */}
      <motion.div
        style={{ opacity: prefersReducedMotion ? 0.6 : stadiumLightIntensity }}
        className="pointer-events-none absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1200px] h-[55vh] bg-gradient-to-b from-[#75AADB]/[0.18] via-[#5CB6E8]/[0.08] to-transparent rounded-full blur-[140px]"
      />

      {/* 3. Golden Champagne World Cup Halo Light */}
      <div className="pointer-events-none absolute top-[40%] left-1/2 -translate-x-1/2 w-[70vw] max-w-[900px] h-[40vh] bg-radial from-[#E5C158]/[0.06] to-transparent rounded-full blur-[120px]" />

      {/* 4. Film Grain Texture Overlay */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.035] mix-blend-overlay z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="final-footer-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#final-footer-grain)" />
      </svg>

      {/* 5. Floating Stadium Embers & Confetti Dust */}
      <StadiumParticlesCanvas />

      {/* =========================================================================
          BACKGROUND GIANT "10" AND TYPOGRAPHY "MESSI"
         ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center z-5 overflow-hidden">
        {/* Giant Translucent Number 10 */}
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 0.05 : ghostOpacity,
            y: prefersReducedMotion ? 0 : ghostY,
          }}
          className="font-bebas text-[55vw] leading-none tracking-tighter text-white font-extrabold select-none pointer-events-none opacity-5"
        >
          10
        </motion.div>
      </div>

      {/* =========================================================================
          ACT I: THE LAST WHISTLE — EMOTIONAL OPENING SCENE
         ========================================================================= */}
      <motion.div
        variants={act1ContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-20 w-full pt-28 sm:pt-36 md:pt-44 px-6 sm:px-10 max-w-5xl mx-auto text-center"
      >
        {/* 3 Golden Stars Ceremony */}
        <motion.div
          variants={act1ItemVariants}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="text-[#E5C158] text-sm drop-shadow-[0_0_8px_rgba(229,193,88,0.6)]">★</span>
          <span className="text-[#E5C158] text-base -translate-y-1 drop-shadow-[0_0_10px_rgba(229,193,88,0.8)]">★</span>
          <span className="text-[#E5C158] text-sm drop-shadow-[0_0_8px_rgba(229,193,88,0.6)]">★</span>
        </motion.div>

        {/* Huge Backdrop Typography "MESSI" in Argentina Sky-Blue Gradient */}
        <motion.div
          variants={act1ItemVariants}
          className="mb-4"
        >
          <span className="font-bebas text-[18vw] sm:text-[16vw] md:text-[14vw] leading-[0.8] tracking-[0.06em] uppercase bg-gradient-to-b from-[#75AADB] via-[#D8ECF8] via-50% to-white/20 bg-clip-text text-transparent drop-shadow-[0_0_45px_rgba(117,170,219,0.35)] inline-block">
            MESSI
          </span>
        </motion.div>

        {/* Main Emotional Message Part 1: "THE GAME WILL GO ON." */}
        <motion.div
          variants={act1ItemVariants}
          className="mt-6"
        >
          <h2 className="font-editorial text-xs sm:text-sm md:text-base tracking-[0.45em] uppercase text-[#75AADB] font-light">
            THE GAME WILL GO ON.
          </h2>
        </motion.div>

        {/* Main Emotional Message Part 2: "BUT A LEGEND LIKE YOU WILL NEVER BE REPLACED." */}
        <motion.div
          variants={act1ItemVariants}
          className="mt-4 sm:mt-6"
        >
          <h3 className="font-bebas text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white leading-[1.05] drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            BUT A LEGEND LIKE YOU<br />
            <span className="bg-gradient-to-r from-white via-[#D8ECF8] to-[#75AADB] bg-clip-text text-transparent">
              WILL NEVER BE REPLACED.
            </span>
          </h3>
        </motion.div>

        {/* Smaller Emotional Paragraph */}
        <motion.div
          variants={act1ItemVariants}
          className="mt-6 max-w-xl mx-auto"
        >
          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed tracking-wide">
            From Rosario to the greatest stage in the world,<br className="hidden sm:inline" />
            you gave us moments we’ll carry forever.
          </p>
        </motion.div>

        {/* Final Tribute Lines (Handwritten / Editorial Style) with nested stagger */}
        <motion.div
          variants={act1ItemVariants}
          className="mt-10 sm:mt-12 pt-8 border-t border-white/[0.08] max-w-md mx-auto"
        >
          <motion.div
            variants={poetryContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="font-serif italic text-base sm:text-lg md:text-xl text-[#D8ECF8]/90 tracking-wide leading-relaxed space-y-1.5"
          >
            <motion.p variants={poetryLineVariants}>Always a GOAT.</motion.p>
            <motion.p variants={poetryLineVariants}>Always our #10.</motion.p>
            <motion.p variants={poetryLineVariants} className="text-white">Forever in our hearts.</motion.p>
          </motion.div>

          <motion.div
            variants={act1ItemVariants}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm sm:text-base font-editorial tracking-wider text-white shadow-[0_0_20px_rgba(255,255,255,0.04)]"
          >
            <span>Gracias, Leo.</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span className="text-sm">🇦🇷</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* =========================================================================
          ACT II: THE FINAL IMAGE MOMENT — WALKING INTO ETERNITY
         ========================================================================= */}
      <div className="relative z-15 w-full flex flex-col items-center justify-center my-12 sm:my-16 lg:my-20">
        <div className="relative w-full max-w-4xl px-4 flex flex-col items-center">
          {/* Subtle halo light behind the silhouette */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#75AADB]/10 rounded-full blur-[100px]" />

          {/* Cinematic Silhouette / Faded Image of Lionel Messi */}
          <motion.div
            style={{
              scale: prefersReducedMotion ? 1 : messiScale,
              opacity: prefersReducedMotion ? 0.7 : messiOpacity,
              y: prefersReducedMotion ? 0 : messiY,
            }}
            className="relative flex items-center justify-center"
          >
            {/* Messi Cutout, atmospheric, slightly faded into dark stadium fog */}
            <img
              src="/messi2.png"
              alt="Lionel Messi walking into football immortality"
              referrerPolicy="no-referrer"
              className="relative z-10 w-auto h-[48vh] sm:h-[58vh] md:h-[66vh] max-h-[700px] object-contain object-bottom filter grayscale-[40%] contrast-[1.15] brightness-[0.88] drop-shadow-[0_20px_60px_rgba(0,0,0,0.95)] [mask-image:linear-gradient(to_bottom,black_40%,rgba(0,0,0,0.7)_70%,transparent_100%)]"
            />

            {/* Seamless gradient fade blending him into the pitch darkness */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020409] via-[#020409]/85 to-transparent z-20" />
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#040e24]/40 to-transparent z-20" />
          </motion.div>

          {/* Overlay Typography: LIONEL ANDRÉS MESSI · 1987 — ∞ with cinematic crescendo stagger */}
          <motion.div
            variants={finalTributeContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="relative z-25 -mt-16 sm:-mt-20 md:-mt-24 text-center px-4"
          >
            <motion.div
              variants={finalTributeItemVariants}
              className="text-[11px] sm:text-xs font-editorial uppercase tracking-[0.4em] text-[#75AADB] mb-2 drop-shadow-[0_0_16px_rgba(117,170,219,0.6)]"
            >
              LIONEL ANDRÉS MESSI
            </motion.div>

            <motion.div
              variants={finalTributeItemVariants}
              className="font-bebas text-5xl sm:text-7xl md:text-8xl tracking-[0.16em] text-white flex items-center justify-center gap-3 sm:gap-4 drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]"
            >
              <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                1987
              </span>
              <span className="text-[#E5C158] text-4xl sm:text-6xl md:text-7xl font-sans leading-none drop-shadow-[0_0_18px_rgba(229,193,88,0.7)]">
                —
              </span>
              <motion.span
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: [1, 1.05, 1],
                        filter: [
                          'drop-shadow(0 0 15px rgba(117,170,219,0.5))',
                          'drop-shadow(0 0 32px rgba(117,170,219,0.9))',
                          'drop-shadow(0 0 15px rgba(117,170,219,0.5))',
                        ],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-[#75AADB] font-sans text-6xl sm:text-8xl md:text-9xl leading-none inline-block"
              >
                ∞
              </motion.span>
            </motion.div>

            <motion.p
              variants={finalTributeItemVariants}
              className="mt-4 font-editorial text-xs sm:text-sm font-light tracking-[0.25em] uppercase text-white/50 max-w-sm mx-auto leading-relaxed"
            >
              Some players retire.<br />
              <strong className="text-white/90 font-medium tracking-[0.3em] block mt-1 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                Legends never do.
              </strong>
            </motion.p>

            {/* Golden Tribute Attribution */}
            <motion.div
              variants={finalTributeItemVariants}
              className="mt-7 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#E5C158]/40 bg-[#E5C158]/[0.08] backdrop-blur-md shadow-[0_0_25px_rgba(229,193,88,0.2)] hover:border-[#E5C158]/70 hover:bg-[#E5C158]/[0.12] transition-all duration-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E5C158] animate-pulse" />
              <span className="font-editorial text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#E5C158] drop-shadow-[0_0_12px_rgba(229,193,88,0.6)]">
                Created by Pratyush Raj
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#E5C158] animate-pulse" />
            </motion.div>

            {/* Faint SVG Signature */}
            <motion.div
              variants={finalTributeItemVariants}
              className="mt-6 flex justify-center opacity-30 mix-blend-overlay"
            >
              <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M10 60 C 30 10, 50 10, 70 40 C 90 70, 110 50, 130 30 C 150 10, 170 30, 190 60"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  whileHover={{ pathLength: [0, 1] }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================================
          ACT III: MUSEUM FOOTER NAVIGATION & FINAL UNDERSTATED COPYRIGHT
         ========================================================================= */}
      <div className="relative z-25 w-full pt-12 pb-10 px-6 sm:px-12 border-t border-white/[0.06] bg-[#010206]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Subtle Monogram / Brand */}
          <div className="flex items-center gap-3">
            <span className="font-bebas text-xl tracking-widest text-white/80">
              MESSI
            </span>
            <span className="font-bebas text-xl tracking-widest text-[#75AADB]">
              10
            </span>
            <span className="text-[#E5C158] text-xs">★★★</span>
          </div>

          {/* Refined Museum Navigation Links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.25em] text-white/50"
          >
            <button
              onClick={() => handleNavClick('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-white/15 select-none">·</span>

            <button
              onClick={() => handleNavClick('journey')}
              className="hover:text-[#75AADB] transition-colors cursor-pointer"
            >
              Journey
            </button>
            <span className="text-white/15 select-none">·</span>

            <button
              onClick={() => handleNavClick('barcelona')}
              className="hover:text-[#75AADB] transition-colors cursor-pointer"
            >
              Barcelona
            </button>
            <span className="text-white/15 select-none">·</span>

            <button
              onClick={() => handleNavClick('argentina')}
              className="hover:text-[#75AADB] transition-colors cursor-pointer"
            >
              Argentina
            </button>
            <span className="text-white/15 select-none">·</span>

            <button
              onClick={() => handleNavClick('worldcup')}
              className="hover:text-[#E5C158] transition-colors cursor-pointer"
            >
              World Cup
            </button>
            <span className="text-white/15 select-none">·</span>

            <button
              onClick={() => handleNavClick('trophies')}
              className="hover:text-[#75AADB] transition-colors cursor-pointer"
            >
              Trophies
            </button>
            <span className="text-white/15 select-none">·</span>

            <button
              onClick={() => handleNavClick('legacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Legacy
            </button>
          </nav>

          {/* Smooth Back-to-Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            id="final-back-to-top-btn"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[#75AADB]/50 bg-white/[0.02] hover:bg-white/[0.06] text-[10px] font-editorial tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-[#75AADB] transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Final Copyright Line */}
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/[0.03] text-center space-y-1.5">
          <p className="text-[10px] sm:text-xs font-editorial tracking-[0.25em] uppercase text-[#E5C158]/80 drop-shadow-[0_0_8px_rgba(229,193,88,0.3)]">
            Created by <span className="text-[#E5C158] font-medium">Pratyush Raj</span>
          </p>
          <p className="text-[9px] sm:text-[10px] font-editorial tracking-[0.25em] uppercase text-white/30">
            A fan-made memorial to Lionel Andrés Messi — 1987 — ∞
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
