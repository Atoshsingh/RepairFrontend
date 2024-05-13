import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from "./Appliances.module.css"
import Header from '../Header.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tick from "../assets/tick.png"
function Appliances() {
  const navigate = useNavigate();
  const { authUser, setAutheUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const params = useParams();
  const [currUser, setCurrUser] = useState("User");
  const [currUserEmail, setCurrUserEmail] = useState("");
  const [currValue, setCurrValue] = useState('intial value');
  const [currTextBox, setCurrTextBox] = useState('');
  const [address, setAddress] = useState('');
  const intNumber = parseInt(params.imageNumebr);
  const [productName, setProductName] = useState("");
  const [succBol, setSuccBol] = useState(false);
  useEffect(() => {
    if (intNumber === 1) {
      setProductName("Smart Watch");
    } else if (intNumber === 2) {
      setProductName("Phone");
    } else if (intNumber === 3) {
      setProductName("AC");
    } else if (intNumber === 4) {
      setProductName("Tablet");
    } else if (intNumber === 5) {
      setProductName("Smart TV");
    } else if (intNumber === 6) {
      setProductName("Device");
    }
  }, [intNumber]);


  const config = {
    // Username:'toshkumrt@gmail.com',
    // Password:'BBA2FCC845EB56CADEF3D927F837FB09777B',
    // Host : "smtp.elasticemail.com",
    // Port:2525,
    // SecureToken: '402538b6-ffc4-43fc-88a1-d9dc0a3518fb',
    // To: `${currUserEmail}`,
    // From: 'toshkumrt@gmail.com',
    // Subject: 'RepairPro order confirmed',
    // Body: `hey ${currUser}. you want to reapir your watch of  ${currValue} brand with the massage ${currTextBox} . Our team will get in touch with u soon.  On a address ${address}
    // your prodoct name is : ${productName}`
    SecureToken: '402538b6-ffc4-43fc-88a1-d9dc0a3518fb',
    To: `${currUserEmail}`,
    From: 'toshkumrt@gmail.com',
    Subject: 'RepairPro Order Confirmation',
    Body:
      `Dear ${currUser}, Thank you for choosing RepairPro for your ${productName} repair needs. We have received your request to repair your ${productName} with the following message: "${currTextBox}". Please ensure that the address provided for the repair service is: ${address}. John will be about to reach in 30 minutes to collect your ${productName}. We appreciate your trust in RepairPro and look forward to assisting you with your ${productName} repair. Best regards, RepairPro Team`
  }

  useEffect(() => {
    const curruser = JSON.parse(localStorage.getItem("setUser"));
    if (curruser) {
      setCurrUser(curruser.name);
      setCurrUserEmail(curruser.email);
    }

  }, [])

  //useEffect
  // useEffect(()=>{
  //   console.log("massagewa chal gail ba check kr la ");
  // },[successfull]);
  const [appli, setAppli] = useState({
    1: [
      "~ select the brand ~",
      "Boat",
      "Noise",
      "Fire-Boltt",
      "Amazfit (by Huami)",
      "Realme",
      "Xiaomi",
      "OnePlus",
      "Crossbeats",
      "Fitbit",
      "Fossil",
      "Garmin",
      "Samsung",
      "Apple"
    ],
    2: ["~ select the brand ~",
      "Micromax",
      "Lava",
      "Xiaomi",
      "Realme",
      "OnePlus",
      "Samsung",
      "Apple",
      "Huawei ",
      "Oppo",
      "Vivo",
      "Motorola ",
      "Poco ",
      "Asus ",
      "Infinix",
      "Honor",
      "Lenovo ",
      "Nokia",
      "iQOO ",
      "Google"
    ],
    3: ["~ select the brand ~", "Blue Star", "Voltas", "Daikin", "Hitachi", "LG", "Samsung", "Whirlpool", "Godrej"],
    4: ["~ select the brand ~", "Samsung", "Apple", "Lenovo", "Micromax", "iBall"],
    5: ["~ select the brand ~",
      "Samsung ",
      "LG ",
      "Sony ",
      "Panasonic ",
      "TCL",
      "Realme ",
      "Mi",
      "Philips "
    ],
    6: ["~ select your device ~",
      "Microwave Oven",
      "Refrigerator",
      "Washing Machine",
      "Air Conditioner",
      "Induction Cooktop",
      "Water Purifier",
      "Electric Kettle",
      "Mixer Grinder",
      "Juicer",
      "Toaster",
      "Food Processor",
      "Television"]
  });

  function orderPlaced() {
    if (window.Email) {
      event.preventDefault();
      Email.send(config).then(() => {
        setSuccBol(true);
        toast.success('Home service has been confirmed', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        toast.success(`Confirmation mail has been sent to your email`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
    }
  }
  function sendToLogin() {
    navigate("/login");
  }
  function setSelectBoxValue(e) {
    setCurrValue(e.target.value);
  }
  function setTextBoxValue(e) {
    setCurrTextBox(event.target.value)
  }
  function setCurrAddress() {
    setAddress(event.target.value);
  }
  return (
    <>
      <Header />
      <div className={style.superMain}>
      {!succBol && <div className={style.divMain}>
        <div className={style.divInner1}>
          <h1>Hey {currUser} </h1>
        </div>

        <div className={style.divInner2}>
          <h1>Book Your Service</h1>
          <div className={style.mostInnerDiv}>
            <label> Select Brand : </label>
            <select className={style.selectBox}
              value={currValue} onChange={setSelectBoxValue}
            >
              {appli[intNumber].map((item, id) => (
                <option key={id}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* //-------------------------- */}

          <div className={style.mostInnerDiv} >
            <label>Address : </label>
            <input className={style.addressInput} value={address} type='text' onChange={setCurrAddress} placeholder="state.. , district.. , pincode.." />
          </div>
          <div className={style.mostInnerDiv} >
            <label > Problem : </label>
            <textarea value={currTextBox} onChange={setTextBoxValue} placeholder='Write Somthing... '></textarea>
          </div>
        </div>
        <div className={style.buttons}>
          <div>
          {isLoggedIn ? <button className={style.Fbuttos} onClick={orderPlaced}>place the service </button> : <button className={style.Fbuttos} onClick={sendToLogin}>login to continue</button>}
          </div>
        </div>
      </div>
      }
      { succBol &&
        <div className={style.successDiv}>
           <img src={tick} className={style.tickImage}/>
           <p > Thanks for Booking Service {currUser} 🥳</p>
          <p> We will repair your {productName} as soon as possible</p>

        </div>
      }
     </div>
      <ToastContainer />
    </>
  );
}

export default Appliances;
