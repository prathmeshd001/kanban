import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Inter, sans-serif",
    },
});

function App() {
    return (
        <div>
            <BrowserRouter>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Dashboard />} />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
