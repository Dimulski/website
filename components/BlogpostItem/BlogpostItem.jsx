import Link from 'next/link'
import useFormatDate from '@hooks/useFormatDate.js';

import BlogpostItemStyles from './BlogpostItemStyles';
import { useEffect, useState } from 'react';

export default function Blog({ post }) {
  const formatDate = useFormatDate();
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const formattedDate = formatDate(post.created_at, navigator.language)
    setFormattedDate(formattedDate);
  }, []);

  return (
    <>
      <div className="blogpost-item">
        <Link href={post.state ? `/blog/${post.slug}` : '#'}>
          <a className="blogpost-item__link">
            <div className="blogpost-item__heading">
              <span className="blogpost-item__date">
                {post.state ? formattedDate : "Coming soon"}
              </span>
              <span
                className={`blogpost-item__reading-time${!post.state ? ' blogpost-item__reading-time--opaque' : ''}`}
              >
                {post.read_time} min read
              </span>
            </div>
            <div className={`blogpost-item__title${!post.state ? ' blogpost-item__title--opaque' : ''}`}>
              <p className="text-2xl text-black font-bold hover:underline">
                {post.title}
              </p>
              <p className="blogpost-item__description">
                {post.description}
              </p>
            </div>
          </a>
        </Link>
      </div>

      <style jsx>
        {BlogpostItemStyles}
      </style>
    </>
  );
}
