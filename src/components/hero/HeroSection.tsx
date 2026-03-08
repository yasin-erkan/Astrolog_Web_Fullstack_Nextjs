'use client';

import Link from 'next/link';
import {motion} from 'framer-motion';
import MoonPhase from './MoonPhase';

const container = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {staggerChildren: 0.12, delayChildren: 0.15},
  },
};

const item = {
  hidden: {opacity: 0, y: 24},
  visible: {opacity: 1, y: 0},
};

const floatVariants = {
  initial: {opacity: 0, x: 12, y: 12},
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {duration: 0.6, delay: 1},
  },
  float: {
    y: [0, -6, 0],
    transition: {duration: 4, repeat: Infinity, ease: 'easeInOut' as const},
  },
};

type HeroSectionProps = {
  subtitle: string;
  ctaText: string;
  floatingLabel: string;
  lang: string;
};

export default function HeroSection({
  subtitle,
  ctaText,
  floatingLabel,
  lang,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Layer 1: Base + rotating rings (parallax, infinity feel) */}
      <div className="absolute inset-0 z-0 theme-bg" aria-hidden />
      <div
        className="absolute inset-0 z-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
        <div className="hero-ring hero-ring-3" />
      </div>
      <div
        className="absolute inset-0 z-0 opacity-60"
        aria-hidden
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 40%, transparent 0%, var(--theme-bg) 70%)',
        }}
      />

      {/* Layer 2: Middle – soft glow (optional image slot) */}
      <motion.div
        className="absolute inset-0 z-1 flex items-end justify-center pointer-events-none"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, ease: 'easeOut'}}
        aria-hidden
      >
        <div className="w-full max-w-2xl h-[35vh] min-h-[160px] opacity-[0.06] bg-[radial-gradient(ellipse_80%_80%_at_50%_100%,rgba(179,145,110,0.5),transparent_70%)]" />
      </motion.div>

      {/* Floating box: independent motion, 3D depth */}
      <motion.div
        className="absolute z-5 hero-float-wrap"
        variants={floatVariants}
        initial="initial"
        animate={['animate', 'float']}
      >
        <Link href={`/${lang}/consultations/birth-chart`} className="hero-float-box">
          {floatingLabel}
        </Link>
      </motion.div>

      {/* Layer 3: Content – staggerChildren slide-up */}
      <motion.div
        className="relative z-10 flex flex-col items-center max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="hero-moon-wrap mb-6 sm:mb-8 flex justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
          variants={item}
          transition={{duration: 0.5, ease: 'easeOut'}}
        >
          <MoonPhase className="w-full h-full" variant="hero" />
        </motion.span>

        <motion.h1
          className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-astro-gold mb-2 sm:mb-3 tracking-[0.15em] sm:tracking-[0.2em] drop-shadow-[0_4px_24px_rgba(179,145,110,0.3)]"
          variants={item}
          transition={{duration: 0.55, ease: 'easeOut'}}
        >
          Luminosa
        </motion.h1>

        <motion.p
          className="font-montserrat italic font-extralight text-base sm:text-lg md:text-xl lg:text-2xl text-astro-gold/90 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto tracking-[0.08em]"
          variants={item}
          transition={{duration: 0.5, ease: 'easeOut'}}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="hero-cta-wrap"
          variants={item}
          transition={{duration: 0.5, ease: 'easeOut'}}
        >
          <Link
            href={`/${lang}/free-chart`}
            className="hero-cta-btn"
          >
            {ctaText}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
