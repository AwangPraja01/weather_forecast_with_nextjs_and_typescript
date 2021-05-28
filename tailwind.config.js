module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "sunny-background": "url('../public/image/sunny.jpg')",
        "rainy-background": "url('../public/image/rainy.jpg')",
        "cloudy-background": "url('../public/image/cloudy.jpg')",
      }),
      colors: {
        rainy: "#97bbb9",
        cloudy: "#bfdbfe",
        sunny: "#f5eae3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
