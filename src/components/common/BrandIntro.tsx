import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

interface BrandIntroProps {
  onComplete: () => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ onComplete }) => {
  const { t } = useLanguage();
  const [stage, setStage] = useState<'start' | 'wordmark' | 'phrase' | 'line' | 'done'>('start');

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Sequence timing totaling ~1.8 seconds
    const t1 = setTimeout(() => setStage('wordmark'), 150);
    const t2 = setTimeout(() => setStage('phrase'), 600);
    const t3 = setTimeout(() => setStage('line'), 1100);
    const t4 = setTimeout(() => {
      setStage('done');
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setStage('done');
    onComplete();
  };

  if (stage === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        key="brand-intro-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#111315] px-6 select-none cursor-pointer"
        onClick={handleSkip}
        aria-live="polite"
      >
        <div className="max-w-md w-full flex flex-col items-center text-center">
          {/* Small Descriptor */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-sans tracking-[0.25em] text-[#C58B58] uppercase mb-4 font-semibold"
          >
            {t.brand.descriptor}
          </motion.div>

          {/* Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{
              opacity: stage !== 'start' ? 1 : 0,
              y: stage !== 'start' ? 0 : 16
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mb-3"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#EDE9DF]">
              CASA MILANO
            </h1>
          </motion.div>

          {/* Brand Phrase */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === 'phrase' || stage === 'line' ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm font-sans tracking-[0.2em] text-[#EDE9DF]/80 uppercase font-medium mb-6"
          >
            {t.brand.tagline}
          </motion.p>

          {/* Thin expanding Copper line */}
          <div className="w-48 h-[1px] bg-[#202428] relative overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: stage === 'line' ? '100%' : stage === 'phrase' ? '40%' : '0%' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-0 h-full bg-[#C58B58]"
            />
          </div>

          {/* Subtle click to enter */}
          <div className="mt-8 text-[11px] text-[#EDE9DF]/40 font-sans tracking-wider uppercase hover:text-[#C58B58] transition-colors">
            {t.brand.intro_skip} · Click anywhere to skip
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
