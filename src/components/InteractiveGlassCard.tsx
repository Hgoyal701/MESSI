import React, { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';

export function InteractiveGlassCard({ children, className = "", highlight = false }: { children: React.ReactNode, className?: string, highlight?: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`relative group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${className}`}
      style={{
        background: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.08), transparent 80%), rgba(255,255,255,0.02)`
      }}
    >
      {children}
    </motion.div>
  );
}
