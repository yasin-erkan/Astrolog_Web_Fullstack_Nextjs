export const HEALING_SLUGS = [
  'holistic-movement', 'bodily-awareness', 'theta-healing', 'life-guidance', 'spirit-of-time',
  'crystal-guidance', 'element-exercises', 'moon-flows', 'chakra-balancing', 'crystal-therapy',
  'group-sessions', 'corporate-wellness',
] as const;

export type HealingSlug = (typeof HEALING_SLUGS)[number];

export const SLUG_TO_LOCALE_KEY: Record<HealingSlug, string> = {
  'holistic-movement': 'holisticMovement', 'bodily-awareness': 'bodilyAwareness', 'theta-healing': 'thetaHealing',
  'life-guidance': 'lifeGuidance', 'spirit-of-time': 'spiritOfTime', 'crystal-guidance': 'crystalGuidance',
  'element-exercises': 'elementExercises', 'moon-flows': 'moonFlows', 'chakra-balancing': 'chakraBalancing',
  'crystal-therapy': 'crystalTherapy', 'group-sessions': 'groupSessions', 'corporate-wellness': 'corporateWellness',
};

export const SLUG_TO_NAV_KEY: Record<HealingSlug, string> = {
  'holistic-movement': 'holisticMovementPilates', 'bodily-awareness': 'bodilyAwareness', 'theta-healing': 'thetaHealingTransformation',
  'life-guidance': 'lifeGuidance', 'spirit-of-time': 'spiritOfTimeFrequencies', 'crystal-guidance': 'crystalGuidance',
  'element-exercises': 'elementExercises', 'moon-flows': 'moonFlows', 'chakra-balancing': 'chakraBalancing',
  'crystal-therapy': 'crystalTherapy', 'group-sessions': 'groupSessions', 'corporate-wellness': 'corporateWellness',
};

export function isValidHealingSlug(slug: string): slug is HealingSlug {
  return HEALING_SLUGS.includes(slug as HealingSlug);
}
