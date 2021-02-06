module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'red-brand': "#F63758"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
