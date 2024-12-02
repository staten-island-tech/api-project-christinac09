/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./JS/main.js", "./JS/display.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "dracula",
      "dark",
      "business",
      "night",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
