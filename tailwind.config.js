module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: {
        DEFAULT: "#EEE2DC",
      },
      bone: {
        DEFAULT: "#EDC7B7",
      },
      red: {
        DEFAULT: "#AC3B61",
      },
      primary: {
        DEFAULT: "#123C69",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
