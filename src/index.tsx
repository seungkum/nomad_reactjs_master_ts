import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ThemeFile from "./ThemeFile";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";
import { RecoilRoot } from "recoil";
import ToDoList from "./components/ToDoList";
interface IRouterProps {
    toggleDark: () => void;
    // 이 코드는 우리가 toggleDark라는 함수를 받고자 한다고 말하는거 아무 argument도 받지 않고, void를 반환 void는 아무것도없다는뜻
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // Coin
        // children: [
        //     { index: true, element: <Coins /> },
        //     {
        //         path: "/:coinId",
        //         element: <Coin />,
        //         children: [
        //             { path: "price", element: <Price /> },
        //             { path: "chart", element: <Chart /> },
        //         ],
        //     },
        // ],
        children: [{ index: true, element: <ToDoList /> }],
    },
]);
const queryClient = new QueryClient();
ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <RouterProvider router={router} />
            </QueryClientProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
);
