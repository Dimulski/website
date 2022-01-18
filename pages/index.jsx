import React, { useEffect } from 'react';
import Head from 'next/head';
import BaseLayout from '@layouts/BaseLayout';
import HomepageStyles from '@styles/HomepageStyles';
// import dynamic from 'next/dynamic';

const Home = () => {

  return (
    <>
      <Head>
        <title>Website</title>
        <meta name="description" content="Website" />
      </Head>

      <BaseLayout
        content={
          <>
            <div className="homepage relative">
              cool homepage
            </div>

            <style jsx>{HomepageStyles}</style>
          </>
        }
      />
    </>
  );
};

// export async function getStaticProps({ locale }) {
//   const loginData = await authService.login('test@email.com', 'password123');

//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//       loginData: loginData
//     },
//     revalidate: 60
//   };
// }

export default Home;
