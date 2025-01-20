import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Things from "./components/Things.jsx";

export default function App() {
    return(
        <Router>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/Things/:id"} element={<Things />} />
            </Routes>
        </Router>
    );
}