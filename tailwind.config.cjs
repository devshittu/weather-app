/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1476610182048-b716b8518aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDc3OTk3MA&ixlib=rb-4.0.3&q=80&w=2676')",
        'hero2': "url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkyNTQxOA&ixlib=rb-4.0.3&q=80&w=3000')",
        'hero3': "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDE4ODY5OQ&ixlib=rb-4.0.3&q=80&w=3000')"
        // 'hero3': "url('')",
        // 'hero3': "url('')",
        //https://images.unsplash.com/photo-1674859659457-3dde5db387c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDkxODYyMg&ixlib=rb-4.0.3&q=80&w=3000
        // 
      },
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        heading: ['"Roboto"', 'sans-serif'],
        // heading: ['"Source Sans Pro"', 'sans-serif'],
        // 'roboto': ['Roboto', 'sans-serif'],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],

      }
    },
  },
  plugins: [],
}
