
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ebecec",
        "text-op60": "rgba(235, 236, 236, 0.6)",
        "dark-text-opac-70": "rgba(235, 236, 236, 0.7)",
        "dark-text-opac-30": "rgba(235, 236, 236, 0.3)",
        "cmn-green": "#01c36d",
        "cmn-dark-green": "#1b3c37",
      },
      fontFamily: {
        "web-med-16": "'DM Sans'",
      },
    },
    fontSize: {
      xs: "0.75rem",
      "4xs": "0.56rem",
      base: "1rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};


