module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: "#009A9C",
        blue: "#0F0F38",
        white: "#FCFCFE",
        yellow: "#ECB807",
        gray: "#F2F2F2",
        remine: "#CFDBDD",
        rooting: "#98CC9A",
        ecolight: "#483C6C",
        prions: "#383838",
        off: "#404855",
        crispier: "#373B40",
        staphylocide: "#404855",
      },
      fontFamily: {
        brandon: ["Brandon Grotesque"],
        brandonm: ["Brandon Grotesque Medium"],
        nunito: ["Nunito Sans"],
      },
      fill: theme => ({
        white: theme("colors.white"),
      }),
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
}
