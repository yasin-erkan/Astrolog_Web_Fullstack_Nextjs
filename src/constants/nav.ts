export const NAV = {
  accent: '#b3916e',
  text: '#2d2a26',
  border: '#e5e1da',
  bg: '#fdfbf7',
} as const;

export const THEME_STORAGE_KEY = 'theme';
export const DEFAULT_THEME = 'dark' as const;

export const LOCALES = [
  {code: 'en', flag: '🇬🇧', label: 'English'},
  {code: 'tr', flag: '🇹🇷', label: 'Turkish'},
  {code: 'de', flag: '🇩🇪', label: 'Deutsch'},
  {code: 'fr', flag: '🇫🇷', label: 'Français'},
] as const;
