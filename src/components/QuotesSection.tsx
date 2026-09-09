import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

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

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section id="legacy" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 bg-[#03060c] overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[25vh] bg-[#75AADB]/[0.03] rounded-full blur-[140px]" />

      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up" distance={30} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-white/70 text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.3em] mb-4">
            <Quote className="w-3 h-3 text-[#75AADB]" />
            <span>WORDS OF THE IMMORTAL</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wider uppercase text-white">
            PHILOSOPHY & VOICES
          </h2>
        </ScrollReveal>

        <div className="relative h-[300px] sm:h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className={`relative p-8 sm:p-10 rounded-3xl border backdrop-blur-sm h-full w-full flex flex-col justify-center items-center text-center shadow-2xl ${
                quotes[activeIndex].featured
                  ? 'border-[#75AADB]/30 bg-gradient-to-b from-[#75AADB]/[0.05] to-transparent'
                  : 'border-white/[0.07] bg-white/[0.02]'
              }`}
            >
              <Quote className="w-8 h-8 text-[#75AADB]/40 mb-6" />
              <p className="font-serif italic text-base sm:text-lg text-white/85 leading-relaxed mb-8 max-w-2xl">
                "{quotes[activeIndex].text}"
              </p>
              <div>
                <div className="font-editorial text-xs tracking-[0.2em] uppercase font-semibold text-white">
                  {quotes[activeIndex].author}
                </div>
                <div className="font-editorial text-[10px] tracking-[0.15em] uppercase text-white/40 mt-1">
                  {quotes[activeIndex].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
