// import React from 'react';
import dynamic from 'next/dynamic';

// const Header = dynamic(() => import('@components/Header/Header'));
// const Footer = dynamic(() => import('@components/Footer/Footer'));
import { ThemeProvider } from '@components/ThemeToggle/ThemeContext';
const ThemeToggle = dynamic(() => import('@components/ThemeToggle/ThemeToggle'));

const BaseLayout = (props) => {

  return (
    <>
      {/* <Header /> */}
      <ThemeProvider>
        <div className="default-layout">
          <div className="default-layout-content min-h-screen overflow-x-hidden">
            <ThemeToggle />
            <main>{props.content}</main>
          </div>
        </div>
      </ThemeProvider>

      {/* <Footer /> */}
    </>
  );
};

BaseLayout.getInitialProps = async (ctx) => {
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const json = await res.json()
  // return { stars: json.stargazers_count }
}

export default BaseLayout;
