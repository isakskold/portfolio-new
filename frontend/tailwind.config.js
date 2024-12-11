/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#130023",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
