module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      "5px": "5px",
      "10px": "10px",
    },
    fontSize: {
      "48px": "48px",
      "25px": "25px",
      "24px": "24px",
      "20px": "20px",
      "14px": "14px",
      "18px": "18px",
    },
    lineHeight: {
      "72px": "72px",
      "30px": "30px",
      "24px": "24px",
      "23px": "23px",
      "21px": "21px",
      "18px": "18px",
      "14px": "14px",
    },
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1552px" },
      "footer-1103px": { max: "1103px" },
      "mobile-500px": { max: "500px" },
      "mobile-645px": { max: "645px" },
      "mobile-700px": { max: "700px" },
      "mobile-950px": { max: "950px" },
    },
    extend: {
      boxShadow: {
        card: " 0px 4px 10px rgba(0, 0, 0, 0.15)",
        button:
          " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
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
        "70px": "70px",
        "52px": "52px",
        "30px": "30px",
        "24px": "24px",
        "16px": "16px",
      },
      spacing: {
        "26px": "26px",
        "22px": "22px",
        "16px": "16px",
      },
      height: {
        "200px": "200px",
        "118px": "118px",
        "70px": "70px",
        "45px": "45px",
        banner: "calc(100vw * 500 / 1920)",
      },
      width: {
        "1552px": "1552px",
        "700px": "700px",
        "486px": "486px",
        "384px": "384px",
        "584px": "584px",
        "286px": "286px",
        "70px": "70px",
      },
      colors: {
        "cs-primary-100": "#306099",
        "cs-primary-200": "#58B368",
        "cs-primary-300": "#575757",
        "cs-secondary-100": "#E5E5E5",
        "cs-secondary-200": "#38FFBB",
      },
    },
  },
  plugins: [],
};
