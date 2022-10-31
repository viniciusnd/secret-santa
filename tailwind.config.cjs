/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'caveat': ['Caveat', 'cursive'],
      'poorStory': ['Poor Story', 'cursive'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['28px', '36px'],
      '3xl': ['32px', '40px'],
      '4xl': ['36px', '44px'],
      '5xl': ['40px', '48px'],
      '6xl': ['44px', '52px'],
      '7xl': ['48px', '56px'],
      '8xl': ['52px', '60px'],
      '9xl': ['56px', '64px'],
      '10xl': ['60px', '68px'],

    extend: {
      colors:{
        black: '#300219',
        white: '#F4F6FF',
        red: {
          300: '#BB2E57',
          500: '#AF053F',
          700: '#840032',
        },
        blue: {
          300: '#00b4d8',
          500: '#0077b6',
          700: '#03045e',
        },
        gray: {
          300: '#bcb8b1',
          500: '#8a817c',
          700: '#463f3a',
        },
    },
  },
  plugins: [],
}}}