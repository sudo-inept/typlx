/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx,html}","./public/test.html"],
  theme: {
    extend: {
      colors :{
        'primary': '#eaf2ff',
        'tert' : '#00204c',
      },
      lineHeight: {
        '12': '3rem',
      },
      scale: {
        '175': '1.75',
      },
      spacing: {
        '24': '6rem',
      },
      keyframes: {
        floaty: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        floatx: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        floaty: 'floaty 1s ease-in-out forwards',
        floatx: 'floatx 1s ease-in-out forwards',
        fadein: 'fadein 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

