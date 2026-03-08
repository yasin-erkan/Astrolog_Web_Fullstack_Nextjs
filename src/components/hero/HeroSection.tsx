'use client';

import Link from 'next/link';
import {motion} from 'framer-motion';
import MoonPhase from './MoonPhase';

/**
 * ADAPTIVE ANIMATIONS
 * Professional English comments as requested.
 */
const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {staggerChildren: 0.2, delayChildren: 0.3},
  },
};

const fadeUp = {
  hidden: {opacity: 0, y: 30},
  visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: 'easeOut' as const}},
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
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center overflow-hidden theme-bg pt-20 md:pt-0">
      {/* BACKGROUND DECO: Subtle Zodiac Rings */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-astro-gold/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-astro-gold/10 rounded-full border-dashed" />
      </div>

      {/* LEFT SIDE: THE PHOTO PORTAL */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-20 z-10">
        <motion.div
          initial={{opacity: 0, scale: 0.95}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 1}}
          className="relative w-full max-w-md group">
          {/* THE BIRTH CHART SEAL (The Floating Badge)
              Repositioned to overlap the photo for better visual harmony.
          */}
          <motion.div
            animate={{y: [0, -10, 0]}}
            transition={{duration: 4, repeat: Infinity, ease: 'easeInOut'}}
            className="absolute -top-4 -right-6 z-30 pointer-events-auto">
            <Link
              href={`/${lang}/consultations/birth-chart`}
              className="flex items-center justify-center w-24 h-24 rounded-full border border-astro-gold/40 
                         bg-black/80 backdrop-blur-xl text-center p-2 shadow-2xl transition-all duration-500
                         hover:scale-110 hover:border-astro-gold group/seal">
              <span className="text-[10px] tracking-[0.2em] uppercase text-astro-gold font-bold leading-tight group-hover/seal:text-white">
                {floatingLabel.replace(' ', '\n')}
              </span>
            </Link>
          </motion.div>

          {/* MAIN IMAGE CARD */}
          <motion.div
            whileHover={{scale: 1.02}}
            className="relative aspect-3/4 rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.9)]">
            <div
              className="w-full h-full bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: 'url(/umran_foto.jpg?v=6)',
                backgroundPosition: 'center 95%',
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT SIDE: THE MANIFESTO */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-center px-10 py-12 md:pr-24 lg:pr-32 text-center md:text-left z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {/* THE RESTORED MOON PHASE (Bigger and glowing) */}
          <motion.div
            variants={fadeUp}
            className="relative mb-12 flex justify-center md:justify-start">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <div className="absolute inset-0 bg-astro-gold/20 blur-2xl rounded-full animate-pulse" />
              <MoonPhase
                variant="hero"
                className="relative w-full h-full text-astro-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
              />
            </div>
          </motion.div>

          {/* WELCOME TEXT (Enhanced Typography) */}
          <motion.p
            variants={fadeUp}
            className="font-montserrat text-astro-gold tracking-[0.4em] text-sm md:text-base mb-6 uppercase font-bold opacity-90">
            {introText}
          </motion.p>

          {/* MAIN HEADLINE */}
          <motion.h1
            variants={fadeUp}
            className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-white tracking-tighter">
            {headline}
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            variants={fadeUp}
            className="font-montserrat italic text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-light max-w-lg">
            {subtitle}
          </motion.p>

          {/* CTA BUTTON */}
          <motion.div variants={fadeUp} className="hero-cta-wrap">
            <Link href={`/${lang}/free-chart`} className="hero-cta-btn">
              {ctaText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
