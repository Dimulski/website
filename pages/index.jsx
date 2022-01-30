import React, { useEffect } from 'react';
import Head from 'next/head';
import BaseLayout from '@layouts/BaseLayout';

import HomepageStyles from '@styles/HomepageStyles';
// import dynamic from 'next/dynamic';

const Home = () => {

  useEffect(()=>{

  },[]);

  return (
    <>
      <Head>
        <title>Website</title>
        <meta name="description" content="Website" />
      </Head>

      <BaseLayout
        content={
          <>
            <div className="flex justify-center">
              <div className="bg-gray-300 dark:bg-gray-900 dark:text-white">
                test div
              </div>
            </div>
            
            <style jsx>{HomepageStyles}</style>
          </>
        }
      />
    </>
  );
};

// Home.getInitialProps = async (ctx) => {
//   console.log(window.matchMedia("(prefers-color-scheme: dark)"));
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }


export async function getStaticProps(ctx) {
  // const loginData = await authService.login('test@email.com', 'password123');

  // return {
  //   props: {
  //     ...(await serverSideTranslations(locale, ['common'])),
  //     loginData: loginData
  //   },
  //   revalidate: 60
  // };
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home;
