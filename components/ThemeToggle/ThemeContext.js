import { createContext, useState, useEffect, useMemo } from 'react';
import { THEME_KEY } from '@utils/constants';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, rawSetTheme] = useState(undefined);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_KEY);
    rawSetTheme(savedTheme);
  }, []);

  const contextValue = useMemo(() => {
    function setTheme(newValue) {
      rawSetTheme(newValue);
      window.localStorage.setItem(THEME_KEY, newValue);
      window.document.body.classList.toggle('light');
      window.document.body.classList.toggle('dark');
    }

    return {
      theme,
      setTheme,
    };
  }, [theme, rawSetTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
