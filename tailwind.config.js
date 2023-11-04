module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "custom-plum": "#b80d54", // A custom primary color
        "custom-lightpink": "#fe66c5",
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
