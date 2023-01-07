/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        magloGreen: "#C8EE44",
        magloBlack: "#1c1a2e",
        magloSemiBlack: "#1e1c30",
        magloDashBoardTabsBlack: "#363a3f",
        magloGrey: "#626260",
        magloDarkBlue: "#282541",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
