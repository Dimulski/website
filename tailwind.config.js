const defaultTheme = require('tailwindcss/defaultTheme');

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = ['Bogart'];

module.exports = {
  mode: 'jit', // TODO: isn't this jit by default
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*'
  ],
  darkMode: 'class',
  theme: {
    // fontFamily: fontFamily,
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        fadeUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          }
        },
        scaleFadeIn: {
          '0%': {
            transform: 'translate3d(0, 50px, 0) scale3d(.9, .9, .9)',
            opacity: 0
          },
          '100%': {
            transform: 'translateZ(0) scaleX(1)',
            opacity: 1
          }
        }
      },
      animation: {
        fadeUp: 'fadeUp .8s cubic-bezier(.165,.84,.44,1)',
        scaleFadeIn: 'scaleFadeIn 1s cubic-bezier(.165, .84, .44, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
