<template>
  <div class="default-layout">
    <div class="default-layout-content min-h-screen overflow-x-hidden">
      <ThemeToggle />
      <Header />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import ThemeToggle from '@/components/ThemeToggle';
import Header from '@/components/Header';

export default {
  components: {
    ThemeToggle,
    Header
  }
}
</script>

<style lang="scss">
div.default-layout-content {
  margin-left: calc(100vw - 100%);
}
body .default-layout {
  @apply bg-gray-100 text-black;
  transition-duration: 1s;
  transition-property: background-color;
}
body.dark-theme .default-layout  {
  @apply text-white;
  background-color: #16161d; 
}

@media (prefers-color-scheme: dark) {
  body .default-layout {
    @apply text-white;
    background-color: #16161d;
  }
  body.light-theme .default-layout {
    @apply bg-gray-100 text-black;
  }
}

.section {
  @apply px-6 pt-16 pb-12 md:py-12;
}

.hero {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-body {
  @apply px-6 pt-0 pb-8 md:py-24;
  flex-grow: 1;
  flex-shrink: 0;
}
</style>
