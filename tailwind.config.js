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
        remine: '#CFDBDD',
        rooting: '#98CC9A',
        ecolight: '#483C6C',
        prions: '#383838',
        off: '#404855',
        crispier: '#373B40',
        staphylocide: "#404855"
      },
      fontFamily: {
        'bg-m': ['Brandon Grotesque Medium'],
        'bg-r': ['Brandon Grotesque Regular'],
        'nunito': ['Nunito Sans']
      },
      fill: theme => ({
        'white': theme('colors.white'),
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.bg-r'),
              fontSize: '2.25rem',
              color: theme(`colors.teal`),
              margin: '0rem',
            },
            h2: {
              fontFamily: theme('fontFamily.bg-r'),
              fontSize: '1.25rem',
              color: theme(`colors.blue`),
            },
            h3: {
              fontFamily: theme('fontFamily.bg-r'),
              fontSize: '1.15rem',
              fontWeight: 'normal',
              color: theme(`colors.blue`),
            },
            p: {
              fontFamily: theme('fontFamily.nunito'),
              fontSize: '0.875rem',
              color: theme(`colors.blue`),
            },
            a: {
              fontFamily: theme('fontFamily.bg-r'),
              fontSize: '1.15rem',
              color: theme(`colors.teal`),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            li: {
              fontFamily: theme('fontFamily.nunito'),
              fontSize: '0.875rem',
            }
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
