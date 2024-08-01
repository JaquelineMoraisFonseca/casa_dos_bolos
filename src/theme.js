import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#D8788B',
      },
      secondary: {
        main: '#F2C0CD',
      },
    },
    typography:{
      fontFamily:"BlinkMacSystemFont",
      
    }
  });
  
  theme = responsiveFontSizes(theme);


  export default theme