<template>
  <div class="min-h-screen bg-gray-100">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header
  }
}
</script>

<style>
.section {
  @apply px-6 py-12;
}

.hero {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-body {
  @apply px-6 py-12 md:py-24;
  flex-grow: 1;
  flex-shrink: 0;
}

</style>
