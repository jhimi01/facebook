import { createContext, useState } from "react";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [ user, setUSer] = useState(null)

    // sing up--------------


    // up user--------------


    // sing in--------------


    // logout--------------



    const authInfo ={
        user,
        loader,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;