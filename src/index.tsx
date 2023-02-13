import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme, theme } from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
const queryClient = new QueryClient();
ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
