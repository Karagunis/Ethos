/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "24px",
      },
    },
    screens: {
      sm: "1200px",
      md: "1200px",
      lg: "1200px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#666666",
        accent: {
          DEFAULT: "#ED1D24",
          hover: "#A70006",
        },
        body: "#fafafa",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
