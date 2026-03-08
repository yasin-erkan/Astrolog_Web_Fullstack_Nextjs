'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import MoonPhase from './MoonPhase';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const floatVariants = {
  initial: { opacity: 0, x: 12, y: 12 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, delay: 1 },
  },
  float: {
    y: [0, -6, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
  },
};

type HeroSectionProps = {
  introText: string;
  headline?: string;
  subtitle: string;
  ctaText: string;
  floatingLabel: string;
  lang: string;
};

export default function HeroSection({
  introText,
  headline,
  subtitle,
  ctaText,
  floatingLabel,
  lang,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[65vh] sm:min-h-[70vh] md:min-h-[72vh] flex flex-col md:flex-row overflow-hidden">
      {/* Left: photo in rounded frame (desktop) / top (mobile) */}
      <div className="relative w-full md:w-[48%] min-h-[32vh] md:min-h-full flex items-center justify-center p-4 md:p-8 theme-bg">
        <div
          className="relative w-full max-w-sm md:max-w-md aspect-square rounded-full overflow-hidden border-2 border-astro-gold/40 shadow-[0_20px_60px_rgba(0,0,0,0.25),0_0_0_1px_rgba(179,145,110,0.1)] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: 'url(/umran_foto.jpg)' }}
          aria-hidden
        />
      </div>

      {/* Right: content on solid background */}
      <div className="relative flex-1 flex flex-col items-center justify-center theme-bg px-6 py-12 md:py-16 md:pl-12 md:pr-16 text-center md:text-left">
        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
          <motion.div
            variants={floatVariants}
            initial="initial"
            animate={['animate', 'float']}
          >
            <Link href={`/${lang}/consultations/birth-chart`} className="hero-float-box">
              {floatingLabel}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative z-10 flex flex-col items-center md:items-start max-w-xl mx-auto md:ml-0 w-full"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="hero-moon-wrap mb-3 sm:mb-5 flex justify-center md:justify-start w-20 h-20 sm:w-24 sm:h-24"
            variants={item}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <MoonPhase className="w-full h-full" variant="hero" />
          </motion.span>

          <motion.p
            className="font-montserrat text-base sm:text-lg md:text-xl theme-text font-light mb-3 sm:mb-4 tracking-[0.04em]"
            variants={item}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {introText}
          </motion.p>

          {headline && (
            <motion.p
              className="font-cinzel text-lg sm:text-xl md:text-2xl text-astro-gold/95 mb-2 sm:mb-3 tracking-[0.08em] max-w-lg"
              variants={item}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {headline}
            </motion.p>
          )}

          <motion.p
            className="font-montserrat italic font-extralight text-sm sm:text-base md:text-lg theme-text opacity-90 mb-6 sm:mb-8 max-w-md mx-auto md:mx-0 md:max-w-lg tracking-[0.06em]"
            variants={item}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {subtitle}
          </motion.p>

          <motion.div className="hero-cta-wrap" variants={item} transition={{ duration: 0.5, ease: 'easeOut' }}>
            <Link href={`/${lang}/free-chart`} className="hero-cta-btn">
              {ctaText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
