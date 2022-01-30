import css from 'styled-jsx/css';

export default css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  div.default-layout-content {
    margin-left: calc(100vw - 100%);
  }
  body .default-layout {
    @apply bg-gray-100 text-black;
    transition-duration: 1s;
    transition-property: background-color;
  }
  body.dark .default-layout {
    @apply text-white;
    background-color: #16161d;
  }
`;
