/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      mutedColor: "#BDBDBD",
      primaryColor: "#23A6F0",
      lightTextColor: "#FFFFFF",
      darkTextColor: "#252B42",
      secondTextColor: "#737373",
      darkBackgroundColor: "#252B42",
      lightGray1: "#FAFAFA",
      lightBorderColor: "#E6E6E6",
      lightBgColor: "#F9F9F9",
    },
  },
  plugins: [],
});

/* 
ProductListPage
muted-color 
primaryColor
*/
