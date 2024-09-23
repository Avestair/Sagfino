/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CB1B1B",
        info: "#2F80ED",
        Error: "#2F80ED",
        ErrorLight: "#ED2E2E",
        Success: "#00966D",
        SuccessLight: "#00BA88",
        Warning: "#A9791C",
        WarningLight: "#F4B740",
      },
      fontFamily: {
        Vazirmatn: "Vazirmatn",
      },
    },
  },
  plugins: [],
};
