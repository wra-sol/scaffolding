import { useEffect, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeContext } from './ThemeContext'
import { darkTheme, lightTheme } from './themes';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(createTheme(lightTheme));
  const toggleTheme = () => {
    const newTheme = theme.palette.mode === 'dark' ? createTheme(lightTheme) : createTheme(darkTheme);
    setTheme(newTheme);
  };
  useEffect(() => {toggleTheme()} ,[])
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
