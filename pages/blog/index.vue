<template>
    <div class="container mx-auto px-6 py-16">
      <div class="max-w-2xl pb-4 mx-auto">
        <h1 class="text-4xl">
          Posts
        </h1>
      </div>
      <BlogpostItem v-for="blogpost of blogsposts" :key="blogpost.slug" :post="blogpost"/>
    </div>
</template>

<script>
import BlogpostItem from '@/components/BlogpostItem';
import { mapGetters } from 'vuex';

export default {
  components: {
    BlogpostItem
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      blogsposts: 'getBlogposts',
    })
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
