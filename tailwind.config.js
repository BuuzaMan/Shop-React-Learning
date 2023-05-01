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
       NotoSans400: ["Noto Sans", "sans-serif" ],
       NotoSans600: ["Noto Sans", "sans-serif"]
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
      }]
     },
    
     extend: {
        colors: {
          
        }
     }
    
  },  
  plugins: [],
}