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
      typography: {
        DEFAULT: {
          css: {
            color: "#fff",
            strong: {
              fontWeight: "800",
            },
            h1: {
              color: "#fff",
            },
            h2: {
              color: "#fff",
            },
            h3: {
              color: "#fff",
            },
            h4: {
              color: "#fff",
            },
            h5: {
              color: "#fff",
            },
            h6: {
              color: "#fff",
            },
            code: {
              color: "#fff",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      padding: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
