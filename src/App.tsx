import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { css, createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { Reset } from "./routes/reset";

export default function App() {
    const [isDark, setIsDark] = useState(false);
    const toggleDark = () => setIsDark((current) => !current);

    return (
        <>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <Reset />
                <Outlet context={{ toggleDark }} />
            </ThemeProvider>
        </>
    );
}
