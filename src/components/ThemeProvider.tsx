'use client';

import {createContext, useCallback, useContext, useLayoutEffect, useState} from 'react';
import {DEFAULT_THEME, THEME_STORAGE_KEY} from '@/constants/nav';

type Theme = 'dark' | 'light';

function readStoredTheme(): Theme {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  return localStorage.getItem(THEME_STORAGE_KEY) === 'light' ? 'light' : 'dark';
}

function applyTheme(next: Theme) {
  document.documentElement.setAttribute('data-theme', next);
}

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme | ((prev: Theme) => Theme)) => void;
  toggleTheme: () => void;
} | null>(null);

export function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setThemeState] = useState<Theme>(readStoredTheme);

  useLayoutEffect(() => {
    applyTheme(readStoredTheme());
  }, []);

  const setTheme = useCallback((t: Theme | ((prev: Theme) => Theme)) => {
    setThemeState(prev => {
      const next = typeof t === 'function' ? t(prev) : t;
      localStorage.setItem(THEME_STORAGE_KEY, next);
      applyTheme(next);
      return next;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
