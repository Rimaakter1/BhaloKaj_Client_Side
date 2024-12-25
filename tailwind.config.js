/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Exo: "Exo 2",
        Open_Sans: "Open Sans"
      }
    },
  },
  plugins: [
    require('daisyui'),
    {
      themes: ['light', 'dark'],
    }
  ],
}

