<template>
  <div class="container max-w-3xl mx-auto px-6 py-16 bg-gray-50 rounded-md">
    <span class="prose" v-html="blogpost.content"></span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import hljs from 'highlight.js/lib/core';
import markdown from 'highlight.js/lib/languages/markdown';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import csharp from 'highlight.js/lib/languages/csharp';
import java from 'highlight.js/lib/languages/java';
import sql from 'highlight.js/lib/languages/sql';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import http from 'highlight.js/lib/languages/http';
import shell from 'highlight.js/lib/languages/shell';
import powershell from 'highlight.js/lib/languages/powershell';

export default {
  name: 'Slug',
  data() {
    return {
      post: null
    }
  },
  computed: {
    ...mapGetters({
      blogpost: 'getBlogpost',
    })
  },
  async asyncData(context) {
    const response = await fetch(`https://dimulski.ml/api/blogposts/getBlogpostBySlug?slug=${context.route.params.slug}`);
    const blogpost = await response.json();
    context.store.dispatch("setBlogpost", blogpost.data);
  },
  head() {
    return {
      title: this.blogpost.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogpost.meta_description
        },
        {
          name: 'keywords',
          content: this.blogpost.meta_keywords
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          property: 'og:site_name',
          content: 'dimulski.ml'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.blogpost.meta_title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.blogpost.meta_description
        },
        // {
        //   hid: 'og:image',
        //   name: 'og:image',
        //   property: 'og:image',
        //   content: this.url + this.blogpost.img[0].url
        // },
      ]
    }
  },
  beforeMount() {
    hljs.registerLanguage('markdown', markdown);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('scss', scss);
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('csharp', csharp);
    hljs.registerLanguage('java', java);
    hljs.registerLanguage('sql', sql);
    hljs.registerLanguage('dockerfile', dockerfile);
    hljs.registerLanguage('http', http);
    hljs.registerLanguage('shell', shell);
    hljs.registerLanguage('powershell', powershell);
    
    hljs.initHighlightingOnLoad();

  },
  mounted() {
    document.querySelectorAll('div.code').forEach(block => {
      hljs.highlightBlock(block);
    });
  },
  
  methods: {
    
  }
}
</script>

<style>
</style>
