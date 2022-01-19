module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brown': '#b56953',
        'brown-light': '#faf9f5',
        'grey': '#4d4d4d'
      },
      fontFamily: {
        'sans': ['Josefin', 'sans-serif']
      }
    },
  },
  plugins: [],
}