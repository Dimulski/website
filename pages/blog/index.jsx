import dynamic from 'next/dynamic';
import Head from 'next/head';
import getBlogposts from '@api/blogposts/getBlogposts';
import BaseLayout from '@layouts/BaseLayout';
const Blog = dynamic(() => import('@components/Blog/Blog'));

export async function getStaticProps() {
  const blogposts = await getBlogposts();

  return {
    props: { blogposts },
    revalidate: 60
  }
};

export default function BlogPage({ blogposts }) {
  return (
    <>
      <Head>
        <title>Blog | Georgi Dimulski</title>
        <meta name="description" content="Georgi Dimulski's blog" />
      </Head>

      <BaseLayout
        content={
          <Blog blogposts={blogposts} />
        }
      />
    </>
  )
};
