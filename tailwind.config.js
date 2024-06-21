/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        portadareto: "url('/assets/portadareto.jpg')",
        portadaretogoogle: "url('/assets/portadaretogoogle.jpg')",
        fondomobil: "url('/assets/fondomobil.jpg')",
        senseworkout: "url('/assets/senseworkout.jpg')",
        senseworkoutmobil: "url('/assets/senseworkoutmobil.jpg')",
        fondocarrousel: "url('/assets/fondocarrousel.jpg')",
        fondocarrouselmobil: "url('/assets/fondocarrouselmobil.jpg')",
        fondovideo: "url('/assets/fondovideo.jpg')",
      }),
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },

      colors: {
        videorepro: "#FFBA4C",
        gris_taxagest3: "#1A1A1C",
        azul_taxagest: "#1dc7b9",
        gris_taxagest1: "#282828",
        gris_taxagest2: "#1A1A1C",
        blanc_banner: "#FEFEFE",
      },
    },
  },
  plugins: [],
};
