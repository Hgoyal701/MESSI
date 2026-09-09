import { X, Trophy, Award, Target, Flame } from 'lucide-react';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StatsModal({ isOpen, onClose }: StatsModalProps) {
  if (!isOpen) return null;

  return (
    <div
      id="stats-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        id="stats-modal-card"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#060b14] border border-[#75AADB]/20 rounded-2xl p-6 sm:p-8 text-white shadow-2xl shadow-[#75AADB]/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Argentina lighting inside modal */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#75AADB]/10 rounded-full blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-[#E5C158] text-xs font-editorial uppercase tracking-[0.25em]">
              <span>★★★</span>
              <span>The Definitive Numbers</span>
            </div>
            <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider text-white mt-1">
              CAREER STATISTICAL LEGACY
            </h2>
          </div>
          <button
            id="close-stats-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full border border-white/10 bg-white/[0.04] text-white/60 hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Primary 4 Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center">
            <span className="text-white/40 text-[10px] font-editorial uppercase tracking-[0.2em] mb-1">
              Appearances
            </span>
            <span className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
              1,069+
            </span>
            <span className="text-[#75AADB] text-[11px] font-editorial tracking-wider mt-1">
              Senior Official Caps
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center">
            <span className="text-white/40 text-[10px] font-editorial uppercase tracking-[0.2em] mb-1">
              Official Goals
            </span>
            <span className="font-bebas text-4xl sm:text-5xl text-[#D8ECF8] tracking-wide text-glow-subtle">
              840+
            </span>
            <span className="text-[#75AADB] text-[11px] font-editorial tracking-wider mt-1">
              0.79 Goals per game
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center">
            <span className="text-white/40 text-[10px] font-editorial uppercase tracking-[0.2em] mb-1">
              Total Assists
            </span>
            <span className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
              375+
            </span>
            <span className="text-[#75AADB] text-[11px] font-editorial tracking-wider mt-1">
              All-time playmaker
            </span>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-b from-[#E5C158]/10 to-transparent border border-[#E5C158]/30 flex flex-col items-center text-center">
            <span className="text-[#E5C158]/80 text-[10px] font-editorial uppercase tracking-[0.2em] mb-1">
              Total Trophies
            </span>
            <span className="font-bebas text-4xl sm:text-5xl text-[#E5C158] tracking-wide drop-shadow-[0_0_15px_rgba(229,193,88,0.3)]">
              44
            </span>
            <span className="text-white/80 text-[11px] font-editorial tracking-wider mt-1">
              Most in Football History
            </span>
          </div>
        </div>

        {/* Argentina Specific Dominance */}
        <div className="mb-6 p-5 rounded-xl bg-gradient-to-r from-[#75AADB]/10 via-white/[0.02] to-[#75AADB]/10 border border-[#75AADB]/25">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#75AADB] animate-ping" />
            <span className="text-xs font-editorial uppercase tracking-[0.3em] text-[#75AADB]">
              Selección Argentina Record
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-bebas text-3xl text-white">187 CAPS</div>
              <div className="text-[11px] text-white/50 tracking-wider">Most in Argentina history</div>
            </div>
            <div>
              <div className="font-bebas text-3xl text-[#75AADB]">109 GOALS</div>
              <div className="text-[11px] text-white/50 tracking-wider">All-time South American record</div>
            </div>
            <div>
              <div className="font-bebas text-3xl text-[#E5C158]">5 TITLES</div>
              <div className="text-[11px] text-white/50 tracking-wider">World Cup, 2x Copa, Finalissima, Gold</div>
            </div>
          </div>
        </div>

        {/* Individual Accolades Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-[#E5C158] text-xs font-editorial uppercase tracking-wider mb-3">
              <Award className="w-4 h-4" />
              <span>Ballon d'Or Supremacy (8)</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed font-editorial">
              2009, 2010, 2011, 2012, 2015, 2019, 2021, and 2023. The only player to win across three separate decades.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-[#75AADB] text-xs font-editorial uppercase tracking-wider mb-3">
              <Trophy className="w-4 h-4" />
              <span>The Holy Grail (Lusail 2022)</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed font-editorial">
              Scored in every knockout round (Round of 16, Quarter-final, Semi-final, and twice in the Final) to claim the FIFA World Cup and Golden Ball.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-white/80 text-xs font-editorial uppercase tracking-wider mb-3">
              <Target className="w-4 h-4 text-[#75AADB]" />
              <span>European Golden Shoes (6)</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed font-editorial">
              Including the historic 2011-12 season with 73 goals across all competitions and 50 La Liga league goals.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-white/80 text-xs font-editorial uppercase tracking-wider mb-3">
              <Flame className="w-4 h-4 text-[#E5C158]" />
              <span>Unmatched Playmaking</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed font-editorial">
              Most assists recorded in men's football history (375+), with over 1,200 direct goal contributions in senior football.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40 font-editorial">
          <span>Official Career Archive</span>
          <span>Rosario · Barcelona · Paris · Miami · Argentina</span>
        </div>
      </div>
    </div>
  );
}
