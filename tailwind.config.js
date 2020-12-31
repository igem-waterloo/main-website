module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: '#009A9C',
        blue: "#0F0F38",
        white: "#FCFCFE",
        yellow: "#ECB807",
        gray: "#F2F2F2",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
