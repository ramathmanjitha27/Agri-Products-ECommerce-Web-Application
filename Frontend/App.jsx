import React from 'react';
import NavBar from "./Components/NavBar";
import Cart from './Components/Cart'
import Register from './pages/Register'
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App(){
    return(
        <div>
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/Cart" element={<Cart/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App;