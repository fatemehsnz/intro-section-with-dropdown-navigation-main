/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        almostwhite: "hsl(0, 0%, 98%)",
        mediumgray: "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
