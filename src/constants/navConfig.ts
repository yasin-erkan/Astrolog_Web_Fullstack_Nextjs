/**
 * Nav: minimal luxury structure. Two-column mega (Popular | Special), short dropdowns.
 */
export type NavChildLink = { labelKey: string; pathSegment: string };
export type NavChildGroup = { groupKey: string; items: NavChildLink[] };
export type NavItemChild = NavChildLink | NavChildGroup;

export function isNavGroup(child: NavItemChild): child is NavChildGroup {
  return 'groupKey' in child && 'items' in child;
}

export type NavItem = {
  id: string;
  labelKey: string;
  path: string;
  children?: NavItemChild[];
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', labelKey: 'nav.home', path: '' },
  {
    id: 'consultations',
    labelKey: 'nav.consultations',
    path: 'consultations',
    children: [
      {
        groupKey: 'nav.consultations.popular',
        items: [
          { labelKey: 'nav.natalChart', pathSegment: 'birth-chart' },
          { labelKey: 'nav.synastry', pathSegment: 'synastry' },
          { labelKey: 'nav.horaryAstrology', pathSegment: 'horary' },
          { labelKey: 'nav.rectification', pathSegment: 'rectification' },
        ],
      },
      {
        groupKey: 'nav.consultations.special',
        items: [
          { labelKey: 'nav.karmic', pathSegment: 'karmic' },
          { labelKey: 'nav.spiritualGuidance', pathSegment: 'spiritual-guidance' },
          { labelKey: 'nav.electional', pathSegment: 'electional' },
          { labelKey: 'nav.predictiveAstrology', pathSegment: 'predictive' },
        ],
      },
    ],
  },
  {
    id: 'healing',
    labelKey: 'nav.healingWellness',
    path: 'healing',
    children: [
      {
        groupKey: 'nav.healing.sessions',
        items: [
          { labelKey: 'nav.holisticMovementPilates', pathSegment: 'holistic-movement' },
          { labelKey: 'nav.bodilyAwareness', pathSegment: 'bodily-awareness' },
          { labelKey: 'nav.thetaHealingTransformation', pathSegment: 'theta-healing' },
          { labelKey: 'nav.lifeGuidance', pathSegment: 'life-guidance' },
          { labelKey: 'nav.spiritOfTimeFrequencies', pathSegment: 'spirit-of-time' },
        ],
      },
      {
        groupKey: 'nav.healing.events',
        items: [
          { labelKey: 'nav.crystalGuidance', pathSegment: 'crystal-guidance' },
          { labelKey: 'nav.elementExercises', pathSegment: 'element-exercises' },
          { labelKey: 'nav.chakraBalancing', pathSegment: 'chakra-balancing' },
          { labelKey: 'nav.groupSessions', pathSegment: 'group-sessions' },
          { labelKey: 'nav.corporateWellness', pathSegment: 'corporate-wellness' },
        ],
      },
    ],
  },
  {
    id: 'academy',
    labelKey: 'nav.academy',
    path: 'academy',
    children: [
      { labelKey: 'nav.beginnerAstrology', pathSegment: 'beginner' },
      { labelKey: 'nav.workshopRecordings', pathSegment: 'recordings' },
      {
        groupKey: 'nav.academy.freeResources',
        items: [
          { labelKey: 'nav.blog', pathSegment: 'blog' },
          { labelKey: 'nav.skyCalendar', pathSegment: 'sky-calendar' },
        ],
      },
    ],
  },
  {
    id: 'rituals',
    labelKey: 'nav.dailyRoutines',
    path: 'daily-routines',
    children: [
      { labelKey: 'nav.planetSalutation', pathSegment: 'planet-salutation' },
      { labelKey: 'nav.bodilyAwareness', pathSegment: 'bodily-awareness' },
      { labelKey: 'nav.crystalGuidance', pathSegment: 'crystal-guidance' },
      { labelKey: 'nav.thetaIntentions', pathSegment: 'theta-intentions' },
    ],
  },
];

export const NAV_CTA = {
  labelKey: 'nav.ctaFreeChart',
  path: 'free-chart',
} as const;
