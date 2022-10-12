// const { primaryColor } = require('./config.js');
const {
  primaryColor,
  secondaryColor,
  dark,
  background,
} = require('./config/styles/colors.yml');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'serif'],
        sansSerif: ["'Poiret One', serif"],
        display: ["'Poiret One', serif"],
        body: ['Roboto', 'system-ui', 'serif'],
      },
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
        dark: dark,
        background: background,
      },
      gridTemplateColumns: {
        masonry: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
