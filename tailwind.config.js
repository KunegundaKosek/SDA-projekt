/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: "fonts",
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    // colors: {
    //   porzeczkowy: "#b345ca",
    //   brunatny: {
    //     100: "#abc345",
    //     800: "#abc456"
    //   }
    // },
    spacing: {
      '0': '0px',
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '100': '100px',
      '200': '200px',
    },
  },
  plugins: [],
}

