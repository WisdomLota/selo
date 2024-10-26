/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkish" : "#0E1512",
        "greenish": "#65FFBA",
        "whitish": "#EAFFF5",
        "lightGreen": "#BCD8CB"
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}

