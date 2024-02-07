/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        'teal-blue': '#04ddb2',
        'ocean-black': '#333',
      },
      width: {
             'max-w': '960px',
             '168': '168px',
      },
      height:{
         'max-h': '540.48px',
         '50': '50px'
      },
      fontSize:{
        '7.5xl': '64px',
        '2.5xl': '26px',
        '4.5xl': '38px',
      }
    },
  },
  plugins: [],
}

