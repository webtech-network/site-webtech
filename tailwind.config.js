/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primaria:"#FDBC2F",
        primariaDark: "#DB9A0D",
        primariaLight:"#FFC64A",
        secundaria:"#2A3341",
        secundariaDark: "#1F2733",
        secundariaLight:"#404957",
        white:"#FFFFFF",
        whiteDark:"#D9D5D5",
        whiteLight:"#F8FAFF",
        danger:"#EC3434",
        dangerDark:"#C70E0E",
        dangerLight:"#FF4D4D",
        success:"#65D73D",
        successDark:"#4DD71C",
        successLight:"#82F05B",
        cinza:"#F4F1F1",
        preto:"#0000"



      },

    },
  },
  plugins: [],
};
