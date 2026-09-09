import React from 'react';
import { Trophy, Globe, Shield, Star, CheckCircle2, ChevronRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { InteractiveGlassCard } from './InteractiveGlassCard';
import { StadiumParticlesCanvas } from './StadiumParticlesCanvas';

export function ArgentinaSection({ onOpenArgentinaDetails }: { onOpenArgentinaDetails: () => void }) {
  const qatarMatches = [
    {
      stage: 'GROUP STAGE',
      rival: 'ARGENTINA 2 — 0 MEXICO',
      desc: 'With Argentina on the verge of elimination, Messi unleashes a razor-sharp 25-yard drive into the bottom corner, sparking the resurgence.',
      impact: 'The turning point of the tournament.',
    },
    {
      stage: 'ROUND OF 16',
      rival: 'ARGENTINA 2 — 1 AUSTRALIA',
      desc: 'In his 1,000th senior career match, Messi slides in the opening goal with pinpoint placement, dominating play throughout.',
      impact: '1,000th career game milestone.',
    },
    {
      stage: 'QUARTER-FINAL',
      rival: 'ARGENTINA 2 (4) — 2 (3) NETHERLANDS',
      desc: 'Delivers the most iconic blind no-look reverse pass in World Cup history to Nahuel Molina, scores his penalty, and converts in shootout.',
      impact: 'The "No-Look Pass" masterclass.',
    },
    {
      stage: 'SEMI-FINAL',
      rival: 'ARGENTINA 3 — 0 CROATIA',
      desc: 'Powers home an unstoppable spot-kick, then takes 20-year-old Josko Gvardiol for a historic 35-meter dance along the byline to assist Julián Álvarez.',
      impact: 'Solo assist of the tournament.',
    },
    {
      stage: 'THE FINAL',
      rival: 'ARGENTINA 3 (4) — 3 (2) FRANCE',
      desc: 'The greatest final in sport history: Messi scores twice (23\' penalty, 108\' extra-time rebound) and rolls in his shootout penalty with ice-cold serenity.',
      impact: 'The FIFA World Cup Champion.',
      highlight: true,
    },
  ];

  return (
    <section id="argentina" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 bg-[#03060d] overflow-hidden">
      {/* Light Ember Particles */}
      <StadiumParticlesCanvas />

      {/* Argentina Albiceleste subtle vertical glow stripes */}
      <div className="pointer-events-none absolute inset-0 flex justify-center opacity-[0.03]">
        <div className="w-[18vw] h-full bg-[#75AADB]" />
        <div className="w-[18vw] h-full bg-white" />
        <div className="w-[18vw] h-full bg-[#75AADB]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" distance={30} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 text-[#E5C158] text-sm sm:text-base drop-shadow-[0_0_8px_rgba(229,193,88,0.5)] mb-3">
            <span>★</span>
            <span className="-translate-y-0.5">★</span>
            <span>★</span>
          </div>

          <div className="text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.35em] text-[#75AADB] mb-2">
            ASOCIACIÓN DEL FÚTBOL ARGENTINO · 1978 · 1986 · 2022
          </div>

          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase text-white">
            THE LUSAIL DESTINY
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white/60 font-light tracking-wide leading-relaxed">
            December 18, 2022: Eighty-eight thousand souls at Lusail Stadium and forty-five million Argentines united as Lionel Messi fulfilled his destiny.
          </p>
        </ScrollReveal>

        {/* Feature Highlight Card */}
        <ScrollReveal direction="up" distance={35} delay={0.1} className="mb-14">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#061021] via-[#040915] to-[#02050b] border border-[#75AADB]/30 shadow-2xl shadow-[#75AADB]/10 overflow-hidden">
            {/* Soft inner glow */}
            <div className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 bg-[#E5C158]/10 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -top-24 w-96 h-96 bg-[#75AADB]/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-[#E5C158] text-xs font-editorial uppercase tracking-[0.25em] mb-2">
                  <Trophy className="w-4 h-4 text-[#E5C158]" />
                  <span>FIFA World Cup Golden Ball Winner · Qatar 2022</span>
                </div>

                <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white leading-tight">
                  "YA ESTÁ. YA ESTÁ." — IT IS FINISHED.
                </h3>

                <p className="mt-4 text-sm sm:text-base text-white/75 font-light leading-relaxed">
                  With 7 goals, 3 assists, and MVP awards in 5 out of 7 matches, Messi became the only player in history to score in every single round of a 32-team World Cup tournament, cementing his status as the greatest player in the history of the sport.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-editorial uppercase tracking-[0.18em] text-white/90">
                    <strong>7</strong> Matches Played
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-editorial uppercase tracking-[0.18em] text-white/90">
                    <strong>7</strong> Goals Scored
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-editorial uppercase tracking-[0.18em] text-white/90">
                    <strong>3</strong> Crucial Assists
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-xs font-editorial uppercase tracking-[0.18em] text-[#E5C158]">
                    <strong>5</strong> Man of the Match Awards
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                <div className="text-[11px] font-editorial uppercase tracking-[0.3em] text-[#75AADB] mb-1">
                  ARGENTINA SENIOR TALLY
                </div>
                <div className="font-bebas text-6xl text-white tracking-wide">
                  112
                </div>
                <div className="text-xs font-editorial tracking-[0.2em] text-white/50 uppercase">
                  Goals in 189 Caps
                </div>
                <div className="mt-3 text-[10px] font-editorial tracking-[0.2em] text-[#E5C158] uppercase">
                  All-Time South American Record
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 5 Qatar Matches Breakdown */}
        <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {qatarMatches.map((m, i) => (
            <StaggerItem key={i}>
              <InteractiveGlassCard
                className={`h-full flex flex-col justify-between border ${
                  m.highlight
                    ? 'border-[#E5C158]/40'
                    : 'border-white/[0.07] group-hover:border-[#75AADB]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-editorial uppercase tracking-[0.25em] text-[#75AADB]">
                      {m.stage}
                    </span>
                    {m.highlight && (
                      <span className="text-[9px] font-editorial uppercase tracking-[0.15em] px-2 py-0.5 rounded-full bg-[#E5C158]/15 border border-[#E5C158]/30 text-[#E5C158]">
                        CHAMPIONS
                      </span>
                    )}
                  </div>

                  <h4 className="font-bebas text-xl tracking-wide text-white mb-2">
                    {m.rival}
                  </h4>

                  <p className="text-xs sm:text-[13px] text-white/60 font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-editorial uppercase tracking-[0.15em] text-white/40">
                  Impact: <strong className="text-white/80 font-medium">{m.impact}</strong>
                </div>
              </InteractiveGlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
