/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rocket': "url(./src/assets/rocket.jpg)",
      },
      colors: {
        'navbar': '##3A313E',
      },
    },
    fontFamily: {
      'times': ['Times New Roman', 'serif'],
      'pixels': ['Rubik Pixels', 'sans-serif'],
      'zilla': ['Zilla Slab Highlight', 'sans-serif'],
      'yomogi': ['Yomogi', 'sans-serif'],
    },
    fontSize: {
      'html-font': '62.5%',
    },
    screens: {
      'xsm': '0px',
      'sm': '458px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1536px',
    },
  },
  plugins: [],
}