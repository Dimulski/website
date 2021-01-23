<template>
  <div class="mt-6">
    <NuxtLink
      :to="post.state ? `/blog/${post.slug}` : '#'"
      class="block max-w-2xl px-5 md:px-9 py-6 mx-auto bg-white rounded-lg shadow-md cursor-pointer"
    >
      <div class="flex justify-between items-center">
        <span class="text-sm text-blue-700 font-light">
          {{ post.state ? formattedDate : "Coming soon" }}
        </span>
        <span
          :class="{ 'opacity-50': !post.state }"
          class="text-sm text-black font-light"
        >
          {{ post.read_time }} min read
        </span>
      </div>
      <div :class="{ 'opacity-50': !post.state }" class="mt-2 mb-1">
        <p class="text-2xl text-black font-bold hover:underline">
          {{ post.title }}
        </p>
        <p class="mt-2 text-black">
          {{ post.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import { dateFormatMixin } from "../mixins/dateFormatMixin";

export default {
  name: "BlogpostItem",
  mixins: [dateFormatMixin],
  props: ["post"],
  data() {
    return {
      formattedDate: this.formatDate(this.post.created_at),
    };
  },
  beforeMount() {
    this.formattedDate = this.formatDate(
      this.post.created_at,
      navigator.language
    );
  },
};
</script>

<style>
</style>