import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error404 from "./pages/Error/Error404";
import Layout from "./components/Layout/Layout";
import Housing from "./pages/Housing/Housing";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default App;