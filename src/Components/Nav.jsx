import React, { use, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Nav = () => {
    const [isLogin, setisLogin] = useState(false); // this state is used to check if the user is logged in or not

    const location = useLocation(); // this hook is used to get the current location of the user
    const navigate = useNavigate(); // this hook is used to navigate to different pages

    const handleLogin = () => {
        setisLogin(true); // this function is used to set the login state to true
        navigate('/user'); // this function is used to navigate to the user page after login
    }

    const handleLogout = () => {
        setisLogin(false); // this function is used to set the login state to false
        navigate('/home'); // this function is used to navigate to the home page after logout 
    }

    return (
        <div>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>

                {isLogin && (<>
                <li>
                    <Link to="/user">User</Link>
                </li>
                <li>
                    <button onClick={handleLogin}>Log In</button>
                </li>
                </>)}

                {!isLogin && (<>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <button onClick={handleLogout}>Log Out</button>
                </li>
                </>)}

            </ul>
        </div>
  )
}

export default Nav