<template>
  <div class="mt-6">
    <div style="" class="block max-w-2xl px-5 md:px-9 py-6 mx-auto bg-white rounded-lg shadow-md cursor-pointer">
      <a class="blog block">
        <div class="flex justify-between items-center">
          <span class="text-sm text-blue-700 font-light">Coming soon</span>
          <span class="text-sm text-black opacity-50 font-light">{{ post.read_time }} minutes</span>
        </div>
        <div class="mt-2 mb-1 opacity-50">
          <a href="#" class="text-2xl text-black font-bold hover:underline">
            {{ post.title }}
          </a>
          <p class="mt-2 text-black">
            {{ post.description }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogpostItem',
  props: ['post'],
  data() {
    return {
      formattedDate: this.formatDate(this.post.created_at)
    }
  },
  beforeMount() {
    this.formattedDate = this.formatDate(this.post.created_at, navigator.language)
  },
  methods: {
    formatDate(isoDate, locale = undefined) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(this.post.created_at).toLocaleDateString(locale, options);
    }
  }
};
</script>

<style>
</style>