<template>
    <div class="container mx-auto px-6 pb-12 pt-4 md:py-16">
      <div class="max-w-2xl pb-4 mx-auto">
        <h1 class="text-4xl">
          Posts
        </h1>
      </div>
      <!-- temporary comingSoon shortcut -->
      <BlogpostItem v-if="firstBlogpost" :post="firstBlogpost" />
      <BlogpostItem v-if="secondBlogpost" :post="secondBlogpost" :comingSoon="true"/>
      <!-- <BlogpostItem v-for="blogpost of b blogposts" :key="blogpost.slug" :post="blogpost"/> -->
    </div>
</template>

<script>
import BlogpostItem from '@/components/BlogpostItem';
import { mapGetters } from 'vuex';

export default {
  components: {
    BlogpostItem
  },
  head() {
    return {
      title: "Blog | Georgi Dimulski",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Georgi Dimulski's blog`
        }
      ]
    }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      blogposts: 'getBlogposts',
    }),
    firstBlogpost() {
      return this.blogposts ? this.blogposts[0] : null;
    },
    secondBlogpost() {
      return this.blogposts ? this.blogposts[1] : null;
    },
  },
  async asyncData(context) {
    const response = await fetch("https://dimulski.ml/api/blogposts/getBlogposts");
    const blogsposts = await response.json();
    context.store.dispatch("setBlogposts", blogsposts.data);
  }
};
</script>

<style lang="scss">
</style>
