module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        1200: "1200px",
        1017: "1017px",
        918: "918px",
        904: "904px",
        850: "850px",
        840: "840px",
        628: "628px",
        545: "545px",
        460: "460px",
        360: "360px",
      },
      colors: {
        "dark-blue": "#0B4A72",
        "light-blue": "#37c4c8",
        "gray-white": "#E6F2B4",
        "opacity70-black": "#000000b3",
        "white-blue": "#ebf0f5",
        "gray-blue": "#868AA2",
        "light-rose": "#FFFAF4",
        "light-green": "#EAF6B9",
      },
      width: {
        22: "5.5rem",
      },
      maxWidth: {
        41.5: "10.375rem",
        77.5: "19.375rem",
        85.5: "21.375rem",
        106.5: "26.625rem",
        122.8: "30.7rem",
        137.5: "34.375rem",
        186: "45rem",
        193.5: "48.375rem",
      },
      margin: {
        "-4": "-1rem",
        18: "4.5rem",
      },
      padding: {
        18: "4.5rem",
        22: "5.5rem",
        34: "8.5rem",
        50: "12.5rem",
        97: "25rem",
      },
      lineHeight: {
        12: "3rem",
        15: "3.75rem",
        20: "5rem",
      },
    },
  },
  plugins: [],
};
