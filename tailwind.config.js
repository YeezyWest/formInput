/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html","upload.html","review1.html"],
  theme: {
    extend: {},
  },
  container: {
    center: true,
    padding: "2rem",
    screens:{
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    },
  },
  plugins: [],
}