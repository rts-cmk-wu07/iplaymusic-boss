/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontSize: {
        "3xl": ["1.875rem", "2.5rem"],
        "4xl": ["2.25rem", "2.75rem"],
        "5xl": ["3rem", "1.3"],
      },
      colors: {
        primary: "#FF1168",
        secondary: "#341931",
        additional: "#111625",
        gradientColors: {
          left: "#EE0979",
          right: "#FF6A00",
        },
        extra: {
          100: "#115793",
          200: "#00a1cb",
          300: "#0abebe",
          400: "#3a7634",
          500: "#5eb11c",
          600: "#f2bc06",
          700: "#f18d05",
          800: "#e54028",
        },
        categories: {
          100: "#00A1CB",
          200: "#D70060",
          300: "#F18D05",
          400: "#F2BC06",
          500: "#5EB11C",
          600: "#3A7634",
          700: "#0ABEBE",
          800: "#00A1CB",
          900: "#115793",
        },
      },
      boxShadow: {
        top: "0 -15px 20px 0px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        sans: ["Poppins, sans-serif", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(250px, 1fr));",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
      strokeWidth: {
        3: "3px",
      },
      aspectRatio: {
        "3/4": "3 / 4",
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
