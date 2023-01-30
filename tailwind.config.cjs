/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1476610182048-b716b8518aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDc3OTk3MA&ixlib=rb-4.0.3&q=80&w=2676')",
        'hero2': "url('https://images.unsplash.com/photo-1475776408506-9a5371e7a068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDc4NjY3MA&ixlib=rb-4.0.3&q=80&w=3000')"
        //https://images.unsplash.com/photo-1674859659457-3dde5db387c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDkxODYyMg&ixlib=rb-4.0.3&q=80&w=3000
      },
      fontFamily: {
        display: ["Oswald", "sans"],
        body: ["Rubik", "sans"]
      }
    },
  },
  plugins: [],
}
