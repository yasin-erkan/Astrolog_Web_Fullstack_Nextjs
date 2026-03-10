'use client';

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { getMoonPhase, getMoonPhaseId, type MoonPhaseId } from '@/lib/moonPhase';

const GOLD = '#b3916e';
const GOLD_LIGHT = '#c9a87d';
const GOLD_SOFT = 'rgba(179, 145, 110, 0.5)';

const phaseSvgs: Record<MoonPhaseId, ReactNode> = {
  new: (
    <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
  ),
  'waxing-crescent': (
    <g fill="currentColor" stroke="currentColor" strokeWidth="0.5">
      <circle cx="50" cy="50" r="22" fill="currentColor" opacity="0.15" />
      <path d="M50 28 A22 22 0 0 1 50 72 A22 22 0 1 1 50 28" fill="currentColor" opacity="0.9" />
    </g>
  ),
  'first-quarter': (
    <g fill="currentColor">
      <circle cx="50" cy="50" r="22" />
      <path d="M50 28 A22 22 0 0 1 50 72 L50 28 Z" style={{ fill: 'var(--theme-bg)' }} />
    </g>
  ),
  'waxing-gibbous': (
    <g fill="currentColor">
      <circle cx="50" cy="50" r="22" />
      <ellipse cx="38" cy="50" rx="12" ry="22" style={{ fill: 'var(--theme-bg)' }} />
    </g>
  ),
  full: <circle cx="50" cy="50" r="22" fill="currentColor" />,
  'waning-gibbous': (
    <g fill="currentColor">
      <circle cx="50" cy="50" r="22" />
      <ellipse cx="62" cy="50" rx="12" ry="22" style={{ fill: 'var(--theme-bg)' }} />
    </g>
  ),
  'last-quarter': (
    <g fill="currentColor">
      <circle cx="50" cy="50" r="22" />
      <path d="M50 28 L50 72 A22 22 0 0 1 50 28 Z" style={{ fill: 'var(--theme-bg)' }} />
    </g>
  ),
  'waning-crescent': (
    <g fill="currentColor" stroke="currentColor" strokeWidth="0.5">
      <circle cx="50" cy="50" r="22" fill="currentColor" opacity="0.15" />
      <path d="M50 28 A22 22 0 0 0 50 72 A22 22 0 1 0 50 28" fill="currentColor" opacity="0.9" />
    </g>
  ),
};

const heroDefs = (
  <defs>
    <radialGradient id="heroMoonGrad" cx="35%" cy="35%" r="70%">
      <stop offset="0%" stopColor={GOLD_LIGHT} />
      <stop offset="70%" stopColor={GOLD} />
      <stop offset="100%" stopColor={GOLD_SOFT} />
    </radialGradient>
    <filter id="heroMoonSoft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

const phaseSvgsHero: Record<MoonPhaseId, ReactNode> = {
  new: (
    <circle cx="50" cy="50" r="22" fill="none" stroke={GOLD} strokeWidth="2" opacity="0.5" />
  ),
  'waxing-crescent': (
    <g>
      <circle cx="50" cy="50" r="22" fill="var(--theme-bg)" />
      <path d="M50 28 A22 22 0 0 1 50 72 A22 22 0 1 1 50 28" fill="url(#heroMoonGrad)" />
    </g>
  ),
  'first-quarter': (
    <g>
      <circle cx="50" cy="50" r="22" fill="url(#heroMoonGrad)" />
      <path d="M50 28 A22 22 0 0 1 50 72 L50 28 Z" fill="var(--theme-bg)" />
    </g>
  ),
  'waxing-gibbous': (
    <g>
      <circle cx="50" cy="50" r="22" fill="url(#heroMoonGrad)" />
      <ellipse cx="38" cy="50" rx="12" ry="22" fill="var(--theme-bg)" />
    </g>
  ),
  full: <circle cx="50" cy="50" r="22" fill="url(#heroMoonGrad)" filter="url(#heroMoonSoft)" />,
  'waning-gibbous': (
    <g>
      <circle cx="50" cy="50" r="22" fill="url(#heroMoonGrad)" />
      <ellipse cx="62" cy="50" rx="12" ry="22" fill="var(--theme-bg)" />
    </g>
  ),
  'last-quarter': (
    <g>
      <circle cx="50" cy="50" r="22" fill="url(#heroMoonGrad)" />
      <path d="M50 28 L50 72 A22 22 0 0 1 50 28 Z" fill="var(--theme-bg)" />
    </g>
  ),
  'waning-crescent': (
    <g>
      <circle cx="50" cy="50" r="22" fill="var(--theme-bg)" />
      <path d="M50 28 A22 22 0 0 0 50 72 A22 22 0 1 0 50 28" fill="url(#heroMoonGrad)" />
    </g>
  ),
};

export default function MoonPhase({
  date,
  className = '',
  variant,
}: {
  date?: Date;
  className?: string;
  variant?: 'default' | 'hero';
}) {
  const [clientDate, setClientDate] = useState<Date | null>(variant === 'hero' ? null : (date ?? new Date()));
  useEffect(() => {
    if (variant === 'hero') setClientDate(new Date());
  }, [variant]);
  const isHero = variant === 'hero';
  const effectiveDate = isHero ? (clientDate ?? date ?? new Date()) : (date ?? new Date());
  const phase = getMoonPhase(effectiveDate);
  const phaseId = getMoonPhaseId(phase);
  const content = isHero ? phaseSvgsHero[phaseId] : phaseSvgs[phaseId];

  return (
    <span
      className={`inline-block w-full h-full text-astro-gold ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 100 100" className="w-full h-full block" aria-hidden>
        {isHero && heroDefs}
        {content}
      </svg>
    </span>
  );
}
