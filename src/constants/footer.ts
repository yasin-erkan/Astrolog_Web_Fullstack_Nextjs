export type SocialLink = {
  id: string;
  label: string;
  href: string;
  ariaLabel: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    ariaLabel: 'YouTube',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    ariaLabel: 'LinkedIn',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    ariaLabel: 'Instagram',
  },
  {
    id: 'twitter',
    label: 'X (Twitter)',
    href: 'https://twitter.com/',
    ariaLabel: 'X (Twitter)',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    ariaLabel: 'Facebook',
  },
];
