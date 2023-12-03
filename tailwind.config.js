/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily :{
        oswald : ['Oswald'],
        poppins : ['Poppins'],
        roboto : ['Roboto'],
        eduSA : ['Edu SA'],
        dancing : ['Dancing Script']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

