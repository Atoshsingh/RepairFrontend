import React , {useState , useContext , useEffect, createContext} from 'react';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props){
    const [authUser , setAutheUser] = useState(null)
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const values={
        authUser , 
        setAutheUser , 
        isLoggedIn , 
        setIsLoggedIn 
    }

    return (
        <AuthContext.Provider value={values}>{props.children} </AuthContext.Provider>
    )
}