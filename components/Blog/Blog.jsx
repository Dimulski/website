import Link from 'next/link'

import BlogStyles from './BlogStyles';

export default function Blog({ blogposts }) {
  console.log(blogposts);

  return (
    <>
      <div className="blog">
        <div className="blog__page-title-container">
          <h1 className="blog__page-title">Posts</h1>
        </div>
        {/* <BlogpostItem
          v-for="blogpost of blogposts"
          :key="blogpost.slug"
          :post="blogpost"
        /> */}
      </div>

      <style jsx>
        {BlogStyles}
      </style>
    </>
  );
}
