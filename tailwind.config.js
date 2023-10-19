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
        custom: {
          plum: "#7c0c34",
          magenta: "#b80d54",
          hotmag: "#ff309d",
          lightpink: "#fe66c5",
          aqua: "#86fbfb",
          white: "#f7f8fa",
          black: "#171321",
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tw-elements/dist/plugin.cjs"),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
};
