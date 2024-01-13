/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hogwarts-bg": "url('images/hogwarts-bg.png')",
        "schedule-bg": "url('images/background.png')",
      },
    },
  },
  plugins: [],
};
