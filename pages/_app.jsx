// import React from 'react';
// import Head from 'next/head';
import '@styles/global.scss';
import '@styles/tailwind.css';

const Website = ({ Component, pageProps }) => {
  return (
    <>
      {/* headers for whole site */}
      {/* <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
      </Head> */}

      <Component {...pageProps} />
    </>
  );
};

export default Website;
