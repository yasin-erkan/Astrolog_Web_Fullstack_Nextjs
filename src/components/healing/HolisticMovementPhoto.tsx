'use client';

import {motion} from 'framer-motion';

export default function HolisticMovementPhoto({alt}: {alt: string}) {
  return (
    <motion.figure
      className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, margin: '-20px'}}
      transition={{duration: 0.5}}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/pilates.png"
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        decoding="async"
      />
    </motion.figure>
  );
}
