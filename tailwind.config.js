/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CB1B1B",
        customBlack: "#0C0C0C",
        info: "#2F80ED",
        Error: "#2F80ED",
        ErrorLight: "#ED2E2E",
        Success: "#00966D",
        SuccessLight: "#00BA88",
        Warning: "#A9791C",
        WarningLight: "#F4B740",
        GrayBg: "#F9F9F9",
        GrayText: "#717171",
      },
      fontFamily: {
        Vazirmatn: "Vazirmatn",
      },
    },
  },
  plugins: [],
};
