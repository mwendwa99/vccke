import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1D1929",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    h1: {
      fontSize: "48px",
      fontWeight: 700,
      color: "#CD4D88",
    },
    h2: {
      fontSize: "36px",
      fontWeight: 700,
      color: "#283847",
    },
    h4: {
      fontSize: "24px",
      fontWeight: 700,
      color: "#31B049",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      color: "#283847",
    },
    button: {
      fontSize: "20px",
      fontWeight: "medium",
      color: "#283847",
      textTransform: "sentencecase",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          borderBottom: "1px solid #EAEAEA",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 16px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: "#FFCD42",
          color: "#283847",
          borderRadius: 10,
          "&:hover": {
            color: "#fff",
          },
        },
        text: {
          backgroundColor: "#fff",
          color: "#283847",
        },
      },
    },
  },
});

export default theme;
