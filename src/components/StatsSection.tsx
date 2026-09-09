import React, { useState } from 'react';
import { Trophy, Award, Target, Flame, ChevronRight, Zap } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export function StatsSection({ onOpenDeepStats }: { onOpenDeepStats: () => void }) {
  const [activeStatTab, setActiveStatTab] = useState<'all' | 'club' | 'argentina'>('all');

  const mainPillars = [
    {
      label: 'SENIOR MATCHES',
      value: '1,069+',
      sub: 'Official Career Caps',
      badge: 'HISTORIC',
      accent: 'border-white/10',
    },
    {
      label: 'OFFICIAL GOALS',
      value: '840+',
      sub: '0.79 Goals / Game',
      badge: 'TOP 2 ALL-TIME',
      accent: 'border-[#75AADB]/30 text-[#D8ECF8]',
    },
    {
      label: 'GOAL ASSISTS',
      value: '375+',
      sub: 'Most in Recorded History',
      badge: 'WORLD RECORD',
      accent: 'border-[#75AADB]/30 text-[#A3D2F7]',
    },
    {
      label: 'CAREER TROPHIES',
      value: '44',
      sub: 'Most Decorated Player',
      badge: 'ALL-TIME #1',
      accent: 'border-[#E5C158]/30 text-[#E5C158]',
    },
  ];

  const extraordinaryRecords = [
    {
      title: '91 GOALS IN A CALENDAR YEAR',
      year: '2012',
      metric: '91 Goals',
      desc: 'Guinness World Record for most official goals scored in a single solar calendar year (69 games), shattering Gerd Müller’s 40-year-old record of 85.',
      tag: 'GUINNESS WORLD RECORD',
      gold: true,
    },
    {
      title: '8× BALLON D\'OR CITATIONS',
      year: '2009 — 2023',
      metric: '8 Trophies',
      desc: 'Winning across three different decades (2000s, 2010s, 2020s), an all-time record unlikely ever to be matched in world football.',
      tag: 'HISTORIC PEAK',
      gold: true,
    },
    {
      title: '6× EUROPEAN GOLDEN SHOE',
      year: '2010 — 2019',
      metric: '6 Boots',
      desc: 'Most continental top scorer awards in European history, including a record 50 league goals in a single 38-game La Liga season (2011-12).',
      tag: 'CONTINENTAL RECORD',
      gold: false,
    },
    {
      title: '50 LA LIGA GOALS IN A SEASON',
      year: '2011 — 2012',
      metric: '50 Goals',
      desc: 'An astonishing 50 league goals in 37 appearances with 16 assists for FC Barcelona, producing an average of 1.78 goal contributions per match.',
      tag: 'LEAGUE OF LEGENDS',
      gold: false,
    },
    {
      title: '2× WORLD CUP GOLDEN BALLS',
      year: '2014 & 2022',
      metric: 'Only Player',
      desc: 'The only player in FIFA World Cup history to win the tournament MVP award twice (Brazil 2014 and Qatar 2022 champion).',
      tag: 'WORLD CUP IMMORTAL',
      gold: true,
    },
    {
      title: 'SCORED IN EVERY WORLD CUP STAGE',
      year: 'QATAR 2022',
      metric: 'Group to Final',
      desc: 'First and only player in history to score in the Group Stage, Round of 16, Quarter-final, Semi-final, and the Final of a single World Cup.',
      tag: 'TOURNAMENT RECORD',
      gold: true,
    },
  ];

  return (
    <section id="stats" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 bg-[#03060c] overflow-hidden">
      {/* Subtle atmospheric stadium glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-[#75AADB]/[0.04] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={30} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#75AADB]/20 bg-[#75AADB]/[0.05] text-[#75AADB] text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.3em] mb-4">
            <Zap className="w-3 h-3 text-[#E5C158]" />
            <span>THE ARCHITECTURE OF GREATNESS</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase text-white">
            CAREER STATISTICAL LEGACY
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white/60 font-light tracking-wide leading-relaxed">
            Numbers that redefined what was considered humanly possible on a football pitch over two decades of supreme consistency.
          </p>
        </ScrollReveal>

        {/* 4 Main Numerical Pillars */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {mainPillars.map((pillar, idx) => (
            <StaggerItem key={idx}>
              <div
                className={`relative group p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border ${pillar.accent} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between min-h-[190px] shadow-lg shadow-black/40`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.25em] text-white/40">
                    {pillar.label}
                  </span>
                  <span className="text-[9px] font-editorial uppercase tracking-[0.15em] px-2 py-0.5 rounded-full bg-white/[0.05] text-white/60 border border-white/5">
                    {pillar.badge}
                  </span>
                </div>

                <div className="my-3">
                  <span className="font-bebas text-5xl sm:text-6xl tracking-wide text-white group-hover:text-[#75AADB] transition-colors duration-300">
                    {pillar.value}
                  </span>
                </div>

                <div className="text-xs text-white/50 font-editorial tracking-wider">
                  {pillar.sub}
                </div>

                {/* Subtle bottom edge line highlight */}
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#75AADB]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Extraordinary Records Grid */}
        <ScrollReveal direction="up" distance={35} delay={0.15}>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] font-editorial uppercase tracking-[0.3em] text-[#E5C158]">
                PEAK MILESTONES
              </span>
              <h3 className="font-bebas text-2xl sm:text-3xl tracking-wide text-white mt-0.5">
                UNPRECEDENTED HISTORIC BENCHMARKS
              </h3>
            </div>

            <button
              onClick={onOpenDeepStats}
              className="hidden sm:flex items-center gap-2 text-xs font-editorial uppercase tracking-[0.2em] text-[#75AADB] hover:text-white transition-colors cursor-pointer"
            >
              <span>View Full Analytics HUD</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {extraordinaryRecords.map((rec, i) => (
            <StaggerItem key={i}>
              <div className="relative group p-6 rounded-xl bg-white/[0.015] hover:bg-white/[0.035] border border-white/[0.07] hover:border-[#75AADB]/40 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[9px] font-editorial uppercase tracking-[0.2em] px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70">
                      {rec.year}
                    </span>
                    <span
                      className={`text-[9px] font-editorial uppercase tracking-[0.2em] font-medium ${
                        rec.gold ? 'text-[#E5C158]' : 'text-[#75AADB]'
                      }`}
                    >
                      {rec.tag}
                    </span>
                  </div>

                  <h4 className="font-bebas text-xl sm:text-2xl tracking-wide text-white group-hover:text-[#D8ECF8] transition-colors">
                    {rec.title}
                  </h4>

                  <p className="text-xs sm:text-[13px] text-white/60 font-light leading-relaxed mt-2.5">
                    {rec.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-editorial uppercase tracking-[0.2em] text-white/40">
                    BENCHMARK
                  </span>
                  <span className="text-xs font-editorial uppercase tracking-[0.15em] font-semibold text-white/90">
                    {rec.metric}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile View Full Analytics Button */}
        <ScrollReveal direction="up" delay={0.2} className="sm:hidden mt-8 text-center">
          <button
            onClick={onOpenDeepStats}
            className="w-full py-3 rounded-full text-xs font-editorial uppercase tracking-[0.2em] text-[#75AADB] bg-[#75AADB]/10 border border-[#75AADB]/30"
          >
            Open Full Statistical Analytics HUD →
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
