/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add pattern to ignore .mkv files
    "!./src/assets/videos/**/*.mkv",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
