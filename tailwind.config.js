/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        b: "#d6dae5",
        l_blue: "#d6dae5",
        custom_white: "#fcfcfc",
        link_color: "#7d8da1",
        logo: "#ff7782",
        main: "rgba(132, 138,200, 0.18)",
        circle_green:"#41f1b6",
        primary:"#7380ec",
        warning:"#ffbb55",
        heading:"#6368d9",
        input:"#D1D0F9"
       
      },
      fontFamily: {
        logo: ["Rubik Bubbles"],
        body: "'Work Sans'",
        rest: "'Palanquin Dark'",
      },
    },
  },
  plugins: [],
};
