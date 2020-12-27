<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container mx-auto max-w-6xl">
        <div class="items-center md:flex">
          <div class="w-full md:w-2/4 ">
            <span><strong>Hi there!</strong></span>
            <span>My name is</span>
            <span class="name"><strong>Georgi Dimulski,</strong></span>
            <span>I’m a junior web developer,</span>
            <span>live in <strong>Plovdiv.</strong></span>
            <span>Check out my blog and résumé. 😎</span>
          </div>
          <div class="w-full md:w-2/4">
            Resume
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
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

<style lang="scss">
.hero span {
  display: block;
  font-size: 32px;
  font-weight: 300;

  strong {
    font-weight: bold;
  }

  &.name {
    font-size: 48px;
    font-weight: 600;
  }
}

</style>
