import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
  distance: number;
  setDistance: (d: number) => void;
  blur: number;
  setBlur: (b: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeMode;
  defaultDistance?: number;
  defaultBlur?: number;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
  defaultDistance = 6,
  defaultBlur = 14,
}) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nm-theme');
      if (saved === 'light' || saved === 'dark') return saved;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return defaultTheme;
  });

  const [distance, setDistance] = useState<number>(defaultDistance);
  const [blur, setBlur] = useState<number>(defaultBlur);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('nm-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--nm-shadow-distance', `${distance}px`);
    root.style.setProperty('--nm-shadow-blur', `${blur}px`);
  }, [distance, blur]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        distance,
        setDistance,
        blur,
        setBlur,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useNeumorphicTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useNeumorphicTheme must be used within a ThemeProvider');
  }
  return context;
};
