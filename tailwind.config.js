/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',   // آبی
        secondary: '#64748b', // خاکستری
      },
      fontFamily: {
        vazir: ['Vazir', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

