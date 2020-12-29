<template>
  <div class="default-layout min-h-screen">
    <ThemeToggle />
    <Header />
    <Nuxt />
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
