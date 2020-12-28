<template>
  <button class="" @click="toggleTheme()">
    <div class="theme-toggle-wheel">
      <p class="theme-toggle-light"></p>
      <p class="theme-toggle-dark"></p>
    </div>
  </button>
</template>

<script>
export default {
  created() {
    return;
    // console.log(window)
    // const prefersDarkScheme = !!window ? window.matchMedia("(prefers-color-scheme: dark)") : false;
    // console.log(this)
    const currentTheme = localStorage.getItem("theme");
    document.cookie = "theme=" + theme;
    if (currentTheme == "dark") {
      document.body.classList.toggle("dark-theme");
    } else if (currentTheme == "light") {
      document.body.classList.toggle("light-theme");
    }
  },
  methods: {
    toggleTheme() {
      return;
      // const prefersDarkScheme = window?.matchMedia("(prefers-color-scheme: dark)");
      if (prefersDarkScheme.matches) {
        // ...then toggle the light mode class
        document.body.classList.toggle("light-theme");
        // ...but use .dark-mode if the .light-mode class is already on the body,
        var theme = document.body.classList.contains("light-theme") ? "light" : "dark";
      } else {
        // Otherwise, let's do the same thing, but for .dark-mode
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
      }
      // Finally, let's save the current preference to localStorage to keep using it
      localStorage.setItem("theme", theme);
    }
  }
}
</script>

<style lang="scss">
button {
  background-color: rgba(255,255,0,.5);

  // -moz-appearance: none;
  // -webkit-appearance: none;
  // background: none;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  display: block;
  height: 12em;
  // left: -6em;
  outline: none;
  overflow: hidden;
  position: fixed;
  // top: -6em;
  width: 12em;
  z-index: 10;
}
.theme-toggle-wheel {
  transform: rotate(135deg);
  // transform: rotate(-45deg);
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