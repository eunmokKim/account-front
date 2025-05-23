import React from "react";
import {Route, Routes} from "react-router-dom";
import Register from "../pages/Register.tsx";
import Home from "../pages/Home.tsx";


const AppRoutes : React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Register/>}/>
        </Routes>
    )
}

export default AppRoutes