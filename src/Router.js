//1. IMPORTACIONES
import React from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./components/Home"
import Register from "./components/Auth/Register"
import Login from "./components/Auth/Login"



//2. FUNCION
const Router = () => {
    return ( 
        <>
            <BrowserRouter >
                <Routes>
                    <Route path = "/" element = {<Layout />} >
                        <Route index element = {<Home />} />
                        <Route path ="registro" element = {<Register />} />
                        <Route path = "iniciar-sesion" element= {<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

//3. EXPORTACIÓN
export default Router