/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'SteelBlue'  : '#4180A4',
      'BeauBlue' : '#B4D1E1',
      'Zomp' : '#41A496',
      'PoliceBlue' : '#295067',
      'YankeesBlue' : '#18303E',
      'DarkSkyBlue' : '#81B2CD',
      'YankeesBlue' : '#18303E',
      'ChineseBlue' :'#414FA4',
      'JellybeanBlue' : '#477E9E',
      'TealBlue' :'#397090',
      'PaleCerulean' : '#9AC1D7',
      'White' : '#FFFFFF',
      'Black' : '#000000',
      'RichBlack' : '#081015',
      'BlueLight' : '#68A2C3',
      'BlueDark' :'#214052',
    },
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
    },
    fontFamily: {
      sans: ['Raleway','sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
