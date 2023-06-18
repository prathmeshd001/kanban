import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <CssBaseline />
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Dashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
