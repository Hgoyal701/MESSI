import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, BarChart3, Award, Trophy, Medal, Crown, Sparkles, ShieldCheck, ChevronDown } from 'lucide-react';
import { AtmosphereParticles } from './AtmosphereParticles';

interface HeroPosterProps {
  onExploreLegacy: () => void;
  onOpenStats: () => void;
  lightingMode: 'night' | 'glory' | 'classic';
  onSelectLegacyTab?: (tab: 'journey' | 'trophies' | 'argentina' | 'legacy') => void;
}

export function HeroPoster({ onExploreLegacy, onOpenStats, lightingMode, onSelectLegacyTab }: HeroPosterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse Parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for butter-smooth luxury feel
  const springConfig = { damping: 25, stiffness: 85, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms:
  // Messi moves slightly towards mouse
  const messiX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const messiY = useTransform(smoothY, [-1, 1], [-12, 12]);
  const messiScale = useTransform(smoothY, [-1, 1], [1.01, 0.99]);

  // Background MESSI typography moves in OPPOSITE direction
  const textX = useTransform(smoothX, [-1, 1], [22, -22]);
  const textY = useTransform(smoothY, [-1, 1], [14, -14]);

  // Ghost "10" moves with deeper parallax
  const ghostX = useTransform(smoothX, [-1, 1], [35, -35]);
  const ghostY = useTransform(smoothY, [-1, 1], [20, -20]);

  // Stadium spotlight beams shift subtly
  const beamLeftX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const beamRightX = useTransform(smoothX, [-1, 1], [15, -15]);

  // Background subtle achievement insignias parallax
  const insigniaLeftX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const insigniaLeftY = useTransform(smoothY, [-1, 1], [-14, 14]);
  const insigniaRightX = useTransform(smoothX, [-1, 1], [20, -20]);
  const insigniaRightY = useTransform(smoothY, [-1, 1], [14, -14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize coordinates between -1 and 1
    const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const normalizedY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Atmospheric lighting profiles
  const lightingAura = {
    night: 'from-[#75AADB]/20 via-[#4082c4]/08 to-transparent',
    glory: 'from-[#E5C158]/18 via-[#75AADB]/12 to-transparent',
    classic: 'from-[#A3D2F7]/25 via-white/05 to-transparent',
  }[lightingMode];

  return (
    <section
      ref={containerRef}
      id="hero-poster-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden select-none bg-[#03060c]"
    >
      {/* =========================================================================
          LAYER 0: BACKGROUND ATMOSPHERE & PITCH GEOMETRY (z-0)
         ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Deep stadium dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02050b] via-[#050b17] to-[#020409]" />

        {/* Very subtle Argentina-inspired vertical stripes */}
        <div className="absolute inset-0 flex justify-center pointer-events-none opacity-[0.035]">
          <div className="w-[14vw] h-full bg-[#75AADB]" />
          <div className="w-[14vw] h-full bg-white" />
          <div className="w-[14vw] h-full bg-[#75AADB]" />
          <div className="w-[14vw] h-full bg-white" />
          <div className="w-[14vw] h-full bg-[#75AADB]" />
        </div>

        {/* Stadium Floodlight Top Left Beam */}
        <motion.div
          style={{ x: beamLeftX }}
          className="absolute -top-32 -left-20 w-[55vw] h-[85vh] bg-gradient-to-br from-[#75AADB]/15 via-[#75AADB]/03 to-transparent rotate-[28deg] blur-3xl pointer-events-none"
        />

        {/* Stadium Floodlight Top Right Beam */}
        <motion.div
          style={{ x: beamRightX }}
          className="absolute -top-32 -right-20 w-[55vw] h-[85vh] bg-gradient-to-bl from-white/10 via-[#75AADB]/04 to-transparent -rotate-[28deg] blur-3xl pointer-events-none"
        />

        {/* Central diffuse sky-blue and white aura directly behind Messi */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-radial ${lightingAura} blur-[90px] transition-all duration-700`}
        />

        {/* Faint Football Pitch Geometry (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07] stroke-[#75AADB]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Halfway line */}
          <line x1="0" y1="450" x2="1440" y2="450" strokeWidth="1" strokeDasharray="6 6" />
          {/* Center Circle */}
          <circle cx="720" cy="450" r="140" strokeWidth="1.2" />
          {/* Center spot */}
          <circle cx="720" cy="450" r="4" fill="#75AADB" />
          {/* Penalty box arc top */}
          <path d="M 580 0 A 160 160 0 0 0 860 0" strokeWidth="1" />
          {/* Penalty box arc bottom */}
          <path d="M 580 900 A 160 160 0 0 1 860 900" strokeWidth="1" />
        </svg>

        {/* Minimal stadium floodlight sources at top edges */}
        <div className="absolute top-0 left-12 w-32 h-1 bg-[#75AADB]/30 blur-sm" />
        <div className="absolute top-0 right-12 w-32 h-1 bg-white/30 blur-sm" />

        {/* Floating atmospheric stadium particles */}
        <AtmosphereParticles intensity="subtle" />
      </div>

      {/* =========================================================================
          LAYER 1: GHOST "10" ELEMENT (z-5)
          Huge, very subtle, thin typography, low opacity, massive scale
         ========================================================================= */}
      <motion.div
        style={{ x: ghostX, y: ghostY }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-[42%] -translate-y-[48%] z-[5] select-none"
      >
        <span className="font-bebas text-[36vw] sm:text-[34vw] md:text-[32vw] font-thin leading-none tracking-tighter bg-gradient-to-b from-[#75AADB]/12 via-white/[0.06] to-transparent bg-clip-text text-transparent text-stroke-ghost">
          10
        </span>
      </motion.div>

      {/* =========================================================================
          LAYER 1.5: MINIMALIST BACKGROUND COMMEMORATIVE INSIGNIAS (z-8)
          Subtle floating gold and silver achievement watermarks on flanks
         ========================================================================= */}
      {/* Left Flank: Minimalist World Cup Gold Seal */}
      <motion.div
        style={{ x: insigniaLeftX, y: insigniaLeftY }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none hidden xl:flex absolute left-8 2xl:left-14 top-[46%] -translate-y-1/2 z-[8] flex-col items-center select-none"
      >
        <div className="relative flex flex-col items-center p-4 2xl:p-5 rounded-full border border-[#E5C158]/15 bg-gradient-to-b from-[#E5C158]/[0.03] to-transparent backdrop-blur-[2px]">
          {/* Delicate concentric dashed orbital halo */}
          <div className="absolute -inset-2 rounded-full border border-dashed border-[#E5C158]/10 animate-spin" style={{ animationDuration: '90s' }} />
          
          <Trophy className="w-7 h-7 2xl:w-8 2xl:h-8 text-[#E5C158]/40 stroke-[1.2] drop-shadow-[0_0_12px_rgba(229,193,88,0.25)]" />
          
          <div className="mt-2.5 text-center">
            <span className="block text-[9px] 2xl:text-[10px] font-editorial uppercase tracking-[0.35em] text-[#E5C158]/55 font-semibold">
              WORLD CUP
            </span>
            <span className="block text-[8px] font-editorial uppercase tracking-[0.25em] text-white/30 mt-0.5">
              LUSAIL 2022
            </span>
          </div>
        </div>
      </motion.div>

      {/* Right Flank: Minimalist Ballon d'Or 8x Gold Seal */}
      <motion.div
        style={{ x: insigniaRightX, y: insigniaRightY }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none hidden xl:flex absolute right-8 2xl:right-14 top-[46%] -translate-y-1/2 z-[8] flex-col items-center select-none"
      >
        <div className="relative flex flex-col items-center p-4 2xl:p-5 rounded-full border border-[#E5C158]/15 bg-gradient-to-b from-[#E5C158]/[0.03] to-transparent backdrop-blur-[2px]">
          {/* Delicate concentric dashed orbital halo */}
          <div className="absolute -inset-2 rounded-full border border-dashed border-[#E5C158]/10 animate-spin" style={{ animationDuration: '90s', animationDirection: 'reverse' }} />
          
          <Award className="w-7 h-7 2xl:w-8 2xl:h-8 text-[#E5C158]/40 stroke-[1.2] drop-shadow-[0_0_12px_rgba(229,193,88,0.25)]" />
          
          <div className="mt-2.5 text-center">
            <span className="block text-[9px] 2xl:text-[10px] font-editorial uppercase tracking-[0.35em] text-[#E5C158]/55 font-semibold">
              8× BALLON D'OR
            </span>
            <span className="block text-[8px] font-editorial uppercase tracking-[0.25em] text-white/30 mt-0.5">
              HISTORIC RECORD
            </span>
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          LAYER 2: HUGE BACKGROUND TYPOGRAPHY "MESSI" (z-10)
          Behind Messi, massive uppercase typography stretching across screen
         ========================================================================= */}
      <motion.div
        style={{ x: textX, y: textY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] z-10 w-full text-center select-none"
      >
        <div className="relative inline-block w-full">
          <h1
            id="hero-massive-messi-typography"
            className="font-bebas text-[20vw] sm:text-[22vw] md:text-[24vw] lg:text-[26vw] leading-[0.82] tracking-[0.04em] uppercase bg-gradient-to-b from-[#90C8F2] via-[#E2F0FA]/80 to-[#ffffff]/15 bg-clip-text text-transparent text-glow-skyblue text-stroke-argentina"
          >
            MESSI
          </h1>

          {/* Very subtle editorial campaign subtitle just above/behind shoulders */}
          <div className="flex items-center justify-center gap-6 mt-[-1vw] opacity-40">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#75AADB]" />
            <span className="text-[9px] sm:text-[11px] font-editorial uppercase tracking-[0.45em] text-[#D8ECF8]">
              Argentina · 10 · Captain · World Champion
            </span>
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#75AADB]" />
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          TOP ACCENT BAR / AFA EMBLEM DETAIL (Foreground top layer)
         ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-30 pt-24 sm:pt-28 flex flex-col items-center pointer-events-auto"
      >
        {/* 3 Golden Stars */}
        <div className="flex items-center gap-1.5 text-[#E5C158] drop-shadow-[0_0_8px_rgba(229,193,88,0.5)]">
          <span className="text-xs sm:text-sm">★</span>
          <span className="text-sm sm:text-base -translate-y-0.5">★</span>
          <span className="text-xs sm:text-sm">★</span>
        </div>

        {/* Edition Subtitle */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.35em] text-white/60">
            CAMPEÓN DEL MUNDO
          </span>
          <span className="text-white/25">·</span>
          <span className="text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.35em] text-[#75AADB]">
            QATAR 2022
          </span>
        </div>
      </motion.div>

      {/* =========================================================================
          LAYER 3: LIONEL MESSI (z-20)
          Placed EXACTLY in center as main focal point. Overlaps typography behind him.
         ========================================================================= */}
      <div className="relative z-20 w-full flex-1 flex items-end justify-center pointer-events-none mt-[-2vh] sm:mt-[-4vh]">
        <motion.div
          style={{ x: messiX, y: messiY, scale: messiScale }}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-end justify-center pointer-events-auto max-w-full"
        >
          {/* Subtle rim light glow around Messi */}
          <div className="absolute inset-0 -top-8 bg-gradient-to-t from-transparent via-[#75AADB]/12 to-transparent blur-2xl rounded-full scale-95 pointer-events-none" />

          {/* Lionel Messi Image Cutout */}
          <img
            id="hero-messi-image"
            src="/messi.png"
            alt="Lionel Messi in Argentina National Team Kit"
            referrerPolicy="no-referrer"
            className="relative z-20 object-contain w-auto h-[62vh] sm:h-[68vh] md:h-[74vh] lg:h-[78vh] xl:h-[82vh] max-h-[880px] drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] filter brightness-[1.03] contrast-[1.05] transition-all duration-300 [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
          />

          {/* Bottom subtle radial gradient blend to ensure zero harsh edges */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-t from-[#03060c] to-transparent z-25 pointer-events-none" />
        </motion.div>
      </div>

      {/* =========================================================================
          LAYER 4: FOREGROUND DETAILS & HERO TEXT & CTAs (z-30)
         ========================================================================= */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-8 sm:pb-12 pt-4 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 pointer-events-auto">
        {/* HERO TEXT: Bottom-Left / Side */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#75AADB] animate-pulse" />
            <span className="text-[11px] font-editorial uppercase tracking-[0.35em] text-[#75AADB]">
              CAPTAIN · DIECI
            </span>
          </div>

          <h2
            id="hero-name-label"
            className="font-editorial text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[0.3em] text-white/95"
          >
            LIONEL ANDRÉS MESSI
          </h2>

          <p
            id="hero-tagline-label"
            className="font-editorial text-xs sm:text-sm font-light uppercase tracking-[0.25em] text-white/60 mt-0.5"
          >
            THE ART OF FOOTBALL.
          </p>

          {/* Subtle micro editorial note */}
          <div className="hidden lg:flex items-center gap-4 mt-3 text-[10px] font-editorial uppercase tracking-[0.2em] text-white/35">
            <span>8× BALLON D'OR</span>
            <span>·</span>
            <span>44 TROPHIES</span>
            <span>·</span>
            <span>LUSAIL 2022</span>
          </div>
        </motion.div>

        {/* CTA BUTTONS & HONORS RIBBON: Bottom-Right / Center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto"
        >
          {/* Subtle Minimalist Honors Ribbon: Gold & Silver Major Achievements */}
          <div
            id="hero-honors-ribbon"
            className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 sm:gap-2"
          >
            {/* World Cup Trophy Badge (Minimalist Gold) */}
            <button
              id="honor-badge-worldcup"
              onClick={() => onSelectLegacyTab ? onSelectLegacyTab('argentina') : onExploreLegacy()}
              title="FIFA World Cup Champion · Lusail 2022 · Golden Ball Winner"
              className="group/badge relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.18em] bg-[#E5C158]/[0.08] hover:bg-[#E5C158]/[0.18] border border-[#E5C158]/35 hover:border-[#E5C158]/70 text-[#F5E5B5] backdrop-blur-md transition-all duration-300 shadow-sm shadow-black/50 hover:shadow-[0_0_16px_rgba(229,193,88,0.25)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E5C158] drop-shadow-[0_0_6px_rgba(229,193,88,0.5)] transition-transform duration-300 group-hover/badge:scale-110" />
              <span className="font-medium text-[#F7E7B8]">WORLD CUP '22</span>
              <span className="text-[9px] text-[#E5C158]/60 hidden sm:inline">★ GOLDEN BALL</span>
            </button>

            {/* 8× Ballon d'Or Badge (Minimalist Gold) */}
            <button
              id="honor-badge-ballondor"
              onClick={() => onSelectLegacyTab ? onSelectLegacyTab('trophies') : onExploreLegacy()}
              title="8× Ballon d'Or · All-Time World Record (2009–2023)"
              className="group/badge relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.18em] bg-[#E5C158]/[0.08] hover:bg-[#E5C158]/[0.18] border border-[#E5C158]/35 hover:border-[#E5C158]/70 text-[#F5E5B5] backdrop-blur-md transition-all duration-300 shadow-sm shadow-black/50 hover:shadow-[0_0_16px_rgba(229,193,88,0.25)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E5C158] drop-shadow-[0_0_6px_rgba(229,193,88,0.5)] transition-transform duration-300 group-hover/badge:scale-110" />
              <span className="font-medium text-[#F7E7B8]">8× BALLON D'OR</span>
              <span className="text-[9px] text-[#E5C158]/60 hidden sm:inline">RECORD</span>
            </button>

            {/* 6× European Golden Shoe Badge (Minimalist Silver) */}
            <button
              id="honor-badge-goldenshoe"
              onClick={() => onSelectLegacyTab ? onSelectLegacyTab('trophies') : onExploreLegacy()}
              title="6× European Golden Shoe · Continental Record"
              className="group/badge relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.18em] bg-white/[0.04] hover:bg-white/[0.10] border border-white/20 hover:border-white/45 text-slate-200 backdrop-blur-md transition-all duration-300 shadow-sm shadow-black/50 hover:shadow-[0_0_16px_rgba(255,255,255,0.2)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <Medal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] transition-transform duration-300 group-hover/badge:scale-110" />
              <span className="font-medium text-slate-200">6× GOLDEN SHOE</span>
            </button>

            {/* 44 Career Titles Badge (Minimalist Silver / Sky-Blue) */}
            <button
              id="honor-badge-careertitles"
              onClick={() => onSelectLegacyTab ? onSelectLegacyTab('trophies') : onExploreLegacy()}
              title="44 Career Trophies · Most Decorated Footballer in History"
              className="group/badge relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.18em] bg-[#75AADB]/[0.08] hover:bg-[#75AADB]/[0.18] border border-[#75AADB]/30 hover:border-[#75AADB]/60 text-[#D8ECF8] backdrop-blur-md transition-all duration-300 shadow-sm shadow-black/50 hover:shadow-[0_0_16px_rgba(117,170,219,0.25)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#90C8F2] drop-shadow-[0_0_6px_rgba(144,200,242,0.4)] transition-transform duration-300 group-hover/badge:scale-110" />
              <span className="font-medium text-[#D8ECF8]">44 TITLES</span>
            </button>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
            {/* Primary CTA: EXPLORE THE LEGACY → */}
            <button
              id="cta-explore-legacy"
              onClick={onExploreLegacy}
              className="group relative flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full text-xs font-editorial uppercase tracking-[0.22em] font-medium text-white bg-white/[0.07] hover:bg-white/[0.14] border border-white/20 hover:border-[#75AADB]/70 backdrop-blur-md shadow-xl shadow-black/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(117,170,219,0.25)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>EXPLORE THE LEGACY</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#75AADB] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA: CAREER STATS */}
            <button
              id="cta-career-stats"
              onClick={onOpenStats}
              className="group relative flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs font-editorial uppercase tracking-[0.22em] font-medium text-[#D8ECF8] bg-[#75AADB]/10 hover:bg-[#75AADB]/20 border border-[#75AADB]/30 hover:border-[#75AADB]/60 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-black/40"
            >
              <BarChart3 className="w-3.5 h-3.5 text-[#75AADB]" />
              <span>CAREER STATS</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        onClick={() => {
          const statsEl = document.getElementById('stats');
          if (statsEl) statsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
        className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-30 hidden lg:flex flex-col items-center gap-1 cursor-pointer group opacity-50 hover:opacity-90 transition-opacity"
      >
        <span className="text-[9px] font-editorial uppercase tracking-[0.35em] text-white/50 group-hover:text-[#75AADB] transition-colors">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-[#75AADB] animate-bounce" />
      </motion.div>

      {/* Subtle bottom edge gradient separator */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
    </section>
  );
}
