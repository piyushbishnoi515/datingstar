/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': "'Raleway', sans-serif",
        'inter': "'Inter', sans-serif",
      },
      colors: {
        'yellow': "#F7B103",
        'light-white': "#FFFFFF30",
        'light-gray': "#FFFFFF4D",
        'off-white': "#FFFFFF1A",
        'off-gray': "#191919",
        'gray':"#444444"
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        },
      },
    },
  },
  plugins: [],
};

