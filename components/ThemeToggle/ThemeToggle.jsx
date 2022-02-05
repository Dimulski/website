import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

import ThemeToggleStyles from './ThemeToggleStyles';

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  }

  if (!theme) {
    return null;
  }

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme}>
        <div className="theme-toggle-wheel">
          <p className="theme-toggle-light"></p>
          <p className="theme-toggle-dark"></p>
        </div>
      </button>

      <style jsx>
        {ThemeToggleStyles}
      </style>
    </>
  );
}
