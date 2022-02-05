import dynamic from 'next/dynamic'
import Head from 'next/head';
import { useRouter } from 'next/router';
import getBlogpostsSlugs from '@api/blogposts/getBlogpostsSlugs';
import getBlogpostBySlug from '@api/blogposts/getBlogpostBySlug';
import BaseLayout from '@layouts/BaseLayout';
const Blogpost = dynamic(() => import('@components/Blogpost/Blogpost'));

export async function getStaticPaths() {
  const blogpostSlugs = await getBlogpostsSlugs();

  const paths = blogpostSlugs.map((blog) => {
    return { params: { slug: blog.slug } }
  });

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context) {
  const blogpost = await getBlogpostBySlug(context.params.slug);

  return {
    props: { blogpost },
    revalidate: 60
  }
}

export default function BlogpostPage({ blogpost }) {
  const router = useRouter()

  if (router.isFallback) {
    return <BaseLayout content={(
      <div>Loading...</div>
    )} />
  }

  return (
    <>
      <Head>
        <title>{blogpost.title}</title>
        <meta name="description" content={blogpost.meta_description} />
        <meta name="keywords" content={blogpost.meta_keywords} />
        <meta property="og:title" content={blogpost.meta_title} />
        <meta property="og:description" content={blogpost.meta_description} />
        <meta property="og:site_name" content="dimulski.ml" />
      </Head>

      <BaseLayout
        content={
          <Blogpost post={blogpost} />
        }
      />
    </>
  )
}
