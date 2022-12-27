/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#0C0E1F'
      }
    },
    fontFamily: {
      'sans': ['Avenir', 'sans-serif']
    },
  },
  plugins: [],
}
