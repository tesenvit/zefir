module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'min-sm': '460px',
      },
      colors: {
        'brown': '#b56953',
        'brown-light': '#faf9f5',
        'grey': '#4d4d4d'
      },
      fontFamily: {
        'sans': ['Josefin', 'sans-serif']
      },
      textShadow: {
        'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
        'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
      },
      spacing: {
        '3px': '3px',
        '17.5': '4.375rem'
      },
      letterSpacing: {
        widest: '.25em',
      },
      rotate: {
        '135': '135deg',
      }
    }
  },
  plugins: [],
}
