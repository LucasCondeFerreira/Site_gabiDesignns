import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "rgb(225,38 ,114)",
      dark: "#212832",
    },
    secondary: {
      light: "#f1d9ef",
      main: "rgb( 246, 176 ,188)",
      dark: "#FE135E",
    },
    text: {
      primary: "#212832",
      secondary: "#707070",
    },
    error: {
      main: "#FC3C00",
    },
    warning: {
      main: "#FCA600",
    },
    success: {
      main: "#00D34D",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F0F0F0",
      200: "#D7D9DD",
      300: "#C4C4C4",
      400: "#9B9B9B",
    },
  },
  typography: {
    fontFamily: ["Lemon/Milk", "Albra", "Karla", "Quicksand"].join(","),
  },
  shape: {
    borderRadius: "16px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
});

export default theme;
