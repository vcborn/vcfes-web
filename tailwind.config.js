/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Zen Kaku Gothic New', ...defaultTheme.fontFamily.sans],
        futura: ['futura-pt', ...defaultTheme.fontFamily.sans],
        train: ['Train One', ...defaultTheme.fontFamily.sans],
        barcode: ['"Libre Barcode 39"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-brand-colors')],
}
