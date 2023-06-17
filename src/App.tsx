/** @format */

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <h1>NIT, Kisarazu College 22s</h1>
            <p>木更津高専22s非公式Webページです(工事中)</p>
        </ThemeProvider>
    );
}

export default App;
