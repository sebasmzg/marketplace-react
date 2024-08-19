import { ThemeProvider } from "@emotion/react"
import { createTheme, CssBaseline } from "@mui/material";
import React from "react"

type ThemeProps = {
    children: JSX.Element
};

enum ThemePalette {
    BG = "#12181d",
    LIME= "#c8fa5f",
    FONT_GLOBAL= " 'JetBrains Mono', monospace",
}

const theme = createTheme({
    palette:{
        mode: "dark",
        background: {
            default:ThemePalette.BG,
        },
        primary: {
            main: ThemePalette.LIME,
        },
    },
    typography: {
        fontFamily: ThemePalette.FONT_GLOBAL,
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em",
                },
            },
        },
    }
});

export const ThemeConfig: React.FC<ThemeProps> = ({children})=>{
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}