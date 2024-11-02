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
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        gray: "var(--gray-color)",
        lightGray: "var(--light-gray-color)"
      },
      fontFamily: {
        sans: "var(--secondary-font)",
        heading: "var(--primary-font)",
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "4.5rem" }],
        h2: ["2.5rem", { lineHeight: "3.5rem" }],
        h3: ["2rem", { lineHeight: "2.5rem" }],
        h4: ["1.75rem", { lineHeight: "2.25rem" }],
        h5: ["1.5rem", { lineHeight: "2rem" }],
        h6: ["1.25rem", { lineHeight: "1.75rem" }],
        p: ["1rem", { lineHeight: "1.75rem" }],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      boxShadow: {
        custom: "0px 4px 32px rgba(0, 0, 0, 0.08)", // 8% opacity is 0.08
      },
    },
  },
  plugins: [],
};
