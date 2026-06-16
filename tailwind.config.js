/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- 检查这一行，特别是点和星号
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}