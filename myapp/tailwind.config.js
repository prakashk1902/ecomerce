/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
   
    extend: {  colors: {
      primary: "#73F32C",
      secondary: "#3DBA08",
      primaryDark: "#2D8907 ",
    },
},
Container:{
  Center:true,
  Padding:{
  DEFAULT:"1 rem",
  Sm:"2rem"
},
  },
  
  plugins: []
}
}