/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#01d0a0",
          "secondary": "#f2f2f2",
          "accent": "#11735b",
          "neutral": "#fff",
          "base-100": "#fff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },

  plugins: [require("daisyui")],

}

