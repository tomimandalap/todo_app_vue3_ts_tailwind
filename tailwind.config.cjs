/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D1E5F7",
        secondary: "#B2AFA1",
        success: "#DAF2D6",
        warning: "#FFF9DE",
        error: "#FFCECE",
        "light-indigo": "#D2CEFF",
        "dark-secondary": "#69665c",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
