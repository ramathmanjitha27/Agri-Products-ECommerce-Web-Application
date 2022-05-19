import React from 'react';
import NavBar from "./Components/NavBar";
import Cart from './Components/Cart'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App(){
    return(
        <div>
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/Cart" element={<Cart/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/dash" element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App;