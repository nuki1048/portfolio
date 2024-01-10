import { useEffect, useState } from 'react';

export enum ThemeModes {
  DARK = 'dark',
  LIGHT = 'light',
}

export const useTheme = () => {
  // TODO: Change this to auto detect user setting theme
  const [mode, setMode] = useState<ThemeModes>(ThemeModes.DARK);
  const isModeDark = mode === ThemeModes.DARK;

  useEffect(() => {
    if (document) {
      document.documentElement.setAttribute('data-mode', mode);
    }
  }, [mode]);

  useEffect(() => {
    const darkThemeMq = window
      ? window.matchMedia('(prefers-color-scheme: dark)')
      : null;

    if (darkThemeMq) {
      setMode(ThemeModes.DARK);
    } else {
      setMode(ThemeModes.LIGHT);
    }
  }, []);

  return {
    mode,
    setMode,
    isModeDark,
  };
};
