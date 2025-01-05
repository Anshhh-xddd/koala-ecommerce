/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Adding custom animations
      animation: {
        marquee: "marquee 20s linear infinite", // Smooth marquee animation
      },
      keyframes: {
        // Define the marquee animation keyframes
        marquee: {
          "0%": { transform: "translateX(0%)" }, // Start from the first position
          "100%": { transform: "translateX(-50%)" }, // Scroll halfway (works with duplicated content)
        },
      },
      // Extend the theme with additional styles
      fontFamily: {
        title: ["Oswald", "sans-serif"], // Custom font family for titles
        mono: ["ui-monospace", "SFMono-Regular", "monospace"], // Mono font for code-like styles
      },
      colors: {
        primary: "#3498db", // Custom blue color
        secondary: "#f1c40f", // Custom yellow color
        tertiary: "#f1c40f", // Custom cyan color
      },
      spacing: {
        128: "32rem", // Adds larger spacing utilities
        144: "36rem",
      },
      borderRadius: {
        xl: "1.5rem", // Extra-large border radius utility
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom box shadow utility
      },
    },
  },
  plugins: [
  ],
};
