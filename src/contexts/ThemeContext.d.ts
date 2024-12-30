declare module './ThemeContext' {
  import { Context } from 'react';

  export interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
  }

  export const ThemeContext: Context<ThemeContextType>;
  export const ThemeProvider: React.FC;
}
