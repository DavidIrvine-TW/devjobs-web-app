/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors : {
        'thumb' : 'hsla(235, 69%, 61%, 1)',
        'violet' : 'hsl(235, 69%, 61%)',
        'lightviolet' : 'hsl(235, 82%, 77%)',
        'vdblue' : 'hsl(219, 29%, 14%)',
        'midnight' : 'hsl(220, 29%, 10%)',
        'white' : 'hsl(0, 0%, 100%)',
        'lgray' : 'hsl(220, 22%, 96%)',
        'gray' : 'hsl(212, 23%, 69%)',
        'dgray' : 'hsl(214, 17%, 51%)',
        'overlay' : 'hsla(214, 17%, 51%, 0.7)',
      },
      fontFamily : {
        kumbh : ['Kumbh Sans', 'sans-serif']
      },
      screens : {
        mobile : '375px',
        tablet : '768px',
        desktop : '1200px',
      },
      fontSize: {
        'h1-dk': ['1.75rem', {
          lineHeight: '2.125rem',
          letterSpacing: '0px',
          fontWeight: '700',
        }],
        'h2-dk': ['1.5rem', {
          lineHeight: '1.8125rem',
          letterSpacing: '0px',
          fontWeight: '700',
        }],
        'h3-dk': ['1.25rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0px',
          fontWeight: '700',
        }],
        'h4-dk': ['0.875rem', {
          lineHeight: '1.125rem',
          letterSpacing: '0px',
          fontWeight: '700',
        }], 
        'body': ['1rem', {
          lineHeight: '1.625rem',
          letterSpacing: '0em',
          fontWeight: '400',
        }],
        'h1-mb': ['1.25rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0px',
          fontWeight: '700',
        }],  
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
}

