// tailwind.config.js
export default {
  darkMode: 'class', // 👈 Good, keep this for dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), // 👈 ADD THIS LINE
  ],
}
