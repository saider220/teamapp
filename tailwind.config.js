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
        "grey": "#6D7D8B",
        "light-grey": "#BFBFBF",
        "footer": "#363D59",
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
      },
      screens: {
        "xxl": "1441px",
        "xl": {"max": "1320px"},
        "l": {"max": "1250px"},
        "md": {"max": "1000px"},
        "s": {"max": "750px"},
      },
    },
  },
  plugins: [],
};
