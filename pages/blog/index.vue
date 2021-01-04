<template>
    <div class="container mx-auto px-6 py-16">
      <div class="max-w-2xl pb-4 mx-auto">
        <h1 class="text-4xl">
          Posts
        </h1>
      </div>
      <BlogArticle v-for="item of [1]" :key="item"/>
    </div>
</template>

<script>
import BlogArticle from '@/components/BlogArticle';

export default {
  data() {
    return {
      posts: [
        {

        }
      ]
    }
  },
  components: {
    BlogArticle
  }
};
</script>

<style lang="scss">
</style>
