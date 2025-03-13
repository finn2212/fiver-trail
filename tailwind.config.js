/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: process.env.PRIMARY_COLOR || "#07236B",
        },
        secondary: {
          DEFAULT: process.env.PRIMARY_COLOR || "#FF923D",
        },
      },
      aspectRatio: {
        "9/8": "1 / 1.125",
      },
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
