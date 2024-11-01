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
      },
      fontFamily: {
        sans: "var(--secondary-font)",
        heading: "var(--primary-font)",
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "3.5rem" }], // 48px
        h2: ["2.5rem", { lineHeight: "3rem" }], // 40px
        h3: ["2rem", { lineHeight: "2.5rem" }], // 32px
        h4: ["1.75rem", { lineHeight: "2.25rem" }], // 28px
        h5: ["1.5rem", { lineHeight: "2rem" }], // 24px
        h6: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        p: ["1rem", { lineHeight: "1.75rem" }],
      },
    },
  },
  plugins: [],
};
