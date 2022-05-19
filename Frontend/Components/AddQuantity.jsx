import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function AddQuantity(){

    const [id, setID] = useState('')
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    // const [description, setDescrip] = useState("");

    useEffect(()=>{
        setID(localStorage.getItem('_id'))
        setTitle(localStorage.getItem('title'))
        setPrice(localStorage.getItem('price'))
    },[])

    console.log(id)
    // const add=()=>{
    //     axios.post('http://localhost:8000/cart/5',{id, title, price, quantity})
    //         .then(()=>{
    //             alert(`The item added Successfully`)
    //         })
    //         .catch((err)=>{
    //             alert(err)
    //         })
    // }
    function handleSubmit(event) {
        const newItem = {
            id,
            title,
            price,
            quantity
            // description
        }
        console.log("handle submit called")
        axios.post('http://localhost:8000/cart/7', newItem)
            .then(()=>{
            alert(`The item added Successfully`)

        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <div>
            <h2>Add Quantity for Item</h2>

            <form onSubmit={handleSubmit}>

                <label>Item Title </label>
                <input type="text" id="title" placeholder="Enter Item Title here.." value={title}
                       readOnly
                       onChange={(e) =>(
                           setTitle(e.target.value)
                       )}
                />
                <br/>

                <label>Price </label>
                <input type="text" id="price" placeholder="Enter Price" value={price}
                       readOnly
                       onChange={ (e) =>(
                           setPrice(e.target.value)
                       )}
                />
                <br/>

                <label>Quantity </label>
                <input type="number" id="quantity" placeholder="Enter Quantity"
                       onChange={(e)=>(
                           setQuantity(e.target.value)
                       )}
                />
                <br/>
                <br/>

                <button type='submit' onClick={handleSubmit} >Add</button>
            </form>

            <br/>
            <br/>
            {/*<Link to={'#'}>*/}
            {/*    <button >Back</button>*/}
            {/*</Link>*/}
        </div>
    )
}