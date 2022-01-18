// import React from 'react';
// import dynamic from 'next/dynamic';

// const Header = dynamic(() => import('@components/Header/Header'));
// const Footer = dynamic(() => import('@components/Footer/Footer'));

const BaseLayout = ({ content }) => {
  return (
    <>
      {/* <Header /> */}

      <main>{content}</main>

      {/* <Footer /> */}
    </>
  );
};

export default BaseLayout;
