import dynamic from 'next/dynamic';
const BlogpostItem = dynamic(() => import('@components/BlogpostItem/BlogpostItem'));

import BlogStyles from './BlogStyles';

export default function Blog({ blogposts }) {

  return (
    <>
      <div className="blog">
        <div className="blog__page-title-container">
          <h1 className="blog__page-title">Posts</h1>
        </div>
        {blogposts.map((blogpost, index) => (
          <BlogpostItem
            post={blogpost}
            key={index}
          />
        ))}
      </div>

      <style jsx>
        {BlogStyles}
      </style>
    </>
  );
}
