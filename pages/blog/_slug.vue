<template>
  <main class="mb-10 px-3">
    <article class="container max-w-3xl mx-auto py-10 rounded-md px-5 lg:px-9 bg-white">
      <h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        {{ blogpost.title }}
      </h1>
      <div class="flex text-gray-700 flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
        <p class="text-sm dark:text-gray-300">
          <time :datetime="blogpost.created_at">{{ formattedDate }}</time>
        </p>
        <p class="text-sm min-w-32 mt-2 md:mt-0">
          {{ blogpost.read_time }} min read
        </p>
      </div>
      <span class="prose" v-html="blogpost.content" />
    </article>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
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
import { dateFormatMixin } from "../../mixins/dateFormatMixin";

export default {
  mixins: [dateFormatMixin],
  computed: {
    ...mapGetters({
      blogpost: "getBlogpost",
    }),
    formattedDate() {
      return this.formatDate(
        this.blogpost.created_at,
        typeof navigator !== "undefined" ? navigator.language : undefined
      );
    },
  },
  async asyncData(context) {
    const response = await fetch(
      `https://dimulski.ml/api/blogposts/getBlogpostBySlug?slug=${context.route.params.slug}`
    );
    const blogpost = await response.json();
    context.store.dispatch("setBlogpost", blogpost.data);
  },
  head() {
    return {
      title: this.blogpost.meta_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.blogpost.meta_description,
        },
        {
          name: "keywords",
          content: this.blogpost.meta_keywords,
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          property: "og:site_name",
          content: "dimulski.ml",
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: this.blogpost.meta_title,
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content: this.blogpost.meta_description,
        },
        // {
        //   hid: 'og:image',
        //   name: 'og:image',
        //   property: 'og:image',
        //   content: this.url + this.blogpost.img[0].url
        // },
      ],
    };
  },
  beforeMount() {
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
  },
  mounted() {
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
  },
};
</script>

<style>
</style>
