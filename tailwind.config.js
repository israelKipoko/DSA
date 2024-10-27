/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        action:  {
          actionNormal: "#395886",
          actionHover: "#1E456C",
        },
        primary:{
          DEFAULT: "#E6E3DC",
        },
        secondary: {
          normal: "#29282E",
        },
        gray: {
          100: "#E9EBEA",
          200: "#CECFD1",
        },
        error:{
          DEFAULT: "#EF1D10",
        }
      },
    },
  },
  plugins: [],
}

