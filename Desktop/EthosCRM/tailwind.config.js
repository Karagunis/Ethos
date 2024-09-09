/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: "Montserrat",
    },
    screens: {
      "2xl": { max: "1500px" },

      xl: { max: "1240px" },

      x: { max: "1150px" },

      lg: { max: "1050px" },

      md: { max: "800px" },

      sm: { max: "599px" },

      smm: { max: "500px"},

      smx: { max: "350px" }
    },
    extend: {},
  },
  plugins: [],
}

