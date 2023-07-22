/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#252424',
        secondary: '#938d8d',
        'primary-dim': '#252424e6'
      },
      boxShadow: {
        btn: '0px 0px 26px 0.5px rgba(147,141,141,0.39)'
      }
    },
  },
  plugins: [],
}