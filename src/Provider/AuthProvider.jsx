import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [ user, setUSer] = useState(null)
    const [ loading, setLoading] = useState(true)

    // sing up--------------
    const signupemail =()=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }


    // up user--------------
    const updateuser =()=>{
            setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }
 


    // sing in--------------
    const login =()=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }
 


    // logout--------------
    const logout =()=>{
        setLoading(true)
        return signOut(auth)
     }
 



    //  manageUSer----------------
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentuser) =>{

            setUSer(currentuser)
            console.log('currentuser', currentuser)
            setLoading(false)
        })
        return()=>{
            return unsubscribe
        }
    },[])



    const authInfo ={
        user,
        signupemail,
        login,
        logout,
        loading,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;