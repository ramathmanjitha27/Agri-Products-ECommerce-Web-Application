import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export default function ViewItemFarmer(){
    const _id =useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(()=>{
        setTitle(localStorage.getItem('title'));
        setPrice(localStorage.getItem('price'));
        setDescription(localStorage.getItem('description'));
    },[])

    return (
        <div>
            <h1>Welcome to view item page</h1>
            <br/>

            <h4>Item title : {title}</h4>
            <h4>Item price : {price}</h4>
            <h4>Item description : {description}</h4>

            <br/>
            <Link to={'/FarmerHome'}>
                <button>Back</button>
            </Link>

            <br/><br/>
            <Link to={'/FarmerHome'}>
                <button>Add Cart</button>
            </Link>

        </div>
    )
}