// tailwind.config.ts
import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['var(--font-cinzel)'],
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        astro: {
          gold: '#b3916e',
          dark: '#2d2a26',
          bg: '#fdfbf7',
          border: '#e5e1da',
          muted: '#6b6560',
        },
      },
    },
  },
  plugins: [],
};
export default config;
