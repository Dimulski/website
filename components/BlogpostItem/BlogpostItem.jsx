import { useEffect, useState, useRef } from 'react';
import Link from 'next/link'
import useFormatDate from '@hooks/useFormatDate.js';
import BlogpostItemStyles from './BlogpostItemStyles';
import VanillaTilt from 'vanilla-tilt';

export default function BlogpostItem({ post }) {
  const formatDate = useFormatDate();
  const [formattedDate, setFormattedDate] = useState("");
  const anchor = useRef(null);

  useEffect(() => {
    const formattedDate = formatDate(post.created_at, navigator.language)
    setFormattedDate(formattedDate);
  }, [formatDate, post.created_at]);

  useEffect(() => {
    VanillaTilt.init(anchor.current, {
      max: 10,
      speed: 750,
      scale: 1.05
    });
  }, []);

  return (
    <>
      <div className="blogpost-item">
        <Link href={post.state ? `/blog/${post.slug}` : '#'}>
          <a className="blogpost-item__link" ref={anchor}>
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
            <div className={`blogpost-item__info${!post.state ? ' blogpost-item__info--opaque' : ''}`}>
              <p className="blogpost-item__title">
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
