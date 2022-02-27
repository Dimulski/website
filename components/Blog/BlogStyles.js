import css from 'styled-jsx/css'

export default css`
  .blog {
    @apply container mx-auto px-6 pb-12 pt-4 md:py-16;

    &__page-title-container {
      @apply max-w-2xl pb-4 mx-auto;
    }

    &__page-title {
      @apply text-3xl;
      font-size: 32px;
      font-family: var(--bogart);
    }
  }
`;
