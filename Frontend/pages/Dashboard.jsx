import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
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

// ****************************
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
// ****************************


    // useEffect(() => {
    //
    //     if(isError) {
    //         console.log(message);
    //     }
    //
    //     if(!user) {
    //         navigate('/login')
    //     }
    //
    //     dispatch(getGoals())
    //
    //     return () => {
    //         dispatch(reset())
    //     }
    // }, [user, navigate, isError, message, dispatch])
    //
    // if(isLoading) {
    //     return <Spinner />
    // }

    return (
        <div>
        <div>
            {/* code below: if user (i.e. logged in), show name */}
            <h1>Welcome {user && user.name}</h1>
            <p>Buyer Dashboard</p>
        </div>
//********************
        <div>
            <button className='btn' onClick={onLogout}>
                {/*<FaSignOutAlt /> Logout*/}
                Logout
            </button>
        </div>
//********************
        {/*<GoalForm />*/}

        {/*<section className="content">*/}
        {/*    {goals.length > 0 ? (*/}
        {/*        <div className="goals">*/}
        {/*            {goals.map((goal) => (*/}
        {/*                <GoalItem key={goal._id} goal={goal} />*/}
        {/*            ))}*/}
        {/*        </div>*/}
        {/*    ) : (<h3>You have not set any goals</h3>)}*/}
        {/*</section>*/}
        </div>
    )

}

export default Dashboard