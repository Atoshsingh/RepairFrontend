import { useState } from 'react';
import style from './Forms.module.css';
import { Link ,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style2 from "./Home.module.css";
function Signup() {
    const navigate = useNavigate();

    const [values, setValue] = useState({ name:"", email: "", password: "", confirm_password: "" });
    function setName(event) {
        setValue(c => ({ ...c, name: event.target.value }));
        // console.log(values.name);
    }
    function setEmail(event) {
        setValue(c => ({ ...c, email: event.target.value }))
    }
    function setPassword(event) {
        setValue(c => ({ ...c, password: event.target.value }))
    }
    function setConfirm(event) {
        setValue(c => ({ ...c, confirm_password: event.target.value }))
    }
    const submit = async () => {
        event.preventDefault();
        // console.log(values);
        const res = await fetch("http://localhost:3000/user/signup", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const respo = await res.json();

        if (res.status == 400) {
            console.log("getting 400");
            toast.error(`${respo.problem}`, {
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
        if (res.status == 200) {
            console.log("getting 200");
            toast.success("Account created try to login..", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                
            });
            setValue({name:"", email: "", password: "", confirm_password: "" })
            // navigate("/login")
        
        }
    }
    return (
            <div className={style.upDiv}>
                <div className={style.inDiv}>
                <h1 className={style.heading}>
                        CREATE ACCOUNT
                    </h1>
                    <form className={style.forms}>
                        <input className={style.loginName} type="text" placeholder='username' onChange={setName} required />
                        <input className={style.loginEmail} type="email" placeholder='email' onChange={setEmail} required />
                        <input className={style.loginPassword} type="text" placeholder='password' onChange={setPassword} required />
                        <input className={style.loginConfirmPassword} type="text" onChange={setConfirm} placeholder='confirm password' required />
                        <button className={style.buttones} onClick={submit}>Submit</button>
                        <div className={style.downer}>
                        <label className={style.labeling}> have an Account ? </label> <Link to="/login" className={style.links}>
                            Login
                        </Link>
                        </div>
                    </form>
                </div>
            <ToastContainer />
        </div>
    );
}
export default Signup;
