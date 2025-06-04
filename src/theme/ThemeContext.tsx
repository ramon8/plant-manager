import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import type { Theme } from './theme';

interface ThemeContextValue {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (name: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  themeName: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setThemeName(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (name: 'light' | 'dark') => {
    setThemeName(name);
  };

  const theme: Theme = themeName === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
