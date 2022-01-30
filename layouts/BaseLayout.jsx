import dynamic from 'next/dynamic';
import { ThemeProvider } from '@components/ThemeToggle/ThemeContext';
const ThemeToggle = dynamic(() => import('@components/ThemeToggle/ThemeToggle'));
const Header = dynamic(() => import('@components/Header/Header'));

import BaseLayoutStyles from '@styles/BaseLayoutStyles';
import TailwindStyles from '@styles/TailwindStyles';

const BaseLayout = (props) => {
  return (
    <>
      <ThemeProvider>
        <div className="default-site-layout">
          <div className="default-site-layout__content">
            <ThemeToggle />
            <Header />
            <main>{props.content}</main>
          </div>
        </div>
      </ThemeProvider>

      <style jsx>{BaseLayoutStyles}</style>
      <style jsx>{TailwindStyles}</style>
    </>
  );
};

export default BaseLayout;
