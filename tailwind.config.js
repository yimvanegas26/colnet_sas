/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},

      fontFamily: {
        'press-one': ['"Quicksand" "', 'sans-serif'],
        'title': ['"Cormorant Garamond" "', 'serif'],
        'text': ['"Roboto" "', 'sans-serif'],
        
      }
   
  },
  plugins: [],
}

