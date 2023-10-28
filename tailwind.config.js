/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: [
          "Rubik", "sans-serif"
        ],
        text: [
          "Roboto", "sans-serif"
        ],
        subtitle: [
          "Lobster Two", "cursive"
        ]
      },
      colors: {
        background: "#0f0e17",
        primary: "#ff8906",
        headline: "#fffffe",
        text: "#a7a9be",
        subtitle: "#fffffe",
        secondary: "#f25f4c",
        tertiary: "#e53170",


      }
    },
  },
  plugins: [],
}

