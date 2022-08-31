module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      "11px": "11px",
    },
    fontSize: {
      "25px": "25px",
      "22px": "22px",
      "18px": "18px",
      "16px": "16px",
      "15px": "15px",
      "14px": "14px",
      "12px": "12px",
      "11px": "11px",
      "10px": "10px",
    },
    lineHeight: {
      "30px": "30px",
      "27px": "27px",
      "26px": "26px",
      "23px": "23px",
      "22px": "22px",
      "20px": "20px",
      "18px": "18px",
      "17px": "17px",
      "16px": "16px",
      "14px": "14px",
    },
    fontFamily: {
      noto: ["Noto Sans JP", "sans-serif"],
      inter: ["Inter", "sans-serif"],
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
        "32px": "32px",
        "24px": "24px",
        "16px": "16px",
        "8px": "8px",
        "2px": "2px",
      },
      spacing: {
        "48px": "48px",
        "16px": "16px",
        "2px": "2px",
        "8px": "8px",
      },
      height: {
        "118px": "118px",
      },
      maxHeight: {
        "192px": "192px",
      },
      width: {
        "1152px": "1152px",
      },
      margin: {
        "118px": "118px",
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
