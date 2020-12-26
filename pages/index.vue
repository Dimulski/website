<template>
  <section>
    <div class="hero-body">
      <div class="container">
        <!-- columns -->
        <div>
          <!-- column -->
          <div>
            <span class="block">Hi there!</span>
            <span class="block">My name is</span>
            <span class="block">Georgi Dimulski,</span>
            <span class="block">I’m a junior web developer, live in Plovdiv.</span>
            <span class="block">Checkout my blog and Résumé 😎</span>
          </div>
          <div>
            Resume
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head() {
    return {
      title: "Georgi Dimulski | Web Developer",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Georgi Dimulski's personal website`
        }
      ]
    }
  }
}
</script>

<style>
</style>
