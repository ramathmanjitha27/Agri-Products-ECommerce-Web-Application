import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
// import {toast} from 'react-toastify'
import {login, logout, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'



function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    // const {name, email, password, password2, role} = formData
    const {email, password, role} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    const toRegister = () => {
        navigate('/register')
    }

    useEffect(() => {

        if(isError) {
            // toast.error(message)
            alert('Incorrect Login Details')
        }

        if(isSuccess || user){
            console.log('success')
            navigate('/dash')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if(isLoading) {
        return <Spinner />
    }

    return (
        <div className='container'>
        <div>
            <h1>
                {/*<FaSignInAlt />Login*/}
                Login
            </h1>
        </div>

        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <input type="email"
                           className='form-control'
                           name="email"
                           id="email"
                           value={email}
                           placeholder='Enter your email'
                           onChange={onChange} />
                </div>
                <div className="mb-3">
                    <input type="password"
                           className='form-control'
                           name="password"
                           id="password"
                           value={password}
                           placeholder='Enter password'
                           onChange={onChange} />
                </div>
                <div className="mb-3">
                    <button type='submit' className='btn btn-block'>
                        Submit
                    </button>
                </div>
            </form>
        </div>

           <div>
               <p>New User? Register Now!</p>
               <button className='btn' onClick={toRegister}>
                   {/*<FaSignOutAlt /> Logout*/}
                   Register
               </button>
           </div>

    </div>
    )

}

export default Login