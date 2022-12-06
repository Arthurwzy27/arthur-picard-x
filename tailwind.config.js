/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,js}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '380px',
      },
    },
  },
  plugins: [],
}
