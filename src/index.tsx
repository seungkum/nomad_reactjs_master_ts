import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme, theme } from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ThemeFile from "./ThemeFile";
import Coins from "./routes/Coins";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <ThemeFile /> },
            { path: "/:coinId", element: <Coins /> },
            // { path: "/:coin" },
        ],
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
