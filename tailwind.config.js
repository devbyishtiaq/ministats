/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "390px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        primary: "Orbitron",
        secondary: "Lexend",
        custom: "Sofia Pro",
      },
      backgroundImage: {
        hiw: 'url("/src/assets/images/how-it-works-bg.png")',
      },
      colors: {
        secondary: "#F7AD0B",
        primary: "#097EC6",
        "custom-black": "#24272F",
        "dark-grey": "#444D5C",
        grey: "#EDEEF0",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
