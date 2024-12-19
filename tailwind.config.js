/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', 'sans-serif']
      },
      colors: {
        'green-200': '#DFF1E7',
        'green-600': '#0C7D69',
        'dark-green': '#063F36',
        'red': '#D73C3C',
        'gray-500': '#87A3A6',
        'gray-900': '#2B4246'
      },
      maxWidth: {
        card: '737px'
      },
      backgroundImage: {
        checkbox: 'url(./images/icon-checkbox-check.svg)'
      },
      keyframes: {
        'fade-in': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        'fade-out': {
          '0%': {opacity: '1'},
          '100%': {opacity: '0'}
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in',
        'fade-out': 'fade-out 0.5s forwards ease-in'
      }
    },
  },
  plugins: [],
}

