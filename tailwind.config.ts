/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "icm-black": "#2f2c2c",
        "icm-white": "#ffffff",
        "icm-green": "#3cb878",
        "icm-yellow": "#fcb03b",
        "icm-yellow-dark": "#ff9900",
        "icm-gray-light": "#362f2d",
        "icm-gray-dark": "#181e23",
        "icm-cyan": "#4cc2c0",
        "icm-gray-hardDark": "#1e293b",
        "icm-blue": "#1077bc",
        "icm-red": "#f15b26",
      },
      fontFamily: {
        sans: ['"Libertinus Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
