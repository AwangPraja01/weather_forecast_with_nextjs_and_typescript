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
        sunny: "#e04934",
        "sunny-hover": "#992b1c",
        "rainy-hover": "#9ce6e4",
        "cloudy-hover": "#60a5fa",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
