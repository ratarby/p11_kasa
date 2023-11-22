import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error404 from "./pages/Error/Error404";
import Layout from "./components/Layout/Layout";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default App;