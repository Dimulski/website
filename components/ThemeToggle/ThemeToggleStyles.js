import css from 'styled-jsx/css'

export default css.global`
body {
  button.theme-toggle {
    background-color: rgba(255, 255, 0, 0.5);
  }
  &.dark {
    button.theme-toggle {
      background-color: rgba(0, 0, 0, 0.5);
    }
    .theme-toggle-wheel {
      transform: rotate(-45deg);
      @media screen and (max-width: theme("screens.md")) {
        transform: rotate(0deg);
      }
    }
  }
}

// TODO: fix garbage css
button.theme-toggle {
  font-size: 13px;
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
  @media screen and (max-width: theme('screens.md')) {
    font-size: 0.625rem;
    position: absolute;
    left: calc(50% - 6em);
    top: -7em;
  }
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
  transform-origin: center;
  transform: rotate(135deg);
  @media screen and (max-width: theme('screens.md')) {
    transform: rotate(180deg);
  }
}

.theme-toggle-light,
.theme-toggle-dark {
  background-image: url('/sun-moon.png');
  background-repeat: no-repeat;
  background-size: 4em;
  height: 4em;
  transform: rotate(45deg);
  width: 4em;

  align-items: center;
  display: flex;
  justify-content: center;
  transform-origin: center;

  @media screen and (max-width: theme('screens.md')) {
    transform: none;
  }
}

.theme-toggle-dark {
  background-position: bottom;
}
`
