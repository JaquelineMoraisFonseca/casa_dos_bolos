import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#a1575e',
      },
      secondary: {
        main: '#C0666f',
      },
    },
    typography:{
      fontFamily:"BlinkMacSystemFont",
      
    }
  });
  
  theme = responsiveFontSizes(theme);


  export default theme