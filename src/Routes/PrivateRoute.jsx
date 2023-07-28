import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const PrivateRoute = ({children}) => {
    const { user, loader} = useContext(AuthContext)
    let location = useLocation();

    if (loader) {
       
      return <div>loading...</div>
    }
    
    if (user) {
        return children;
    }
    toast.warn('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    return <>
        <Navigate to="/login" state={{ from: location }} replace />
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </>

};


export default PrivateRoute;