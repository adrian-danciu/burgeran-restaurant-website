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
      }
    },
  },
  plugins: [],
}

