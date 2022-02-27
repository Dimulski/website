import css from 'styled-jsx/css'

export default css`
  .blogpost {
    @apply mb-10 px-3;

    &__article {
      @apply max-w-3xl mx-auto py-10 rounded-md px-5 lg:px-9 bg-white;
    }

    &__title {
      @apply font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black;
      font-family: var(--bogart);
    }

    &__info {
      @apply flex text-gray-700 flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8;
    }

    &__created-at {
      @apply text-sm;
    }

    &__read-time {
      @apply text-sm mt-2 md:mt-0;
    }

    &__content {
      @apply prose;
    }
  }
`;
