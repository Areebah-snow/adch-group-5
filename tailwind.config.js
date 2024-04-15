/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark': '#161C2D',
        'dark-100': '#101928',
        'dark-200': '#344054',
        'primary': '#473BF0',
        'gray': '#D0D5DD',
        'grey': '#667185'
      },

      fontFamily: {
        'custom': ["Open Sans", "sans-serif"],
      },

    },
  },
  plugins: [],
};


