module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      maxLength: {
        10: "10",
      },
      colors: {
        primary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
          950: "#500724"
        },
        "custom-plum": "#b80d54", // A custom primary color
        "custom-lightpink": "#fe66c5",
        'custom-toggle-off': '#6d5b98',
        // plum: "#7c0c34",
        // "magenta" : "#b80d54",
        // hotmag: "#ff309d",
        // lightpink: "#fe66c5",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tw-elements/dist/plugin.cjs"),
    require("tw-elements-react/dist/plugin.cjs"),
    require("@tailwindcss/forms"),
  ],
};
