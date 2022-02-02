import css from 'styled-jsx/css'

export default css`
  .blogpost-item {
    @apply mt-6;

    &__link {
      @apply block max-w-2xl px-5 md:px-9 py-6 mx-auto bg-white rounded-lg shadow-md cursor-pointer;
    }

    &__heading {
      @apply flex justify-between items-center;
    }

    &__date {
      @apply text-sm text-blue-700 font-light;
    }

    &__reading-time {
      @apply text-sm text-black font-light;

      &--opaque {
        @apply opacity-50;
      }
    }

    &__title {
      @apply mt-2 mb-1;

      &--opaque {
        @apply opacity-50;
      }
    }

    &__description {
      @apply mt-2 text-black;
    }
  }
`;
