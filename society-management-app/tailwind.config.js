/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        sidebar: 'red', // Change the sidebar color
      },
      width: {
        sidebar: '20px', // Change the sidebar width
      },
    },
  },
  plugins: [],
}

