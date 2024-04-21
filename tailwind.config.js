/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

    },
    fontSize:{
      xs : '11px',
    },
    daisyui: {
      themes: ["retro"]
    },
  },
  
  plugins: [require("daisyui")],
}