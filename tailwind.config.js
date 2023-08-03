/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
     screens: {
      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
      'tablet': '1024px',
      // => @media (min-width: 1024px) { ... }
      'mobile': '375px'
      // => @media (min-width: 375px) { ... }
     },
     fontFamily: {
       NotoSans: ["Noto Sans", "sans-serif"],
       
     },
     fontSize: {
      '1xs' : ['0.8125rem', {
        lineHeight: '18px',
        letterSpacing: '0.06em'
      }],
      '2xs' : ['0.75rem', {
        lineHeight: '17px',
        letterSpacing: '0.02em'
      }],
      '3xs' : ['0.75rem', {
        lineHeight: '16.8px',
        letterSpacing: '0.03em'
      }],
      'ModalText' : ['2.5rem', {
        lineHeight: '3.5rem',
        letterSpacing: '0.02em',
        
      }],
       '4xs' : ['0.75rem', {
        lineHeight: '1.05rem',
        letterSpacing: '0.02em',
      }],
       'MobileText' : ['1.438rem', {
        lineHeight: '2.013rem',
        letterSpacing: '0.02em',
        
      }]
     },
    
     extend: {
        colors: {
          'red': '#FF0000	'
        }
     }
    
  },  
  plugins: [],
} 

