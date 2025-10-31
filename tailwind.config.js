/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#0053d3",
        secondary: "#e79f33",
        light: "#f4faff",
        dark: "#002152",
        baby: "#f0f4ef",
      },
    },
  },
  plugins: [],
};
