module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        bms:{
          
            

  50: '#ffeeef',
  100: '#e0d6d6',
  200: '#c4bcbe',
  300: '#aaa3a5',
  400: '#90898b',
  500: '#766f71',
  600: '#5d5658',
  700: '#443d3f',
  800: '#2a2427',
  900: '#130913',

          
        },
        core:{
          

  50: '#deffe3',
  100: '#b1fdbb',
  200: '#81fa91',
  300: '#51f867',
  400: '#22f63d',
  500: '#09dd23',
  600: '#00ac1a',
  700: '#007b11',
  800: '#004b07',
  900: '#001b00',

        },
        greyc:
        {
          50: '#f0f5f0',
          100: '#d5dfd6',
          200: '#b8caba',
          300: '#9bb69e',
          400: '#7da182',
          500: '#648868',
          600: '#4d6951',
          700: '#384c3b',
          800: '#222d23',
          900: '#0a0f0b',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
