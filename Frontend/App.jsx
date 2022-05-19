import React from 'react';
import NavBar from "./Components/NavBar";
import Cart from './Components/Cart'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Payment from "./pages/paymentPage/Payment";

function App(){
    return(
        <div>
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/Cart" element={<Cart/>}/>
                    <Route path="/checkoutItems" element = {<Payment/>} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App;