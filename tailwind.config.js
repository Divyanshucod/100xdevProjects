// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // <- important for Vite + React/Vue
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
