/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Zen Kaku Gothic New', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-brand-colors')],
}
