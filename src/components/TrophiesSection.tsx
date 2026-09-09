import React, { useState } from 'react';
import { Trophy, Award, Medal, Shield, Crown, Sparkles } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { InteractiveGlassCard } from './InteractiveGlassCard';

export function TrophiesSection({ onOpenTrophiesModal }: { onOpenTrophiesModal: () => void }) {
  const [filter, setFilter] = useState<'all' | 'international' | 'continental' | 'individual'>('all');

  const trophyCategories = [
    {
      category: 'international',
      title: 'FIFA WORLD CUP',
      count: '1×',
      year: 'Qatar 2022',
      team: 'Argentina National Team',
      type: 'gold',
      desc: 'The greatest prize in sport. Golden Ball winner with 7 goals & 3 assists.',
    },
    {
      category: 'international',
      title: 'COPA AMÉRICA',
      count: '2×',
      year: '2021 (Brazil), 2024 (USA)',
      team: 'Argentina National Team',
      type: 'gold',
      desc: 'Ending the 28-year senior title drought at the Maracanã in 2021, and back-to-back in 2024.',
    },
    {
      category: 'international',
      title: 'CONMEBOL–UEFA FINALISSIMA',
      count: '1×',
      year: 'Wembley 2022',
      team: 'Argentina National Team',
      type: 'gold',
      desc: 'Masterclass against European champions Italy at Wembley Stadium (3-0).',
    },
    {
      category: 'international',
      title: 'OLYMPIC GOLD MEDAL',
      count: '1×',
      year: 'Beijing 2008',
      team: 'Argentina U-23',
      type: 'gold',
      desc: 'Assisting Ángel Di María in the 1-0 final victory against Nigeria.',
    },
    {
      category: 'continental',
      title: 'UEFA CHAMPIONS LEAGUE',
      count: '4×',
      year: '2006, 2009, 2011, 2015',
      team: 'FC Barcelona',
      type: 'silver',
      desc: 'Legendary final goals in Rome (2009 header vs Man Utd) and Wembley (2011 laser vs Man Utd).',
    },
    {
      category: 'continental',
      title: 'FIFA CLUB WORLD CUP',
      count: '3×',
      year: '2009, 2011, 2015',
      team: 'FC Barcelona',
      type: 'gold',
      desc: 'Including the iconic chest goal in extra-time against Estudiantes in 2009.',
    },
    {
      category: 'continental',
      title: 'UEFA SUPER CUP',
      count: '3×',
      year: '2009, 2011, 2015',
      team: 'FC Barcelona',
      type: 'silver',
      desc: 'Super Cup champion across multiple eras.',
    },
    {
      category: 'continental',
      title: 'DOMESTIC LEAGUE TITLES',
      count: '12×',
      year: '10× La Liga, 2× Ligue 1',
      team: 'Barcelona & Paris Saint-Germain',
      type: 'silver',
      desc: '10 La Liga titles spanning 15 seasons of total domestic dominance in Spain.',
    },
    {
      category: 'individual',
      title: 'BALLON D\'OR',
      count: '8×',
      year: '2009, 2010, 2011, 2012, 2015, 2019, 2021, 2023',
      team: 'Individual World Honor',
      type: 'gold',
      desc: 'All-time historic record across three separate decades.',
    },
    {
      category: 'individual',
      title: 'EUROPEAN GOLDEN SHOE',
      count: '6×',
      year: '2010, 2012, 2013, 2017, 2018, 2019',
      team: 'Continental Top Scorer',
      type: 'silver',
      desc: 'Most European Golden Shoes in history, including 50 league goals in 2011-12.',
    },
    {
      category: 'individual',
      title: 'FIFA THE BEST / WORLD PLAYER',
      count: '3×',
      year: '2019, 2022, 2023',
      team: 'World Player of the Year',
      type: 'gold',
      desc: 'Recognized as world player of the year by FIFA multiple times.',
    },
    {
      category: 'individual',
      title: 'LA LIGA PICHICHI TROPHIES',
      count: '8×',
      year: '2010 to 2021',
      team: 'Spanish Top Scorer',
      type: 'silver',
      desc: 'All-time record in the history of Spanish football.',
    },
  ];

  const filtered = filter === 'all'
    ? trophyCategories
    : trophyCategories.filter(t => t.category === filter);

  return (
    <section id="trophies" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 bg-[#02050b] overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[#E5C158]/[0.025] rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="up" distance={30} className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5C158]/25 bg-[#E5C158]/[0.05] text-[#E5C158] text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.3em] mb-4">
            <Crown className="w-3.5 h-3.5 text-[#E5C158]" />
            <span>THE MOST DECORATED FOOTBALLER IN HISTORY</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase text-white">
            THE HALL OF 44 TROPHIES
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white/60 font-light tracking-wide leading-relaxed">
            From the FIFA World Cup to continental trebles and unprecedented individual records.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Honors' },
              { id: 'international', label: 'International (Argentina)' },
              { id: 'continental', label: 'Club & Continental' },
              { id: 'individual', label: 'Individual Laurels' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-editorial uppercase tracking-[0.2em] transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#E5C158]/20 text-[#F5E5B5] border border-[#E5C158]/50 shadow-[0_0_15px_rgba(229,193,88,0.2)]'
                    : 'bg-white/[0.03] text-white/60 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Trophies Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((t, idx) => (
            <StaggerItem key={idx}>
              <InteractiveGlassCard
                className={`h-full flex flex-col justify-between shadow-lg shadow-black/40 border ${
                  t.type === 'gold'
                    ? 'border-[#E5C158]/30 group-hover:border-[#E5C158]/60'
                    : 'border-white/10 group-hover:border-white/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-editorial uppercase tracking-[0.25em] font-semibold ${
                        t.type === 'gold' ? 'text-[#E5C158]' : 'text-slate-300'
                      }`}
                    >
                      {t.team}
                    </span>

                    <span className="font-bebas text-2xl tracking-wide text-white">
                      {t.count}
                    </span>
                  </div>

                  <h3 className="font-bebas text-2xl tracking-wide text-white group-hover:text-[#F5E5B5] transition-colors">
                    {t.title}
                  </h3>

                  <div className="text-[11px] font-editorial uppercase tracking-[0.2em] text-white/40 mt-1 mb-3">
                    {t.year}
                  </div>

                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {t.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-editorial uppercase tracking-[0.2em] text-white/40">
                    CATEGORY
                  </span>
                  <span
                    className={`text-[9px] font-editorial uppercase tracking-[0.2em] font-medium ${
                      t.type === 'gold' ? 'text-[#E5C158]' : 'text-[#75AADB]'
                    }`}
                  >
                    {t.category.toUpperCase()}
                  </span>
                </div>
              </InteractiveGlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Modal Callout */}
        <ScrollReveal direction="up" distance={25} delay={0.15} className="mt-14 text-center">
          <button
            onClick={onOpenTrophiesModal}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-editorial uppercase tracking-[0.22em] text-[#E5C158] bg-[#E5C158]/10 hover:bg-[#E5C158]/20 border border-[#E5C158]/35 hover:border-[#E5C158]/60 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <span>View All Detailed Trophy Chronicles</span>
            <span>→</span>
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
