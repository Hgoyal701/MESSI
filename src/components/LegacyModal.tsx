import { useState } from 'react';
import { X, Trophy, Globe, History, Star, Quote } from 'lucide-react';

interface LegacyModalProps {
  isOpen: boolean;
  initialTab?: 'journey' | 'trophies' | 'argentina' | 'legacy';
  onClose: () => void;
}

export function LegacyModal({ isOpen, initialTab = 'journey', onClose }: LegacyModalProps) {
  const [activeTab, setActiveTab] = useState<'journey' | 'trophies' | 'argentina' | 'legacy'>(initialTab);

  if (!isOpen) return null;

  return (
    <div
      id="legacy-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        id="legacy-modal-card"
        className="relative w-full max-w-4xl max-h-[88vh] flex flex-col bg-[#050912] border border-[#75AADB]/20 rounded-2xl p-6 sm:p-8 text-white shadow-2xl shadow-[#75AADB]/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-[#75AADB]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 bg-[#E5C158]/5 rounded-full blur-3xl" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-[#75AADB] text-xs font-editorial uppercase tracking-[0.3em]">
              <span>Asociación del Fútbol Argentino</span>
              <span>·</span>
              <span className="text-[#E5C158]">★★★ 1978 · 1986 · 2022</span>
            </div>
            <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider text-white mt-1">
              THE ETERNAL LEGACY
            </h2>
          </div>
          <button
            id="close-legacy-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full border border-white/10 bg-white/[0.04] text-white/60 hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 py-4 border-b border-white/5 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('journey')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-editorial uppercase tracking-[0.2em] transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'journey'
                ? 'bg-[#75AADB]/20 text-[#75AADB] border border-[#75AADB]/40'
                : 'bg-white/[0.03] text-white/60 hover:text-white border border-white/5'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>The Journey</span>
          </button>

          <button
            onClick={() => setActiveTab('argentina')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-editorial uppercase tracking-[0.2em] transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'argentina'
                ? 'bg-[#75AADB]/20 text-[#75AADB] border border-[#75AADB]/40'
                : 'bg-white/[0.03] text-white/60 hover:text-white border border-white/5'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Argentina & Lusail</span>
          </button>

          <button
            onClick={() => setActiveTab('trophies')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-editorial uppercase tracking-[0.2em] transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'trophies'
                ? 'bg-[#E5C158]/20 text-[#E5C158] border border-[#E5C158]/40'
                : 'bg-white/[0.03] text-white/60 hover:text-white border border-white/5'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>44 Trophies</span>
          </button>

          <button
            onClick={() => setActiveTab('legacy')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-editorial uppercase tracking-[0.2em] transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'legacy'
                ? 'bg-white/20 text-white border border-white/40'
                : 'bg-white/[0.03] text-white/60 hover:text-white border border-white/5'
            }`}
          >
            <Quote className="w-3.5 h-3.5" />
            <span>Philosophy & Voices</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="overflow-y-auto py-5 pr-2 space-y-6 flex-1">
          {activeTab === 'journey' && (
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-[#75AADB]/30 space-y-6">
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#75AADB] border-4 border-[#050912]" />
                  <span className="text-[10px] font-editorial uppercase tracking-[0.25em] text-[#75AADB]">
                    1987 · Rosario, Argentina
                  </span>
                  <h4 className="font-bebas text-2xl text-white mt-0.5">The Boy from Grandoli</h4>
                  <p className="text-sm text-white/70 font-editorial leading-relaxed mt-1">
                    Born in Rosario, Santa Fe. At age four, his grandmother Celia pushed him onto the local pitch. His diminutive stature and superhuman center of gravity were apparent from the first touch.
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white/60 border-4 border-[#050912]" />
                  <span className="text-[10px] font-editorial uppercase tracking-[0.25em] text-white/50">
                    2000 · The Napkin Contract
                  </span>
                  <h4 className="font-bebas text-2xl text-white mt-0.5">La Masia Arrival</h4>
                  <p className="text-sm text-white/70 font-editorial leading-relaxed mt-1">
                    Carles Rexach famously signed a promise on a paper napkin in Barcelona. Overcoming growth hormone deficiency, Messi progressed from Cadet B to the senior team in historic velocity.
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#E5C158] border-4 border-[#050912]" />
                  <span className="text-[10px] font-editorial uppercase tracking-[0.25em] text-[#E5C158]">
                    2008 - 2012 · Golden Zenith
                  </span>
                  <h4 className="font-bebas text-2xl text-white mt-0.5">The False Nine & 91 Goals</h4>
                  <p className="text-sm text-white/70 font-editorial leading-relaxed mt-1">
                    Under Pep Guardiola, Messi redefined the mechanics of modern football. In 2012, he scored 91 official goals in a single calendar year—a world record that stands untouched.
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#75AADB] border-4 border-[#050912]" />
                  <span className="text-[10px] font-editorial uppercase tracking-[0.25em] text-[#75AADB]">
                    2021 · Rio de Janeiro, Maracanã
                  </span>
                  <h4 className="font-bebas text-2xl text-white mt-0.5">Copa América Deliverance</h4>
                  <p className="text-sm text-white/70 font-editorial leading-relaxed mt-1">
                    Argentina defeated Brazil 1-0 in Rio, ending a 28-year senior title drought. The emotional weight lifted from Messi catalyzed the most iconic national era in South American history.
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#E5C158] shadow-[0_0_12px_#E5C158] border-4 border-[#050912]" />
                  <span className="text-[10px] font-editorial uppercase tracking-[0.25em] text-[#E5C158]">
                    18 December 2022 · Lusail Stadium, Qatar
                  </span>
                  <h4 className="font-bebas text-2xl text-[#E5C158] mt-0.5">The World Cup Coronation</h4>
                  <p className="text-sm text-white/80 font-editorial leading-relaxed mt-1">
                    The greatest World Cup final in history. Messi scored twice in the 3-3 thriller against France, converted his penalty in the shootout, and lifted the FIFA World Cup trophy aloft draped in the bisht.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'argentina' && (
            <div className="space-y-5">
              <div className="p-5 rounded-xl bg-gradient-to-br from-[#75AADB]/15 via-white/[0.02] to-transparent border border-[#75AADB]/30">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-5 h-5 text-[#E5C158] fill-[#E5C158]" />
                  <h3 className="font-bebas text-2xl tracking-wider text-white">THE 36-YEAR DESTINY FULFILLED</h3>
                </div>
                <p className="text-sm text-white/80 font-editorial leading-relaxed">
                  For years, critics questioned his ability to mirror Diego Armando Maradona's 1986 triumph in Mexico. In Qatar 2022, wearing the sacred Albiceleste stripes with the #10 on his back, Messi authored a masterclass of leadership, technical grace, and fierce determination.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-editorial uppercase tracking-[0.2em] text-[#75AADB]">
                    Historic Knockout Run
                  </span>
                  <h5 className="font-bebas text-xl text-white mt-1">Goal in Every Round</h5>
                  <p className="text-xs text-white/60 font-editorial mt-1 leading-relaxed">
                    First player in men's World Cup history to score in the Round of 16 (Australia), Quarter-final (Netherlands), Semi-final (Croatia), and the Final (France).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-editorial uppercase tracking-[0.2em] text-[#E5C158]">
                    Double Golden Ball
                  </span>
                  <h5 className="font-bebas text-xl text-white mt-1">2014 & 2022 World Cup MVP</h5>
                  <p className="text-xs text-white/60 font-editorial mt-1 leading-relaxed">
                    The only player in tournament history to receive the FIFA World Cup Golden Ball as tournament best player twice.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-editorial uppercase tracking-[0.2em] text-white/40">National Team Record</span>
                  <div className="font-bebas text-xl text-white">187 Matches · 109 Goals · 58 Assists</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-editorial uppercase tracking-[0.2em] text-[#E5C158]">Major Honors</span>
                  <div className="font-bebas text-xl text-[#E5C158]">World Cup · 2x Copa América · Finalissima</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'trophies' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-bebas text-2xl text-[#E5C158]">44 OFFICIAL TROPHIES</h4>
                  <p className="text-xs text-white/70 font-editorial">The most decorated male player in football history</p>
                </div>
                <div className="font-bebas text-4xl text-[#E5C158] tracking-widest">#1</div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-editorial">
                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 text-[9px] uppercase tracking-wider block">International</span>
                  <span className="font-bebas text-lg text-white block mt-0.5">1x FIFA World Cup</span>
                  <span className="text-white/50 text-[10px]">Qatar 2022</span>
                </div>

                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 text-[9px] uppercase tracking-wider block">International</span>
                  <span className="font-bebas text-lg text-[#75AADB] block mt-0.5">2x Copa América</span>
                  <span className="text-white/50 text-[10px]">2021 & 2024</span>
                </div>

                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 text-[9px] uppercase tracking-wider block">International</span>
                  <span className="font-bebas text-lg text-white block mt-0.5">1x Finalissima</span>
                  <span className="text-white/50 text-[10px]">2022 Wembley</span>
                </div>

                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 text-[9px] uppercase tracking-wider block">European Club</span>
                  <span className="font-bebas text-lg text-white block mt-0.5">4x UEFA Champions League</span>
                  <span className="text-white/50 text-[10px]">2006, 2009, 2011, 2015</span>
                </div>

                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 text-[9px] uppercase tracking-wider block">Domestic League</span>
                  <span className="font-bebas text-lg text-white block mt-0.5">10x La Liga</span>
                  <span className="text-white/50 text-[10px]">FC Barcelona</span>
                </div>

                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 text-[9px] uppercase tracking-wider block">Domestic Cup</span>
                  <span className="font-bebas text-lg text-white block mt-0.5">7x Copa del Rey</span>
                  <span className="text-white/50 text-[10px]">FC Barcelona</span>
                </div>

                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 text-[9px] uppercase tracking-wider block">World Club</span>
                  <span className="font-bebas text-lg text-white block mt-0.5">3x FIFA Club World Cup</span>
                  <span className="text-white/50 text-[10px]">2009, 2011, 2015</span>
                </div>

                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 text-[9px] uppercase tracking-wider block">France & USA</span>
                  <span className="font-bebas text-lg text-white block mt-0.5">2x Ligue 1 · 1x Leagues Cup</span>
                  <span className="text-white/50 text-[10px]">PSG & Inter Miami</span>
                </div>

                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 text-[9px] uppercase tracking-wider block">Olympic / Youth</span>
                  <span className="font-bebas text-lg text-[#E5C158] block mt-0.5">1x Olympic Gold Medal</span>
                  <span className="text-white/50 text-[10px]">Beijing 2008 & U-20 WC</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'legacy' && (
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 relative">
                <Quote className="w-8 h-8 text-white/10 absolute top-4 right-4" />
                <p className="text-base text-white/90 font-editorial italic leading-relaxed">
                  "Don't write about him, don't try to describe him. Just watch him."
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#75AADB]" />
                  <span className="text-xs font-editorial uppercase tracking-wider text-[#75AADB]">
                    Pep Guardiola
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 relative">
                <Quote className="w-8 h-8 text-white/10 absolute top-4 right-4" />
                <p className="text-base text-white/90 font-editorial italic leading-relaxed">
                  "I have seen the player who will inherit my place in Argentine football and his name is Lionel Messi."
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                  <span className="text-xs font-editorial uppercase tracking-wider text-[#E5C158]">
                    Diego Armando Maradona (2006)
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 relative">
                <Quote className="w-8 h-8 text-white/10 absolute top-4 right-4" />
                <p className="text-base text-white/90 font-editorial italic leading-relaxed">
                  "You have to fight to reach your dream. You have to sacrifice and work hard for it."
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                  <span className="text-xs font-editorial uppercase tracking-wider text-white/70">
                    Lionel Andrés Messi
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
