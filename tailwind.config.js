/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './index.html',
      './pages/**/*.html',
      './src/**/*.css',
      './assets/**/*.js'],
  theme: {
    extend: {
      colors: {
          'custom-black-pearl': '#14222F',
          'custom-iris-blue': '#00ADB5',
          'custom-quiet-abyss': '#200440',
          'custom-amarklor-violet': '#4c0999',
          'custom-lightblue': '#94e5ff',
      },
      keyframes: {
          'open-menu': {
              '0%' : {transform: 'scaleY(0)'},
              '80%' : {transform: 'scaleY(1.2)'},
              '100%' : {transform: 'scaleY(1)'},
          },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
};

