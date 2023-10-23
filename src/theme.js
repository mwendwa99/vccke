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
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#F3F4F6",
          borderRadius: 10,
          width: "100%",
          padding: "5px",
          border: "1px solid #EAEAEA",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#F3F4F6",
          borderRadius: 20,
          width: "100%",
          padding: "5px",
          "&:hover": {
            backgroundColor: "#CD4D88",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
          },
          "&:hover img": {
            backgroundColor: "#FBBF24",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          "&:hover img": {
            backgroundColor: "#fff",
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          paddingLeft: "0px",
          paddingRight: "0px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "2px",
          backgroundColor: "#CD4D88",
          borderRadius: "10px",
          alignSelf: "flex-end",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
          textDecoration: "none",
          padding: 2,
          "&:hover": {
            color: "#283847",
          },
        },
      },
    },
  },
});

export default theme;
