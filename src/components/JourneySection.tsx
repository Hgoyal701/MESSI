import React from 'react';
import { History, Star, Trophy, Sparkles, MapPin } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export function JourneySection({ onOpenJourneyModal }: { onOpenJourneyModal: () => void }) {
  const milestones = [
    {
      year: '1987 — 2000',
      title: 'THE BOY FROM ROSARIO & THE NAPKIN',
      city: 'Rosario · Barcelona',
      desc: 'Diagnosed with growth hormone deficiency as a boy playing for Newell’s Old Boys. FC Barcelona technical secretary Charly Rexach signs the legendary 13-year-old prodigy on a paper restaurant napkin, committing the club to his medical treatment.',
      badge: 'THE ORIGINS',
      highlight: 'Paper Napkin Contract',
    },
    {
      year: '2004 — 2008',
      title: 'FIRST TEAM DEBUT & OLYMPIC GOLD',
      city: 'Camp Nou · Beijing',
      desc: 'At age 17, Messi debuts for FC Barcelona and scores his first senior goal with an iconic lob assisted by Ronaldinho. In 2008, he guides Argentina to Olympic Gold in Beijing alongside Ángel Di María and Sergio Agüero.',
      badge: 'ASCENSION',
      highlight: 'First Goal vs Albacete',
    },
    {
      year: '2008 — 2012',
      title: 'THE SEXTUPLE & PEAK PERFECTION',
      city: 'Rome · London · Barcelona',
      desc: 'Under Pep Guardiola, Messi assumes the "false nine" role, leading Barcelona to an unprecedented 6 trophies in 2009. In 2012, he scores an astronomical 91 official goals in 69 games, collecting four consecutive Ballon d’Or awards.',
      badge: 'PEAK REVOLUTION',
      highlight: '91 Goals in 2012',
    },
    {
      year: '2014 — 2015',
      title: 'THE SECOND TREBLE & THE MSN ERA',
      city: 'Berlin · Rio de Janeiro',
      desc: 'After captaining Argentina to the 2014 World Cup Final (Golden Ball winner), Messi forms the deadliest attacking trident in football history alongside Luis Suárez and Neymar Jr., conquering the 2015 Champions League and second historic treble.',
      badge: 'TREBLE DYNASTY',
      highlight: 'Champions League 2015',
    },
    {
      year: '2021',
      title: 'THE MARACANÃ REDEMPTION',
      city: 'Rio de Janeiro · Paris',
      desc: 'An emotional night in Brazil: Messi captains Argentina to victory in the 2021 Copa América, ending Argentina’s 28-year senior trophy drought and lifting the international trophy he dreamed of since childhood.',
      badge: 'NATIONAL TRIUMPH',
      highlight: 'Copa América 2021',
    },
    {
      year: '2022',
      title: 'THE IMMORTAL CORONATION AT LUSAIL',
      city: 'Lusail Stadium, Qatar',
      desc: 'The ultimate fairytale: 7 goals, 3 assists, scoring in every knockout round, and netting twice in the greatest World Cup Final ever played against France. Lionel Messi lifts the FIFA World Cup and wins his second Golden Ball, crowning the GOAT debate forever.',
      badge: 'WORLD CHAMPION',
      highlight: 'FIFA World Cup 2022',
      gold: true,
    },
  ];

  return (
    <section id="journey" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 bg-[#02050b] overflow-hidden">
      {/* Background soft lighting */}
      <div className="pointer-events-none absolute top-1/3 -left-32 w-96 h-96 bg-[#75AADB]/[0.05] rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 bg-[#E5C158]/[0.04] rounded-full blur-[140px]" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={30} className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#75AADB]/20 bg-[#75AADB]/[0.05] text-[#75AADB] text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.3em] mb-4">
            <History className="w-3 h-3" />
            <span>THE DEFINITIVE CHRONOLOGY</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase text-white">
            FROM ROSARIO TO LUSAIL
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white/60 font-light tracking-wide leading-relaxed">
            The extraordinary twenty-year odyssey of a quiet boy with a growth hormone deficiency who conquered world football.
          </p>
        </ScrollReveal>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#75AADB]/30 to-transparent" />

          <div className="space-y-12 sm:space-y-16">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  {/* Timeline Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full border border-[#75AADB]/40 bg-[#03060c] items-center justify-center">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.gold ? 'bg-[#E5C158] shadow-[0_0_12px_#E5C158]' : 'bg-[#75AADB] shadow-[0_0_10px_#75AADB]'
                      }`}
                    />
                  </div>

                  {/* Left Side Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                    <ScrollReveal
                      direction={isEven ? 'left' : 'right'}
                      distance={40}
                      delay={0.1}
                      className="w-full"
                    >
                      <div
                        className={`p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border ${
                          item.gold
                            ? 'border-[#E5C158]/35 bg-gradient-to-b from-[#E5C158]/[0.05] to-transparent'
                            : 'border-white/[0.08] hover:border-[#75AADB]/40'
                        } backdrop-blur-sm transition-all duration-300 shadow-xl shadow-black/40`}
                      >
                        <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          <span
                            className={`text-[9px] font-editorial uppercase tracking-[0.25em] px-2.5 py-0.5 rounded-full border ${
                              item.gold
                                ? 'border-[#E5C158]/40 bg-[#E5C158]/10 text-[#E5C158]'
                                : 'border-[#75AADB]/30 bg-[#75AADB]/10 text-[#75AADB]'
                            }`}
                          >
                            {item.badge}
                          </span>
                          <span className="text-[11px] font-editorial uppercase tracking-[0.2em] text-white/40 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#75AADB]/60" />
                            {item.city}
                          </span>
                        </div>

                        <span className="font-editorial text-xs tracking-[0.25em] uppercase text-white/50 block mb-1">
                          {item.year}
                        </span>

                        <h3 className="font-bebas text-2xl sm:text-3xl tracking-wide text-white mb-3">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-[13px] text-white/70 font-light leading-relaxed">
                          {item.desc}
                        </p>

                        <div className={`mt-4 pt-3 border-t border-white/5 flex items-center gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          <Sparkles className="w-3 h-3 text-[#E5C158]" />
                          <span className="text-[10px] font-editorial uppercase tracking-[0.2em] text-white/40">
                            Milestone: <strong className="text-white/80 font-medium">{item.highlight}</strong>
                          </span>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Empty Spacer on other side for desktop alignment */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : 'order-1'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* View Full Timeline Modal Callout */}
        <ScrollReveal direction="up" distance={25} delay={0.2} className="mt-16 text-center">
          <button
            onClick={onOpenJourneyModal}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-editorial uppercase tracking-[0.25em] text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 hover:border-[#75AADB]/60 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore Complete Interactive Biography</span>
            <span>→</span>
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
