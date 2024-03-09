/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4640DE",
          500: "#4640decc",
          200: "rgba(248, 248, 253, 1)",
          light: "rgb(142 138 255)",
        },
        secondary: "#7630a1",
      },
    },
  },
  variants: {},
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
