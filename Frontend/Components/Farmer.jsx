import React from "react";
import {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Item(){

    const [items, setItems] = useState([]);

    useEffect(() =>{
        function getItems(){
            axios.get("http://localhost:8080/item").then((res) => {
                console.log(res.data);
                setItems(res.data.existingPost);
            }).catch( (err) => {
                alert(err.message);
            })
        }
        getItems();
    }, [])

    return(
        <div className="container">
            <center>
            <h1>Welcome to Farmer Home Page</h1>
            </center>
            <br/>
            <Link to={'/AddItem'}>
                <button>Add Item</button>
            </Link>
            <br/>
            <center>
                <u>
                    <h2>Listed Items</h2>
                </u>

            </center>

            <br/>

                <table className="table">
                <thead>
                <tr>
                    <th> index</th>
                    <th>Item name</th>
                    <th>price</th>
                    <th>Description</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>

                </tr>
                </thead>
                <tbody>
                {items.map((item, index)=> {

                    const passItem = (item) =>{
                        let {_id, title, price, description} = item;
                        console.log(_id);
                        localStorage.setItem('_id',_id)
                        localStorage.setItem('title',title)
                        localStorage.setItem('price',price)
                        localStorage.setItem('description',description)
                    }

                    return (
                        <tr>
                            <td key={index}>{index+1}</td>
                            <td>{item.title}</td>
                            <td>Rs. {item.price}</td>
                            <td>{item.description}</td>

                            <td>
                                <Link to={'/viewitem/'+item._id}>
                                    <button onClick={()=>passItem(item)}>View</button>
                                </Link>
                            </td>

                        <td>
                            <Link to={'/edititem/'+item._id}>
                                <button onClick={()=>passItem(item)}>Edit</button>
                            </Link>
                        </td>

                         <td>
                             <button onClick={()=>deleteItem(item)}>Delete</button>
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