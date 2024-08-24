/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Add this line
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}