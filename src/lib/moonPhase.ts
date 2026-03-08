/**
 * Lunar phase (0 = new moon, 0.25 = first quarter, 0.5 = full, 0.75 = last quarter).
 * Simplified formula based on synodic month ~29.53 days.
 */
export function getMoonPhase(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let c: number, e: number, jd: number, b: number;

  if (month <= 2) {
    c = year - 1;
    e = month + 12;
  } else {
    c = year;
    e = month;
  }
  jd = Math.floor(365.25 * c) + Math.floor(30.6001 * (e + 1)) + day - 694039.09;
  jd /= 29.5305882;
  b = Math.floor(jd);
  jd -= b;
  return jd;
}

export type MoonPhaseId =
  | 'new'
  | 'waxing-crescent'
  | 'first-quarter'
  | 'waxing-gibbous'
  | 'full'
  | 'waning-gibbous'
  | 'last-quarter'
  | 'waning-crescent';

export function getMoonPhaseId(phase: number): MoonPhaseId {
  if (phase < 0.0625) return 'new';
  if (phase < 0.1875) return 'waxing-crescent';
  if (phase < 0.3125) return 'first-quarter';
  if (phase < 0.4375) return 'waxing-gibbous';
  if (phase < 0.5625) return 'full';
  if (phase < 0.6875) return 'waning-gibbous';
  if (phase < 0.8125) return 'last-quarter';
  if (phase < 0.9375) return 'waning-crescent';
  return 'new';
}
