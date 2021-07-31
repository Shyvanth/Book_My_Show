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

          
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
