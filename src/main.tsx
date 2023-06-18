/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

const ROUTER_BASENAME = process.env.NODE_ENV === "development" ? "/" : process.env.PUBLIC_URL;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter basename={ROUTER_BASENAME}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
