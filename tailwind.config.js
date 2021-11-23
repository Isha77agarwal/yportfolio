module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      DEFAULT : '3px 3px 3px 0 rgba(209, 209, 209, 0.986), -3px -3px 0 0 rgba(247, 247, 247, 0.986)',
      inner: 'inset 3px 3px 3px 0 rgba(209, 209, 209, 0.986), inset -3px -2px 0 0 rgba(247,247,247,0.986)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
