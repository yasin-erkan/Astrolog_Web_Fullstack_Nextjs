'use client';

import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import type { ZodiacSign } from '@/i18n/types';

const ELEMENT_STYLES: Record<ZodiacSign['element'], { border: string; glow: string; ring: string }> = {
  fire: {
    border: 'hover:border-amber-500/60 focus-within:border-amber-500/60',
    glow: 'rgba(251, 146, 60, 0.35)',
    ring: 'group-hover/card:border-amber-500/50 group-hover/card:bg-amber-500/5',
  },
  earth: {
    border: 'hover:border-amber-800/50 focus-within:border-amber-800/50',
    glow: 'rgba(180, 83, 9, 0.28)',
    ring: 'group-hover/card:border-amber-800/40 group-hover/card:bg-amber-900/5',
  },
  air: {
    border: 'hover:border-sky-400/50 focus-within:border-sky-400/50',
    glow: 'rgba(56, 189, 248, 0.25)',
    ring: 'group-hover/card:border-sky-400/40 group-hover/card:bg-sky-500/5',
  },
  water: {
    border: 'hover:border-cyan-400/50 focus-within:border-cyan-400/50',
    glow: 'rgba(34, 211, 238, 0.28)',
    ring: 'group-hover/card:border-cyan-400/40 group-hover/card:bg-cyan-500/5',
  },
};

export default function ZodiacSection({
  signs,
  title,
  subtitle,
  lang,
}: {
  signs: ZodiacSign[];
  title: string;
  subtitle: string;
  lang: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="sky-guide"
      className="max-w-7xl mx-auto py-12 sm:py-16 md:py-24 px-4 sm:px-6 theme-bg"
      aria-labelledby="sky-guide-heading">
      <motion.h2
        id="sky-guide-heading"
        className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-center mb-3 theme-text"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}>
        {title}
      </motion.h2>
      <motion.p
        className="text-center text-sm sm:text-base theme-text/80 font-montserrat mb-10 md:mb-16 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}>
        {subtitle}
      </motion.p>
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
          hidden: {},
        }}>
        {signs.map((sign, i) => {
          const style = ELEMENT_STYLES[sign.element];
          const isHovered = hoveredIndex === i;
          return (
            <motion.div
              key={sign.slug}
              className="relative"
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.45 } },
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}>
              <Link
                href={`/${lang}/zodiac/${sign.slug}`}
                className={`zodiac-card group/card rounded-xl border theme-border bg-(--theme-bg) p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] focus-within:-translate-y-1 focus-within:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-astro-gold focus-visible:ring-offset-2 focus-visible:ring-offset-(--theme-bg) ${style.border}`}
                style={{ boxShadow: isHovered ? `0 0 28px ${style.glow}, 0 0 48px ${style.glow}40` : undefined }}
                aria-label={`${sign.name}: ${sign.keywords.join(', ')}`}>
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 theme-border flex items-center justify-center mb-3 transition-all duration-300 ${style.ring}`}>
                  <span className="text-2xl sm:text-3xl transition-transform duration-300 group-hover/card:scale-110">
                    {sign.symbol}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-montserrat uppercase tracking-widest text-(--theme-text)/70 transition-colors duration-300 group-hover/card:text-astro-gold">
                  {sign.name}
                </span>
              </Link>
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-10 px-3 py-2 rounded-lg bg-(--theme-bg) border theme-border shadow-lg whitespace-nowrap pointer-events-none">
                    <span className="text-[10px] sm:text-xs font-montserrat text-(--theme-text)/90">
                      {sign.keywords.join(' · ')}
                    </span>
                    <span
                    className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-[6px] border-transparent"
                    style={{ borderTopColor: 'var(--theme-bg)' }}
                  />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
