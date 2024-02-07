/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inria Sans", "sans-serif"],
    },
    extend: {
      colors: {
        darkPrimary: "#0A0D14",
        overlay: "rgba(255, 255, 255, 0.7)",
      },
      backgroundImage: {
        bg: "url('/src/assets/bg.png')",
      },
    },
  },
  plugins: [],
};
