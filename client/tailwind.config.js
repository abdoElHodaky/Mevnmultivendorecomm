/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)'
        },
        'red-100': 'var(--red-100)',
        'red-500': 'var(--red-500)',
        'red-700': 'var(--red-700)',
        'orange-100': 'var(--orange-100)',
        'orange-700': 'var(--orange-700)',
        'green-100': 'var(--green-100)',
        'green-700': 'var(--green-700)',
        'blue-100': 'var(--blue-100)',
        'blue-700': 'var(--blue-700)',
        black: 'rgb(var(--black))',
        white: 'rgb(var(--white))',
        transparent: 'var(--transparent)',
      },
      boxShadow: {
        'btn': '1px 1px 3px 0px rgba(30,30,29,1)'
      },
    },
    screens: {
      xs: '320px',
      sm: '475px',
      md: '768px',
      lg: '992px',
      xlg: '1200px',
      '2xl': '1440px'
    }
  },
  plugins: [],
}