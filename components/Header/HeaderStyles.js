import css from 'styled-jsx/css'

export default css`
  .header {
    @apply px-6 pt-16 pb-12 md:py-10;
    
    &__container {
      @apply container mx-auto max-w-5xl;
    }

    &__nav {
      @apply flex justify-end;
    }

    &__nav-link {
      @apply px-3 py-1 mx-3 text-lg;
      font-size: 17px;
    }

    &__github-link {
      @apply flex items-center px-3 py-1 mx-3;
    }
  }
`;
