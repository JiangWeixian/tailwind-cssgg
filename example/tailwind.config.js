const { cssgg } = require('tailwind-cssgg')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [cssgg],
}
