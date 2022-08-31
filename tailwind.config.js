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
      menuRangeSmall: { min: "0px", max: "664px" },
      menuRangeBig: { min: "665px", max: "980px" },
      desktop: "980px",
    },
    extend: {
      bgGradientDeg: {
        main: "107.56deg",
      },
      padding: {
        "56px": "56px",
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
