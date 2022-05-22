import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function AddQuantity(){

    const {user} = useSelector((state) => state.auth)

    const [id, setID] = useState('')
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    // const [description, setDescrip] = useState("");

    useEffect(()=>{
        setID(localStorage.getItem('id'))
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
    // console.log("cart id",user._id)
    function handleSubmit(event) {
        const newItem = {
            id,
            title,
            price,
            quantity
            // description
        }
        console.log("handle submit called",newItem)
        // console.log("handle submit called",user._id)

        axios.post('http://localhost:8000/cart/'+user._id, newItem)
            .then(()=>{
            alert(`The item added Successfully`)

        }).catch((err)=>{
            alert(err)
        })
    }

    console.log(id,title,price,quantity)

    return(
        <div className='container' style={{width:"70%",margin:"auto"}}>
            <h2>Add Quantity for Item</h2>

            <form >

                <div className="form-group col-md-6">
                <label>Item Title </label>
                <input type="text" class="form-control" id="title" placeholder="Enter Item Title here.." value={title}
                       readOnly
                       onChange={(e) =>(
                           setTitle(e.target.value)
                       )}
                />
                </div>
                <br/>

                <div className="form-group col-md-6">
                <label>Price </label>
                <input type="text" class="form-control" id="price" placeholder="Enter Price" value={price}
                       readOnly
                       onChange={ (e) =>(
                           setPrice(e.target.value)
                       )}
                />
                </div>
                <br/>

                <div className="form-group col-md-6">
                <label>Quantity </label>
                <input type="number" class="form-control" id="quantity" placeholder="Enter Quantity"
                       onChange={(e)=>(
                           setQuantity(e.target.value)
                       )}
                />
                </div>
                <br/>
                <br/>
            <Link to={'/Cart'}>
                <button type='submit' class="btn btn-success" onClick={handleSubmit} >Add</button>
            </Link>
            </form>

            <br/>
            <br/>
            {/*<Link to={'#'}>*/}
            {/*    <button >Back</button>*/}
            {/*</Link>*/}
        </div>
    )
}