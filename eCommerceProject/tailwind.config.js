/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: { blue: "#1fb6ff", mutedColor: "#BDBDBD", primaryColor: "#23A6F0" },
  },
  plugins: [],
});

/* 
ProductListPage
muted-color 
primaryColor
*/
