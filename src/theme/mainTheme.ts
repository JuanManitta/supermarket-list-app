import { createTheme } from "@mui/material";



export const mainTheme = createTheme({
    palette: {
        primary: {
            main: "#4dbe86",
        },
        secondary: {
            main: "#d6f0e3",
        },
        background: {
            default: "#b1e2ca",
        },
        info: {
            main: "#a4dec1",
        },
    },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    ":hover": {
                        backgroundColor: "transparent",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    padding: "10px 20px",
                },
            },
        },
       
    },
    typography: {
        fontFamily: "'Rubik', sans-serif",
        fontSize: 16,
    },
});