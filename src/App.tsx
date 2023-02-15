import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { css, createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { Reset } from "./routes/reset";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./routes/atoms";

export default function App() {
    const isDark = useRecoilValue(isDarkAtom);
    return (
        <>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <Reset />
                <Outlet />
            </ThemeProvider>
        </>
    );
}
