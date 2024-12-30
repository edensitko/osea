import { DefaultTheme } from 'styled-components';

export interface ColorScale {
  main: string;
  light: string;
  dark: string;
}

export interface TextColors {
  primary: string;
  secondary: string;
  light: string;
  dark: string;
}

export interface Background {
  default: string;
  paper: string;
}

export interface Neutral {
  black: string;
  white: string;
  gray: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}

export interface Typography {
  fontWeights: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };
}

export interface Shadows {
  default: string;
  light: string;
  medium: string;
}

export interface CustomTheme {
  primary: ColorScale;
  secondary: ColorScale;
  error: ColorScale;
  text: TextColors;
  background: Background;
  neutral: Neutral;
  typography: Typography;
  shadows: Shadows;
}

export const lightTheme: CustomTheme = {
  primary: {
    main: '#d0ac8f',
    light: '#e0c4af',
    dark: '#b89070',
  },
  secondary: {
    main: '#d3d3d3',
    light: '#e8e8e8',
    dark: '#a0a0a0',
  },
  error: {
    main: '#dc3545',
    light: '#e4606d',
    dark: '#b02a37',
  },
  text: {
    primary: '#212529',
    secondary: '#6c757d',
    light: '#f8f9fa',
    dark: '#343a40',
  },
  background: {
    default: '#ffffff',
    paper: '#f8f9fa',
  },
  neutral: {
    black: '#000000',
    white: '#ffffff',
    gray: {
      100: '#f8f9fa',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    }
  },
  typography: {
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  shadows: {
    default: '0 2px 4px rgba(0,0,0,0.1)',
    light: '0 1px 2px rgba(0,0,0,0.05)',
    medium: '0 4px 6px rgba(0,0,0,0.1)',
  },
};

export const darkTheme: CustomTheme = {
  primary: {
    main: '#d0ac8f',
    light: '#e0c4af',
    dark: '#b89070',
  },
  secondary: {
    main: '#6c757d',
    light: '#868e96',
    dark: '#495057',
  },
  error: {
    main: '#dc3545',
    light: '#e4606d',
    dark: '#b02a37',
  },
  text: {
    primary: '#f8f9fa',
    secondary: '#adb5bd',
    light: '#f8f9fa',
    dark: '#343a40',
  },
  background: {
    default: '#212529',
    paper: '#343a40',
  },
  neutral: {
    black: '#000000',
    white: '#ffffff',
    gray: {
      100: '#212529',
      200: '#343a40',
      300: '#495057',
      400: '#6c757d',
      500: '#adb5bd',
      600: '#ced4da',
      700: '#dee2e6',
      800: '#e9ecef',
      900: '#f8f9fa',
    }
  },
  typography: {
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  shadows: {
    default: '0 2px 4px rgba(0,0,0,0.3)',
    light: '0 1px 2px rgba(0,0,0,0.2)',
    medium: '0 4px 6px rgba(0,0,0,0.3)',
  },
};
