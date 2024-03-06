/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4640DE",
          500: "#4640decc",
          light: "rgb(142 138 255)",
        },
        secondary: "#7630a1",
      },
    },
  },
  variants: {},
  plugins: [],
};
// className="bg-primary-light"
// module.exports = {
//   theme: {
//     // colors: {
//     //   green: "#093B3B",
//     // },
//     fontFamily: {
//       sans: ["Poppins", "sans-serif"],
//     },
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
