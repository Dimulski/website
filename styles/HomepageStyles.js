import css from 'styled-jsx/css';

export default css.global`
  .home {
    --gap: 1.75rem;

    @apply px-4 mb-8 sm:px-6 lg:px-0;

    &__hero {
      display: flex;

      h1 {
        font-size: 32px;
      }
    }

    &__hero-heading {
      @apply max-w-xl mx-auto mt-12 mb-24 2xl:max-w-2xl sm:my-24 lg:my-32 2xl:my-48;
      font-family: var(--bogart);
    }

    &__hero-heading-line {
      &--leading, &--follow-up {
        @apply animate-fadeUp;
        opacity: 0;
        animation-fill-mode: forwards;
        animation-delay: .8s;
      }

      &--follow-up {
        @apply mb-6;
        animation-delay: 1s;
      }
    }

    &__projects {
      @apply pb-16 mx-auto sm:pb-24 lg:pb-40;
    }

    &__projects-title {
      @apply max-w-2xl mx-auto;
    }

    &__projects-title-heading {
      @apply animate-scaleFadeIn text-sm sm:text-base  mb-6 sm:mb-8 lg:mb-10; // font-edgy
      opacity: 0;
      animation-fill-mode: forwards;
      animation-delay: 1.4s;
      
    }

    &__projects-list {
      @apply flex flex-wrap max-w-2xl mx-auto  xl:max-w-3xl; // gap-7
      justify-content: space-between;
      row-gap: var(--gap)

    }

    &__projects-list-item {
      @apply animate-scaleFadeIn;
      opacity: 0;
      animation-fill-mode: forwards;
      animation-delay: 1.4s;
      width: 100%;

      @screen xs {
        width: calc(50% - var(--gap) / 2);
      }

      &:nth-child(2) {
        animation-delay: 1.5s;
        @screen md {
          margin-top: 4rem;
        }
      }
      
      &:nth-child(3) {
        animation-delay: 1.6s;
      }

      &:nth-child(4) {
        animation-delay: 1.7s;
      }

      &:nth-child(odd):not(:first-child) {
        @screen md {
          margin-top: -4rem;
        }
      }
    }

    &__project {
      /* @apply w-full relative rounded-xl overflow-hidden cursor-pointer active:scale-100; */
      @apply block rounded-xl overflow-hidden active:scale-100;


      /* & */
      /* &--weddyplace-magazine {
        background-color: lavander;
      } */
    }

    /* &__project-anchor {
      @apply absolute top-0 left-0 w-full h-full z-30 flex items-center justify-center;
    } */

    &__project-info {
      @apply absolute bottom-0 left-0 w-full p-6; // tilt-child
    }

    &__project-tools {
      @apply mb-1 font-medium opacity-75 xs:text-xs sm:text-sm xl:text-base text-neutral-800 font-semibold; 
    }

    &__project-title {
      @apply text-2xl font-medium leading-tight xs:text-lg sm:text-xl xl:text-2xl text-neutral-900 font-medium; // tilt-child text-altGray-800
    }

    &__project-image {
      /* position: relative; */
      /* width: 300px;
      height: 500px; */
    }

    &__project-image-wrapper {
      max-width: 100%;
      height: auto;
      display: block;
      vertical-align: middle;
      border-style: solid;
    }
  }
`;
