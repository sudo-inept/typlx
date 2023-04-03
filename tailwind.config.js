/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors :{
        'primary': '#eaf2ff',
        'tert' : '#00204c',
      },
      lineHeight: {
        '12': '3rem',
      },
      spacing: {
        '24': '6rem',
      },
    },
  },
  plugins: [],
}

