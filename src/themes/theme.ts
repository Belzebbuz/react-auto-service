import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
      fontFamily: [
        'Montserrat'
      ].join(','),
    },
    palette: {
      primary: { 
        main: '#6ACEEB',
        light: '#B3E1EE',
        dark: '#305E6C'
      }
    }
  });

  export default theme;