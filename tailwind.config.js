/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['"Inter", serif;'],
        itim: ['"Itim", cursive;']
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '25px',
        lg: '55px'
      },
    },
  },
  plugins: [],
}

