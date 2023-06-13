/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light': "url('/public/bg-light.svg')",
        'dark': "url('/public/bg-dark.svg')"
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}