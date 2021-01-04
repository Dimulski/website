<template>
  <div>
    cool blogpost
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import HeaderSection from '../../components/HeaderSection'
export default {
  name: 'Slug',
  // components: { HeaderSection },
  data() {
    return {
      // categories: [],
      // url: process.env.strapi_url,
      // slug: null
    }
  },
  head() {
    // if (this.blog) {
    //   return {
    //     title: this.blog.meta_title,
    //     meta: [
    //       {
    //         hid: 'og:site_name',
    //         name: 'og:site_name',
    //         property: 'og:site_name',
    //         content: this.blog.meta_title
    //       },
    //       {
    //         hid: 'og:title',
    //         name: 'og:title',
    //         property: 'og:title',
    //         content: this.blog.meta_title
    //       },
    //       {
    //         hid: 'og:description',
    //         name: 'og:description',
    //         property: 'og:description',
    //         content: this.blog.meta_description
    //       },
    //       {
    //         hid: 'og:image',
    //         name: 'og:image',
    //         property: 'og:image',
    //         content: this.url + this.blog.img[0].url
    //       },
    //       {
    //         hid: 'description',
    //         name: 'description',
    //         content: this.blog.meta_description
    //       },
    //       {
    //         name: 'keywords',
    //         content: this.blog.meta_keywords
    //       }
    //     ]
    //   }
    // }
  },
  computed: {
    ...mapGetters({
      // areas: 'getAreas'
    }),
    blog() {
      // return this.$store.getters.getBlogPostBySlug(this.$route.params.slug)
    }
  },
  mounted() {

  },
  async asyncData(ctx) {
    // const slug = ctx.route.params.slug
    // await ctx.$axios
    //   .get(process.env.strapi_url + '/articles?slug=' + slug)
    //   .then((response) => {
    //     if (response.data.length > 0) {
    //       ctx.store.dispatch('addBlogPosts', response.data[0])
    //     } else {
    //       ctx.router.push('/blog')
    //     }
    //   })
  },
  methods: {
    
    
  }
}
</script>

<style>
</style>
