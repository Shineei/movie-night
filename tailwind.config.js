/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here

        razzmatazz: {
          50: "#fef1f8",
          100: "#ffe4f2",
          200: "#ffc9e7",
          300: "#ff9ed2",
          400: "#ff62b2",
          500: "#ff3393",
          600: "#f2106d",
          700: "#d30353",
          800: "#ae0645",
          900: "#910a3c",
          950: "#59001f",
        },
      },
    },
  },
  plugins: [],
};
