/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "radial-gradient(30% 30% at 75% 35%, #ffffff00 1%, rgba(0, 0, 0, 0.322) 100%), url('images/hero.jpg');",
      },
      colors: {
        "off-white": "#F5F7FA",
        "primary": "#0ABEF1",
        "dark-blue": "#111D4D",
      },
      fontFamily: {
        "cabin": "'Cabin', sans-serif"
      },
      fontSize: {
        "hero": "3.1875rem",
        "heading": "3rem",
        "paragraph-l": "1.25rem",
        "paragraph": "1.125rem",
        "caption": "0.875rem",
        "caption-s": "0.75rem"

      }
    },
  },
  plugins: [],
};
