import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme, theme } from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ThemeFile from "./ThemeFile";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Coins /> },
            {
                path: "/:coinId",
                element: <Coin />,
                children: [
                    { path: "price", element: <Price /> },
                    { path: "chart", element: <Chart /> },
                ],
            },
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
