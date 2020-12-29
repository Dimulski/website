<template>
  <button class="theme-toggle" @click="toggleTheme()">
    <div class="theme-toggle-wheel">
      <p class="theme-toggle-light"></p>
      <p class="theme-toggle-dark"></p>
    </div>
  </button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      theme: 'getTheme',
    })
  },
  beforeMount() {
    if (this.theme) {
      document.body.classList.toggle(`${this.theme}-theme`);
    } else {
      const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      this.$store.dispatch('setTheme', preferredTheme)
      document.body.classList.toggle(`${this.theme}-theme`);
      document.cookie = `theme=${this.theme}`
    }
  },
  methods: {
    toggleTheme() {
      if (this.theme == 'light') {
        document.body.classList.toggle(`light-theme`);
        document.body.classList.toggle(`dark-theme`);
        this.$store.dispatch('setTheme', 'dark');
        document.cookie = 'theme=dark';
      } else if (this.theme == 'dark') {
        document.body.classList.toggle(`dark-theme`);
        document.body.classList.toggle(`light-theme`);
        this.$store.dispatch('setTheme', 'light');
        document.cookie = 'theme=light';
      }
    }
  }
}
</script>

<style lang="scss">
body {
  button.theme-toggle {
    background-color: rgba(255,255,0,.5);
    font-size: 13px;
  }
  .theme-toggle-wheel {
    transform: rotate(135deg);
  }
}
body.dark-theme {
  button.theme-toggle {
    background-color: rgba(0,0,0,.5);
  }
  .theme-toggle-wheel {
    transform: rotate(-45deg);
  }
}

button.theme-toggle {
  -moz-appearance: none;
  -webkit-appearance: none;
  background: none;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  display: block;
  height: 12em;
  left: -6em;
  outline: none;
  overflow: hidden;
  position: fixed;
  top: -6em;
  width: 12em;
  z-index: 10;
}

.theme-toggle-wheel {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 11em;
  justify-content: space-between;
  left: calc(50% - 2em);
  position: absolute;
  text-align: center;
  top: .5em;
  transform: rotate(-45deg);
  transition-duration: .5s;
  transition-property: transform;
  width: 4em;
}

.theme-toggle-light {
  background-image: url('/sun-moon.png');
  background-repeat: no-repeat;
  background-size: 4em;
  height: 4em;
  transform: rotate(45deg);
  width: 4em;
}

.theme-toggle-dark {
  background-image: url('/sun-moon.png');
  background-repeat: no-repeat;
  background-size: 4em;
  height: 4em;
  transform: rotate(45deg);
  width: 4em;
  background-position: bottom;
}

.theme-toggle-light,
.theme-toggle-dark {
  align-items: center;
  display: flex;
  justify-content: center;
}

.theme-toggle-light,
.theme-toggle-dark,
.theme-toggle-wheel {
  transform-origin: center;
}
</style>>