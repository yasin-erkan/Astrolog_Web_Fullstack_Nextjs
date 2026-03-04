import {THEME_STORAGE_KEY} from '@/constants/nav';

const themeScript = `(function(){var t=localStorage.getItem('${THEME_STORAGE_KEY}');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{__html: themeScript}} />;
}
