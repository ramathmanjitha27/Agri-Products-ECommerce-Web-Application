import React from "react";
import {Link} from "react-router-dom";

export default function cart(){
    return(
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name of product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete Item</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <Link to = "/checkoutItems">
                Click to go to Checkout
            </Link>
        </div>
    )
}