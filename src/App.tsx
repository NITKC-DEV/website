/** @format */

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, Link, redirect } from "react-router-dom";
import Header from "./components/modules/Header.tsx";
import NotFound from "./components/pages/status/NotFound.tsx";
import Home from "./components/pages/Home.tsx";
import Mechanical from "./components/pages/departments/mechanical.tsx";
import Electrical from "./components/pages/departments/electrical.tsx";
import ControlEngineering from "./components/pages/departments/control_engineering.tsx";
import Information from "./components/pages/departments/information.tsx";
import CivilEngineering from "./components/pages/departments/civil_engineering.tsx";

function App() {
    const theme = createTheme({
        palette: {
            mode: "light",
            primary: {
                main: "#00428e",
            },
            secondary: {
                main: "#00a0ea",
            },
        },
    });
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <p>木更津高専22s非公式Webページです(工事中)</p>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/mechanical">機械工学科</Link>
                    </li>
                    <li>
                        <Link to="/electrical">電気電子工学科</Link>
                    </li>
                    <li>
                        <Link to="/control_engineering">電子制御工学科</Link>
                    </li>
                    <li>
                        <Link to="/information">情報工学科</Link>
                    </li>
                    <li>
                        <Link to="/civil_engineering">環境都市工学科</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="*(/+)" loader={({ params }) => redirect(params["*"] || "/")} />
                    </Route>
                    <Route path="/mechanical" element={<Mechanical />} />
                    <Route path="/electrical" element={<Electrical />} />
                    <Route path="/control_engineering" element={<ControlEngineering />} />
                    <Route path="/information" element={<Information />} />
                    <Route path="/civil_engineering" element={<CivilEngineering />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
