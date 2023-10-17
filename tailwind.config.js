/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'desktop': '1440px',
      'tablet': '1024px',
      'mobile': '375px'
    },
    fontFamily: {
      NotoSans: ["Noto Sans", "sans-serif"],
      NotoSans400: ["Noto Sans", "sans-serif"],
      NotoSans600: ["Noto Sans", "sans-serif"]
    },
    fontSize: {
      '1xs': ['0.8125rem', {
        lineHeight: '18px',
        letterSpacing: '0.06em'
      }],
      '2xs': ['0.75rem', {
        lineHeight: '17px',
        letterSpacing: '0.02em'
      }],
      '3xs': ['0.75rem', {
        lineHeight: '16.8px',
        letterSpacing: '0.03em'
      }],
      '1xsF': ['1rem', {
        lineHeight: '16.8px',
        letterSpacing: '0.03em'
      }],
      '1xsM': ['2.375rem', {
        lineHeight: '53.2px',
        letterSpacing: '0.03em'
      }],
      '2xsM': ['1.125rem', {
        lineHeight: '25.2px',
        letterSpacing: '0.03em'
      }],
      '3xsM': ['0.688rem', {
        lineHeight: '15.4px',
        letterSpacing: '0.03em'
      }],
    },

    fontWeight: {
      light: '300',
      // medium: '500'
    },

    extend: {
      colors: {
        'red': '#FF0000	'
      }
    }

  },
  plugins: [],
}

