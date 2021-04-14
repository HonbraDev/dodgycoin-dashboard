module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#8dbaca",
        brandgray: "#7e8484",
        bggray: "#f1f1f1",
      },
    },
  },
  variants: {
    extend: {
      padding: ["hover"]
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
