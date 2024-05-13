import { useState } from "react";
import style from './Forms.module.css';
import { Link , json, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style2 from "./Home.module.css";
import { useAuth } from "../context/AuthContext";

function Signin() {
    const navigate = useNavigate()
    const {
        authUser , setAutheUser , isLoggedIn , setIsLoggedIn } = useAuth();

    const [user, setUser] = useState({ email: "", password: "", name: "" });
    const [values, setValue] = useState({ email: "", password: "" });
    const [a, setA] = useState(0);
    function setEmail(event) {

        setValue(c => ({ ...c, email: event.target.value }))
    }
    function setPassword(event) {
        setValue(c => ({ ...c, password: event.target.value }))
    }
    const submit = async () => {
        event.preventDefault();
        const response = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            body: JSON.stringify({ email: values.email, password: values.password }),
            headers: {
                "Content-Type": "application/json"
            }

        })
        let res = await response.json();
        if(response.status == 400){
            toast.error(`${res.problem}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
        }
        else{
            toast.success(`welcome ${res[0].name}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setUser(res);
            setIsLoggedIn(true);
            setAutheUser({
                name:res[0].name,
                email:res[0].email,
                password:res[0].password,

            })
            const obj = {
                name:res[0].name,
                email:res[0].email,
                password:res[0].password
            }
            localStorage.setItem('setUser',JSON.stringify(obj));
            navigate("/")
        }
    }
    return (
       <>
       <div className={style.upDiv}>
                <div className={style.inDiv}>
                    <h1 className={style.heading}>
                        LOGIN
                    </h1>
                    <form className={style.forms}>
                        <input className={style.loginEmail} type="email" placeholder='email' onChange={setEmail} required />
                        <input className={style.loginPassword} type="text" placeholder='password' onChange={setPassword} required />
                        <button className={style.buttones} onClick={submit}>Submit</button>
                        <div className={style.downer}>
                         <label className={style.labeling}>Not a member ? </label>  <Link to="/signup" className={style.links}>
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
                {/* //{user &&  <h2 > user logged in {user[0].email}</h2>} */}
            </div>
            {/* {authUser && <h1>Logged in </h1>} */}
            <ToastContainer />
        </>
    );
}
export default Signin;

/*

import React, { useState } from 'react';
import ComponentToOpen from './ComponentToOpen'; // Import the component you want to open

const App = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage component visibility
    const handleClick = () => {
        setIsOpen(true); // Set isOpen to true when the button is clicked
    };
    return (
        <div>
            <button onClick={handleClick}>Open Component</button>
            {isOpen && <ComponentToOpen />} {/* Render the component if isOpen is true */
//             </div>
//         );
//     };
//     export default App;
//  */