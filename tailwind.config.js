module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'min-sm': '460px',
      },
      colors: {
        'brown': '#b56953',
        'brown-light': '#faf9f5',
        'brown-pale': '#f3ece8',
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
        '0.5px': '0.5px',
        '3px': '3px',
        '17.5': '4.375rem',
        '3/10': '30%'
      },
      letterSpacing: {
        widest: '.25em',
      },
      rotate: {
        '135': '135deg',
      },
      fontSize: {
        'md': '1.063rem'
      }
    }
  },
  plugins: [],
}
