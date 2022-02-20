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
        }
      },
      animation: {
        fadeUp: 'fadeUp .8s cubic-bezier(.165,.84,.44,1)',
      },
      transitionDelay: {
        '600': '600ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
