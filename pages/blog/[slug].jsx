import dynamic from 'next/dynamic'
import getBlogpostsSlugs from '@api/blogposts/getBlogpostsSlugs';
import getBlogposts from '@api/blogposts/getBlogposts';
import getBlogpostBySlug from '@api/blogposts/getBlogpostBySlug';
import BaseLayout from '@layouts/BaseLayout';
const Blogpost = dynamic(() => import('@components/Blogpost/Blogpost'));

import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const blogpostSlugs = await getBlogposts();
  console.log(blogpostSlugs);
  const paths = blogpostSlugs.map((blog) => {
    return { params: { slug: blog.slug } }
  });
  console.log(paths);

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps(context) {
  console.log('inherit');
  console.log(context);
  const blogpost = await getBlogpostBySlug(context.params.slug)

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
    <BaseLayout
      content={
        <Blogpost post={blogpost} />
      }
    />
  )
}
