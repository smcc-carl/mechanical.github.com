/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  theme: {
    extend: {
      container:{
      center:true,
      padding:'10%',
    }},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}