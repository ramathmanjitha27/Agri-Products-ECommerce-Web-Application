import {useState, useEffect} from 'react'
import Axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
// import GoalForm from '../components/GoalForm'
// import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
// import { getGoals, reset } from '../features/goals/goalSlice'

//**************************
import {logout, reset} from '../features/auth/authSlice'
//***************************



function Dashboard() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth) //used to get the user
    // const {goals, isLoading, isError, message} = useSelector((state) => state.goals)

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");

// ****************************
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
// ****************************

// ************* CHANGE THIS ***************
    useEffect(() => {
        Axios.get("http://localhost:8070/current/view")
            .then((res) => {
                setItems(res.data)
                console.log(res.data);
            })
    }, []);



    return (
        <div>
        <div>
            {/* code below: if user (i.e. logged in), show name */}
            <h1>Welcome {user && user.name}</h1>
            <p>Buyer Dashboard</p>
            <h2 className="page-header">
                Agri Items
            </h2>
        </div>
//********************
        <div>
            <button className='btn' onClick={onLogout}>
                {/*<FaSignOutAlt /> Logout*/}
                Logout
            </button>
        </div>
//********************

        <div className="topnav__search">
            <input type="text" placeholder='Search By Title...' onChange={(e) => {
                setSearch(e.target.value);
            }}/>
            <i className='bx bx-search'></i>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                        <table className="table">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                <th scope="col">View</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items
                                .filter(item => {
                                    if (search == "") {
                                        return item
                                    } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                                        return item
                                    }
                                })
                                .map((item) => {

                                    const setItem = (item) => {
                                        let {_id, title, price, description} = item;
                                        console.log(_id);
                                        localStorage.setItem('id', _id);
                                        console.log(localStorage.getItem('ID'));
                                        localStorage.setItem('title', title);
                                        localStorage.setItem('price', price);
                                        localStorage.setItem('description', description);
                                    }
                                    // ************ Change This ******************
                                    const getItem = () => {
                                        Axios.get("http://localhost:8070/current/view")
                                            .then((getItem) => {
                                                setItems(getItem.data);
                                            })
                                    }

                                    return (
                                        <tr>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                <Link to='/Cart'>
                                                    <button className='btnIcon' onClick={() => setItem(item)}><i
                                                        className='bx bx-edit'></i></button>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )

}

export default Dashboard