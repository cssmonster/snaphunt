module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      "5px": "5px",
    },
    fontSize: {
      "14px": "14px",
      "18px": "18px",
    },
    lineHeight: {
      "23px": "23px",
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
      "mobile-645px": { max: "645px" },
    },
    extend: {
      bgGradientDeg: {
        main: "107.56deg",
      },
      padding: {
        "60px": "60px",
        "56px": "56px",
        "32px": "32px",
        "24px": "24px",
        "18px": "18px",
        "16px": "16px",
      },
      margin: {
        "140px": "140px",
        "118px": "118px",
        "52px": "52px",
        "30px": "30px",
        "16px": "16px",
      },
      spacing: {
        "26px": "26px",
        "22px": "22px",
        "16px": "16px",
      },
      height: {
        "118px": "118px",
        "70px": "70px",
        "45px": "45px",
      },
      width: {
        "1152px": "1152px",
        "384px": "384px",
        "584px": "584px",
      },
      colors: {
        "cs-primary-100": "#306099",
        "cs-primary-200": "#58B368",
        "cs-secondary-100": "#E5E5E5",
      },
    },
  },
  plugins: [],
};
