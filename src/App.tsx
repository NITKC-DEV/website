/** @format */

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/modules/Header.tsx";
import NotFound from "./components/pages/status/NotFound.tsx";
import Home from "./components/pages/Home.tsx";
import Mechanical from "./components/pages/department/mechanical.tsx";
import Electrical from "./components/pages/department/electrical.tsx";
import ControlEngineering from "./components/pages/department/control_engineering.tsx";
import Information from "./components/pages/department/information.tsx";
import CivilEngineering from "./components/pages/department/civil_engineering.tsx";

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
                        <Link to="/department/mechanical">機械工学科</Link>
                    </li>
                    <li>
                        <Link to="/department/electrical">電気電子工学科</Link>
                    </li>
                    <li>
                        <Link to="/department/control_engineering">電子制御工学科</Link>
                    </li>
                    <li>
                        <Link to="/department/information">情報工学科</Link>
                    </li>
                    <li>
                        <Link to="/department/civil_engineering">環境都市工学科</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/department/mechanical" element={<Mechanical />} />
                    <Route path="/department/electrical" element={<Electrical />} />
                    <Route path="/department/control_engineering" element={<ControlEngineering />} />
                    <Route path="/department/information" element={<Information />} />
                    <Route path="/department/civil_engineering" element={<CivilEngineering />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
