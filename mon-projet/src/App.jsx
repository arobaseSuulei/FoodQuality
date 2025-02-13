import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Things from "./components/Things.jsx";
import Test from "./Test.jsx";
import Waitlist from "./components/Waitlist.jsx";



export default function App() {


    return(
        <Router>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/waitylist"} element={<Waitlist/>} />
                <Route path={"/Things/:id"} element={<Things />} />
                <Route path={"/Landing"} element={<Test/>}/>
            </Routes>
        </Router>
    );
}