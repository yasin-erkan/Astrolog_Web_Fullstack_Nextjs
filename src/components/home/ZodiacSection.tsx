'use client';

import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';

const ELEMENTS = ['fire', 'earth', 'air', 'water'] as const;
const ELEMENT_GLOW: Record<(typeof ELEMENTS)[number], string> = {
  fire: 'rgba(179, 145, 110, 0.35)',
  earth: 'rgba(139, 119, 101, 0.3)',
  air: 'rgba(179, 145, 110, 0.2)',
  water: 'rgba(147, 167, 189, 0.28)',
};

function getElement(index: number): (typeof ELEMENTS)[number] {
  return ELEMENTS[index % 4];
}

type Sign = { name: string; symbol: string };

export default function ZodiacSection({
  signs,
  title,
}: {
  signs: Sign[];
  title: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {once: true, margin: '-80px'});

  return (
    <section
      ref={ref}
      id="sky-guide"
      className="max-w-7xl mx-auto py-12 sm:py-16 md:py-24 px-4 sm:px-6 theme-bg">
      <motion.h2
        className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-center mb-10 md:mb-16 theme-text"
        initial={{opacity: 0, y: 16}}
        animate={isInView ? {opacity: 1, y: 0} : {}}
        transition={{duration: 0.6}}>
        {title}
      </motion.h2>
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          visible: {
            transition: {staggerChildren: 0.1, delayChildren: 0.15},
          },
          hidden: {},
        }}>
        {signs.map((sign, i) => {
          const element = getElement(i);
          const glow = ELEMENT_GLOW[element];
          return (
            <motion.div
              key={sign.name}
              className="zodiac-card group/card cursor-pointer rounded-xl border theme-border bg-(--theme-bg) p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:border-astro-gold hover:-translate-y-1 hover:scale-[1.02] focus-within:border-astro-gold focus-within:-translate-y-1 focus-within:scale-[1.02] focus:outline-none"
              variants={{
                hidden: {opacity: 0, y: 20, filter: 'blur(4px)'},
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: {duration: 0.5},
                },
              }}
              whileHover={{
                boxShadow: `0 0 28px ${glow}, 0 0 48px ${glow}40`,
              }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 theme-border flex items-center justify-center mb-3 transition-all duration-300 group-hover/card:border-astro-gold group-hover/card:scale-110 group-hover/card:bg-astro-gold/5">
                <span className="text-2xl sm:text-3xl transition-transform duration-300 group-hover/card:scale-110">
                  {sign.symbol}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-montserrat uppercase tracking-widest text-(--theme-text)/70 transition-colors duration-300 group-hover/card:text-astro-gold">
                {sign.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
