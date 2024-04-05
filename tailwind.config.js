/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'text': '#f9641f',
        'background': '#e2dbbf',
        'primary': '#dbb353',
        'secondary': '#ff8c00',
        'accent': '#ce1212',
        'light-blue': '#2acdff',
       },       
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },

    },
  },
  plugins: [],
};