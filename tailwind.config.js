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
      },
      fontFamily: {
        'bg-m': ['Brandon Grotesque Medium'],
        'bg-r': ['Brandon Grotesque Regular'],
        'nunito': ['Nunito Sans']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.bg-r'),
              fontSize: '3rem',
              color: theme(`colors.teal`),
              lineHeight: 1.1,
            },
            h3: {
              fontFamily: theme('fontFamily.bg-r'),
              fontSize: '1.5rem',
              color: theme(`colors.blue`),
            },
            p: {
              fontFamily: theme('fontFamily.nunito'),
              fontSize: '1rem',
              color: theme(`colors.blue`),
            },
          },
        },
      }),      
    }
  },
  variants: {
    extend: {
      display: ['group-hover'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
