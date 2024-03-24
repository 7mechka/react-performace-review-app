/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'catalina-blue': {
          '50': '#eaf7ff',
          '100': '#d1eeff',
          '200': '#ace2ff',
          '300': '#74d2ff',
          '400': '#32b6ff',
          '500': '#0490ff',
          '600': '#0069ff',
          '700': '#0050ff',
          '800': '#0041da',
          '900': '#003eaa',
          '950': '#062e7c',
},

      }
    },
  },
  plugins: [],
}

