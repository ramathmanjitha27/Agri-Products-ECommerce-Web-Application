import React, {useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

export default function AddItemFarmer(){

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescrip] = useState("");

    const handleSubmit = (event) => {
        const newItem = {
            title,
            price,
            description
        }

        axios.post('http://localhost:8080/item', newItem).then(()=>{
            alert(`The item added Successfully`)


        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <div>
            <h2>Add Item</h2>

            <form onSubmit={handleSubmit}>

                <label>Item Title </label>
                <input type="text" id="title" placeholder="Enter Item Title here.." value={title}
                       onChange={(e) =>(
                           setTitle(e.target.value)
                       )}
                />
                <br/>

                <label>Price </label>
                <input type="text" id="price" placeholder="Enter Price" value={price}
                       onChange={ (e) =>(
                           setPrice(e.target.value)
                       )}
                />
                <br/>

                <label>Description </label>
                <input type="text" id="description" placeholder="Enter Description" value={description}
                       onChange={(e)=>(
                           setDescrip(e.target.value)
                       )}
                />
                <br/>
                <br/>

                <input type="submit"/>
            </form>

            <br/>
            <br/>
            {/*<Link to={'#'}>*/}
            {/*    <button >Back</button>*/}
            {/*</Link>*/}
        </div>
    )
}