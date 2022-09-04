/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#26C0AB",
          900: "#00494D",
        },
        secondary: {
          50: "#FFFFFF",
          100: "#F4FAFA",
          200: "#C5E4E7",
          400: "#7F9C9F",
          600: "#5E7A7D",
        },
      },
      fontFamily: {
        spacemono: "'Space Mono', monospace",
      },
    },
  },
  plugins: [],
};
