import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    console.log('Theme changed to:', isDarkMode ? 'Dark' : 'Light');
    console.log('Theme setting verified:', theme);
    setTheme(isDarkMode ? darkTheme : lightTheme);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      console.log('Toggling theme to:', newMode ? 'Dark' : 'Light');
      console.log('Previous isDarkMode state:', prev);
      console.log('New isDarkMode state:', newMode);
      console.log('Theme will be updated to:', newMode ? darkTheme : lightTheme);
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
