import React from "react";
import {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Item(){

    const [items, setItems] = useState([]);

    useEffect(() =>{
        function getItems(){
            axios.get("http://localhost:8000/item").then((res) => {
                console.log(res.data);
                setItems(res.data.existingPost);
            }).catch( (err) => {
                alert(err.message);
            })
        }
        getItems();
    }, [])

    return(
        <div>
            <h1>Item Page</h1>
            <Link to={'/AddItem'}>
                <button>Add Item</button>
            </Link>

            <table>
                <thead>
                <tr>
                    <th> index</th>
                    <th>Item name</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>View</th>

                </tr>
                </thead>
                <tbody>
                {items.map((item, index)=> {

                    const passItem = (item) =>{
                        let {_id, title, price, description} = item;
                        console.log(_id);
                        localStorage.setItem('id',_id)
                        localStorage.setItem('title',title)
                        localStorage.setItem('price',price)
                        localStorage.setItem('description',description)
                    }

                    return (
                        <tr>
                            <td key={index}>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>

                            <td>
                                <Link to={'/viewitem/'+item._id}>
                                    <button onClick={()=>passItem(item)}>View</button>
                                </Link>
                            </td>

                            <td>
                                <Link to={'/AddQuantity/'+item._id}>
                                <button onClick={()=>passItem(item)}>Add to Cart</button>
                                </Link>
                            </td>

                        </tr>

                    )
                })}
                </tbody>
            </table>

            <br/>
            <br/>

        </div>


    )
}