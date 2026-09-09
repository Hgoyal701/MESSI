import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export function QuotesSection() {
  const quotes = [
    {
      text: 'Don’t write about him, don’t try to describe him. Just watch him.',
      author: 'Pep Guardiola',
      role: 'Former FC Barcelona Manager',
      featured: true,
    },
    {
      text: 'The best player in the world is Messi, and the second best player in the world is Messi when he’s injured.',
      author: 'Jorge Valdano',
      role: 'World Cup Winner 1986',
      featured: false,
    },
    {
      text: 'He arrives and he changes physics. He doesn’t merely kick a ball, he plays a violin on grass with angels in his feet.',
      author: 'Ray Hudson',
      role: 'Football Commentator',
      featured: false,
    },
    {
      text: 'I have seen Diego Maradona and Pelé play. But Leo Messi is the greatest player in the history of football.',
      author: 'Arsène Wenger',
      role: 'FIFA Head of Global Football Development',
      featured: false,
    },
    {
      text: 'You have to fight to reach your dream. You have to sacrifice and work hard for it.',
      author: 'Lionel Andrés Messi',
      role: 'Captain of Argentina',
      featured: true,
    },
    {
      text: 'When I retire, I hope people remember me more as a good person than as a great footballer.',
      author: 'Lionel Andrés Messi',
      role: 'Reflecting on his life and legacy',
      featured: false,
    },
  ];

  return (
    <section id="legacy" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 bg-[#03060c] overflow-hidden">
      {/* Subtle stadium light beams */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[25vh] bg-[#75AADB]/[0.03] rounded-full blur-[140px]" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="up" distance={30} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-white/70 text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.3em] mb-4">
            <Quote className="w-3 h-3 text-[#75AADB]" />
            <span>WORDS OF THE IMMORTAL</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase text-white">
            PHILOSOPHY & VOICES
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white/60 font-light tracking-wide leading-relaxed">
            What the world's football architects said when words failed to explain his genius.
          </p>
        </ScrollReveal>

        {/* Quotes Grid */}
        <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((q, idx) => (
            <StaggerItem key={idx}>
              <div
                className={`relative p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border ${
                  q.featured
                    ? 'border-[#75AADB]/30 bg-gradient-to-b from-[#75AADB]/[0.04] to-transparent'
                    : 'border-white/[0.07] hover:border-white/20'
                } backdrop-blur-sm transition-all duration-300 h-full flex flex-col justify-between shadow-xl shadow-black/40`}
              >
                <Quote className="w-6 h-6 text-[#75AADB]/40 mb-4" />

                <p className="font-serif italic text-sm sm:text-base text-white/85 leading-relaxed mb-6">
                  "{q.text}"
                </p>

                <div className="pt-4 border-t border-white/5">
                  <div className="font-editorial text-xs tracking-[0.2em] uppercase font-semibold text-white">
                    {q.author}
                  </div>
                  <div className="font-editorial text-[10px] tracking-[0.15em] uppercase text-white/40 mt-0.5">
                    {q.role}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
