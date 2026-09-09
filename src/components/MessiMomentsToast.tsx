import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X } from 'lucide-react';

const TRIVIA_FACTS = [
  "Messi scored 91 goals in a single calendar year (2012).",
  "The first player in history to win 8 Ballon d'Or awards.",
  "Most appearances in FC Barcelona history with 778 official matches.",
  "Only player to score in every round of a 32-team FIFA World Cup.",
  "La Liga's all-time top scorer with 474 goals.",
  "Winner of 44 major career trophies.",
  "Holds the record for the most assists in football history."
];

export function MessiMomentsToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFact, setCurrentFact] = useState('');

  useEffect(() => {
    const showToast = () => {
      const randomFact = TRIVIA_FACTS[Math.floor(Math.random() * TRIVIA_FACTS.length)];
      setCurrentFact(randomFact);
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 6000); // Display for 6 seconds
    };

    // Show every 25 seconds
    const interval = setInterval(showToast, 25000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 50, y: 50 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 z-[100] w-80 p-5 rounded-2xl bg-[#03060c]/90 backdrop-blur-md border border-[#75AADB]/30 shadow-2xl flex items-start gap-4"
        >
          <div className="shrink-0 pt-0.5">
            <Sparkles className="w-5 h-5 text-[#E5C158]" />
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#75AADB] font-editorial mb-1">
              Messi Moment
            </h4>
            <p className="text-sm text-white/90 font-light leading-relaxed">
              {currentFact}
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 p-1 text-white/30 hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
