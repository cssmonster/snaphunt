module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      "11px": "11px",
    },
    fontSize: {
      "14px": "14px",
    },
    lineHeight: {
      "21px": "21px",
      "18px": "18px",
    },
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1152px" },
      "footer-1103px": { max: "1103px" },
      "mobile-500px": { max: "500px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      bgGradientDeg: {
        main: "107.56deg",
      },
      padding: {
        "60px": "60px",
        "56px": "56px",
        "32px": "32px",
        "16px": "16px",
      },
      spacing: {
        "48px": "48px",
      },
      height: {
        "118px": "118px",
      },
      maxHeight: {
        "192px": "192px",
      },
      width: {
        "1152px": "1152px",
        "584px": "584px",
      },
      margin: {
        "118px": "118px",
        "52px": "52px",
        "30px": "30px",
        "16px": "16px",
      },
      colors: {
        "cs-primary-100": "#306099",
        "cs-primary-200": "#58B368",
        "cs-gradient-primary":
          "linear-gradient(107.56deg, #306099 0%, #58B368 100%)",
      },
    },
  },
  plugins: [],
};
