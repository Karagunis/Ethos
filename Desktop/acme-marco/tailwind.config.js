/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      dm: ["DM Sans"],
      gelionBold: ["Gelion Bold"],
      gelionSemiBold: ["Gelion Semi Bold"],
      gelionMedium: ["Gelion Medium"],
      gelionRegular: ["Gelion Regular"],
      gelionLight: ["Gelion Light"],
      vietnam: ["Be Vietnam Pro"],
      larsseit: ["Larsseit-Bold"],
    },
    screens: {
      "3xl": { max: "1599px" },

      "2xl": { max: "1400px" },

      xl: { max: "1199px" },

      lg: { max: "991px" },

      md: { max: "800px" },

      sm: { max: "575px" },
    },
    extend: {
      backgroundImage: {
        arrow: "url('/assets/images/arw.png')",
      },
    },
  },
  plugins: [],
};
