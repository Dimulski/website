import css from 'styled-jsx/css';

export default css.global`
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
      background-color: #16161d;
    }
  }
`;
