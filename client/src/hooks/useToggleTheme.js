// useThemeToggle.js
import { useState } from 'react';
import { lightTheme, darkTheme } from '../themes/themes.js';

const useToggleTheme = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  console.log(theme)
  return [theme, toggleTheme];
};

export default useToggleTheme;
