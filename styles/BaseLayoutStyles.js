import css from 'styled-jsx/css';

export default css.global`
  @font-face {
    font-family: Biotif;
    src: url('/fonts/Biotif-Light.ttf') format('truetype');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: Bogart;
    src: url('/fonts/Bogart-Medium.ttf') format('truetype');
    font-style: medium;
    font-weight: 500;
    font-display: swap;
  }
  
  body, html {
    font-family: Biotif,Helvetica Neue,Helvetica,Arial,sans-serif;
  }

  h1, h2, h3, h4, h5 {
    font-family: Bogart,Recoleta,Helvetica Neue,Helvetica,Arial,sans-serif;
  }

  body {
    & .default-site-layout {
      @apply bg-gray-100 text-black;
      transition-duration: 1s;
      transition-property: background-color;

      &__content {
        @apply min-h-screen overflow-x-hidden;
        margin-left: calc(100vw - 100%);
      }
    }
    
    &.dark .default-site-layout {
      @apply text-white;
      background-color: #1d1e21;
    }
  }
`;
