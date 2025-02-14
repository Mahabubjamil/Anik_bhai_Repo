/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light"],
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
