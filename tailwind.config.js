/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color1: 'rgb(24, 24, 24)',
        color2: 'rgb(71, 71, 71)',
        color3: 'rgb(117, 117, 117)',
        color4: 'rgb(253, 110, 10)',
        color5: 'rgb(255, 248, 243)',
      },
      fontFamily:{
        'OpenSans': 'Open Sans'
      },
      fontSize:{
        45: '45px',
      },
      lineHeight:{
        61: '61px',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}