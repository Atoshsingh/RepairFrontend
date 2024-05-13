import style from './HeaderCss.module.css'
import logo from "../logo/logo-transparent-png.png"
import { useAuth } from './context/AuthContext'

import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const {authUser , 
        setAutheUser , 
        isLoggedIn , 
        setIsLoggedIn} = useAuth();
    function logout(){
        setIsLoggedIn(false);
        setAutheUser(null);
        localStorage.removeItem("setUser");
    }
    return (
        <header >
            <div className={style.headerContainer} >
                <div className={style.headerBlackdiv}>
                    <img className={style.logo} src = {logo}/>
                </div>
                <NavLink className={style.nav}  to="/">
                   Home
                </NavLink>
                {!isLoggedIn && <NavLink className={style.nav} to="/login">
                    Login
                </NavLink>}
                {!isLoggedIn && <NavLink className={style.nav} to="/signup">
                    Signup
                </NavLink>}


                {isLoggedIn &&
                <div className={style.logout} 
                onClick={logout}
                >
                Logout
                </div>
                }
                {
                    isLoggedIn && <h4 className={style.topName}> {authUser.name}</h4>
                }
               
            </div>
        </header>
    )
}
export default Header;