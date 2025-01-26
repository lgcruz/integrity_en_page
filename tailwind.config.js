/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      screens: {
        "2sm": "350px",
      },
      colors: {
        primary: {
          // "#fefcfb"
          50: "#d6eaf8",
          100: "#8fa5cc",
          200: "#728ebf",
          300: "#5677b2",
          400: "#3a61a5",
          500: "#1E4A98",
          600: "#163872",
          700: "#132e5f",
          800: "#0f254c",
          900: "#071226",
        },
        secondary: {
          100: "#f2ede3",
          200: "#d8c8ab",
          300: "#bfa372",
          400: "#a57e3a",
          500: "#986c1e",
          600: "#855f1a",
          700: "#5f4413",
          800: "#4c360f",
          900: "#261b07",
        },
      },
    },
  },
  plugins: [
    require("tw-elements/plugin.cjs"),
    require("flowbite/plugin"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
