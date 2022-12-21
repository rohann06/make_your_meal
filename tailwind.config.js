/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'normal_text':'Varela Round',
        'headings': 'Asap',
        'nav_fonts':'Kaushan Script',
      }
    },
  },
  plugins: [],
}