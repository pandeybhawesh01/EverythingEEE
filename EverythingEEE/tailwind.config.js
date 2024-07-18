/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('./src/assets/backfround-img.jpg')", // Corrected the path to your image
      },
    },
  },
  plugins: [],
}

