const themeBase = {
    typography: {
      htmlFontSize: 16,
      fontSize: 16,
      h1: {
        fontSize: '64px', 
        lineHeight: '72px', 
        fontWeight: 500,
        marginBottom: '24px',
      },
      h2: {
        fontSize: '48px',
        lineHeight: '56px', 
        fontWeight: 500,
        marginBottom: '16px',
      },
      h3: {
        fontSize: '32px',
        lineHeight: '40px', 
        fontWeight: 500,
        marginBottom: '16px', 
      },
      h4: {
        fontSize: '24px', 
        lineHeight: '32px', 
        fontWeight: 500,
        marginBottom: '8px',
      },
      h5: {
        fontSize: '20px',
        lineHeight: '28px', 
        fontWeight: 500,
        marginBottom: '8px',
      },
      h6: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 500,
        marginBottom: '8px',
      },
      body1: {
        fontSize: '16px', 
        lineHeight: '24px', 
        marginBottom: '8px',
      },
      body2: {
        fontSize: '14px', 
        lineHeight: '24px', 
        marginBottom: '8px',
      },
    },  
}

export const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
  },
  ...themeBase,
};

export const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
  },
  ...themeBase
  // ... other customization
};
