module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Include index.html
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
