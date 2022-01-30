import css from 'styled-jsx/css';

export default css.global`
  .home {
    &__hero {
      @media screen and (min-width: calc(theme("screens.md"))) {
        height: calc(100vh - 128px);
      }

      align-items: stretch;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      span {
        display: block;
        font-size: 32px;
        font-weight: 300;

        strong {
          font-weight: bold;
        }
      }
    }

    &__hero-body {
      @apply px-6 my-auto;
    }

    &__hero-container {
      @apply container mx-auto max-w-6xl md:pb-12 2xl:pb-24;
    }

    &__hero-container-inner {
      @apply items-center md:flex;
    }

    &__hero-left {
      @apply w-full md:w-2/4;
    }

    &__hero-name {
      font-size: 48px !important;
      font-weight: 600;
    }

    &__hero-right {
      @apply w-full md:w-2/4 py-8 md:py-0;
    }

    &__hero-right-container {
      @apply flex justify-center;
    }

    & .cover {
      display: inline-block;
      height: 482px;
      width: 340px;
      margin: 15px;
      border-radius: 8px;
    }

    @media screen and (max-width: 700px) {
      .card-container {
        width : 100%;
        position: relative;
        transform: translate(0%, 0%);
        top: 0;
        left: 0;
      }
      .cover {
        display: block;
        height: 482px;
        width: 340px;
        margin: 15px auto;
      }
    }

    .atvImg {
      border-radius: 8px;
      transform-style: preserve-3d;
      -webkit-tap-highlight-color: rgba(#000,0);
    }

    .atvImg img {
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(14,21,47,0.25);
    }

    .atvImg-card-container {
      @apply block cursor-pointer;
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      transition: all 0.2s ease-out;
    }

    .atvImg-card-container.over .atvImg-shadow {
      box-shadow: 0 45px 100px rgba(14,21,47,0.4), 0 16px 40px rgba(14,21,47,0.4);
    }

    .atvImg-layers {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      overflow: hidden;
      transform-style: preserve-3d;
    }

    .atvImg-rendered-layer {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0%; 
      left: 0%;
      background-repeat: no-repeat;
      background-position: center;
      background-color: transparent;
      background-size: cover;
      transition: all 0.1s ease-out;
      overflow: hidden;
      border-radius: 8px;
    }

    .atvImg-shadow {
      position: absolute;
      top: 5%; 
      left: 5%;
      width: 90%;
      height: 90%;
      transition: all 0.2s ease-out;
      box-shadow: 0 8px 30px rgba(14,21,47,0.6);
    }

    .atvImg-shine {
      position: absolute;
      top: 0; 
      left: 0; 
      right: 0; 
      bottom: 0;
      border-radius: 8px;
      background: linear-gradient(135deg, rgba(255,255,255,.25) 0%,rgba(255,255,255,0) 60%);
    }
  }
`;
