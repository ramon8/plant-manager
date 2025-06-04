export const lightTheme = {
  colors: {
    primary: '#2d5a27',
    primaryHover: '#218838',
    secondary: '#6c757d',
    secondaryHover: '#5a6268',
    success: '#28a745',
    background: '#ffffff',
    surface: '#f8f9fa',
    border: '#e9ecef',
    borderDashed: '#dee2e6',
    text: {
      primary: '#333333',
      secondary: '#666666',
      light: '#888888',
      white: '#ffffff',
    },
    overlay: 'rgba(255, 255, 255, 0.1)',
    overlayDark: 'rgba(255, 255, 255, 0.2)',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  fontSize: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 2px 4px rgba(0, 0, 0, 0.1)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#222222',
    surface: '#333333',
    border: '#444444',
    borderDashed: '#555555',
    text: {
      primary: '#ffffff',
      secondary: '#dddddd',
      light: '#bbbbbb',
      white: '#ffffff',
    },
    overlay: 'rgba(0, 0, 0, 0.2)',
    overlayDark: 'rgba(0, 0, 0, 0.3)',
    shadow: 'rgba(0, 0, 0, 0.3)',
  },
};

export type Theme = typeof lightTheme;
