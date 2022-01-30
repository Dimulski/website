import dynamic from 'next/dynamic';
import { ThemeProvider } from '@components/ThemeToggle/ThemeContext';
const ThemeToggle = dynamic(() => import('@components/ThemeToggle/ThemeToggle'));

import BaseLayoutStyles from '@styles/BaseLayoutStyles';
import TailwindStyles from '@styles/TailwindStyles';

const BaseLayout = (props) => {
  return (
    <>
      <ThemeProvider>
        <div className="default-layout">
          <div className="default-layout-content min-h-screen overflow-x-hidden">
            <ThemeToggle />
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
