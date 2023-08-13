import React from "react";
import { 
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { DetailVideo, Home } from "./screens";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/detail/:uuid" element={<DetailVideo />}/>
                <Route path="*" element={<h1>Error</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
