/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "developer-dashboard":
          "url('/clientregistry/src/assests/showcase.jpg')",
      },
    },
  },
  plugins: [],
};
