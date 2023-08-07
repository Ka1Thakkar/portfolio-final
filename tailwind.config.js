/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        bggray: '#ecefee',
        navbg: '#383837',
        textblue: '#003dff',
        textgreen: '#c0eb00',
        textred:"#dd0036"
      }
    },
  },
  plugins: [],
}
