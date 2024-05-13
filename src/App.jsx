
import Signup from "./files/Signup";
import Signin from "./files/Signin";
import Middle from "./files/Home.jsx"
import Header from "./Header.jsx";
import Home from "./files/Home.jsx";
// import { Link } from "react-router-dom"
import { useAuth } from "./context/AuthContext.jsx";

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Route, RouterProvider ,createBrowserRouter } from 'react-router-dom';
import Appliances from "./files/Appliances.jsx";
import { useEffect } from "react";

function App() {

  const { authUser , setAutheUser , isLoggedIn ,  setIsLoggedIn } = useAuth();
 
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('setUser'));
    if(data){
      setIsLoggedIn(true);
      setAutheUser({
        name:data.name,
        email:data.email,
        password:data.password,
      })
    }
  },[])

  const route  = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"*",
      element:<Home/>
    },
    {
      path:"/appliances/:imageNumebr",
      element:<Appliances/>
    },
    {
      path:"/login",
      element:<><Header/><Signin/></>
    },
    {
      path:"/signup",
      element:<><Header/><Signup/></>
    },
  ])
  return (
    <>

    <RouterProvider router={route}/>
    </>
  )
}

export default App
