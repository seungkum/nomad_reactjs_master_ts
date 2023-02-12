import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { css, createGlobalStyle } from "styled-components";
import { Reset } from "./routes/reset";

export default function App() {
    return (
        <>
            <Reset />
            <Outlet />
        </>
    );
}
