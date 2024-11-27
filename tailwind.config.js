/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/tw-elements/js/**/*.js"],
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
          100: "#fefcfb",
          200: "#1282a2",
          500: "#1E4A98",
          400: "#034078",
          600: "#001f54",
          800: "#0a1128",
        },
        secondary: {
          100: "#e5c7d2",
          200: "#cc8fa5",
          400: "#b25677",
          500: "#981e4a",
          600: "#5f132e",
          800: "#390b1c",
        },
        terciary: {
          100: "#d2e5c7",
          200: "#a5cc8f",
          400: "#77b256",
          500: "#4a981e",
        },
      },
    },
  },
  plugins: [
    require("tw-elements/plugin.cjs"),
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
