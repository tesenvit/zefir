module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'min-sm': '460px',
      },
      colors: {
        'brown': '#b56953',
        'brown-semi': '#f4f0e9',
        'brown-light': '#faf9f5',
        'brown-pale': '#f3ece8',
        'grey': '#4d4d4d'
      },
      fontFamily: {
        'sans': ['Josefin', 'sans-serif']
      },
      fontSize: {
        'md': '1.063rem',
        '13rem': '13rem',
        '20rem': '20rem'
      },
      textShadow: {
        'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
        'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
      },
      spacing: {
        '0.5px': '0.5px',
        '4.5': '1.125rem',
        '3px': '3px',
        '17.5': '4.375rem',
        '3/10': '30%'
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
