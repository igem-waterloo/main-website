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
              fontSize: theme('text-5xl'),
              color: theme(`colors.teal`),
            },
            h3: {
              fontFamily: theme('fontFamily.bg-r'),
              fontSize: theme('text-xl'),
              color: theme(`colors.blue`),
            },
            p: {
              fontFamily: theme('fontFamily.nunito'),
              fontSize: theme('text-base'),
              color: theme(`colors.blue`),
            },
            a: {
              fontFamily: theme('fontFamily.bg-r'),
              fontSize: theme('text-2xl'),
              color: theme(`colors.teal`),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
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
