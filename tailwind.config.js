/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'background': '#F9F1EA',
          'text': '#FBDCF5'
        },
      },
      fontFamily: {
        'sans': ['"Poppins"', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif']
      }
    },
    plugins: [],
  }

  