/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Manrope', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d6f1ff',
          200: '#ade4ff',
          300: '#73d2ff',
          400: '#30b7ff',
          500: '#0695e3',
          600: '#0075bd',
          700: '#025e99',
          800: '#0a4f7d',
          900: '#104367'
        },
        mint: {
          50: '#ecfdf7',
          100: '#d1faea',
          200: '#a8f4d5',
          300: '#6de9bc',
          400: '#31d89b',
          500: '#12b77d',
          600: '#089463',
          700: '#0a754f',
          800: '#0d5c41',
          900: '#0d4c37'
        }
      },
      boxShadow: {
        soft: '0 24px 50px -24px rgba(5, 33, 62, 0.35)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(10, 79, 125, 0.14) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};
