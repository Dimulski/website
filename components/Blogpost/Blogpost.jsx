import { useEffect, useState } from 'react';
import useFormatDate from '@hooks/useFormatDate.js';
import hljs from "highlight.js/lib/core";
import markdown from "highlight.js/lib/languages/markdown";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import json from "highlight.js/lib/languages/json";
import csharp from "highlight.js/lib/languages/csharp";
import java from "highlight.js/lib/languages/java";
import sql from "highlight.js/lib/languages/sql";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import http from "highlight.js/lib/languages/http";
import shell from "highlight.js/lib/languages/shell";
import powershell from "highlight.js/lib/languages/powershell";

import BlogpostStyles from './BlogpostStyles';

export default function Blogpost({ post }) {
  const formatDate = useFormatDate();
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const formattedDate = formatDate(post.created_at, navigator.language)
    setFormattedDate(formattedDate);

    hljs.registerLanguage("markdown", markdown);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("scss", scss);
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("typescript", typescript);
    hljs.registerLanguage("json", json);
    hljs.registerLanguage("csharp", csharp);
    hljs.registerLanguage("java", java);
    hljs.registerLanguage("sql", sql);
    hljs.registerLanguage("dockerfile", dockerfile);
    hljs.registerLanguage("http", http);
    hljs.registerLanguage("shell", shell);
    hljs.registerLanguage("powershell", powershell);
    hljs.initHighlighting.called = false;
    hljs.highlightAll()
  }, [formatDate, post.created_at]);

  return (
    <>
      <main className="blogpost">
        <article className="blogpost__article">
          <h1 className="blogpost__title">
            {post.title}
          </h1>
          <div className="blogpost__info">
            <p className="blogpost__created-at">
              <time dateTime={post.created_at}>
                {formattedDate}
              </time>
            </p>
            <p className="blogpost__read-time">
              {post.read_time} min read
            </p>
          </div>
          <span className="blogpost__content prose" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>

      <style jsx>
        {BlogpostStyles}
      </style>
    </>
  );
}
