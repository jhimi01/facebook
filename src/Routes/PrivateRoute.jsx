import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
    const { user, loader} = useContext(AuthContext)
    let location = useLocation();

    if (loader) {
       
      return <div>loading...</div>
    }
    
    if (user) {
        return children;
    }
    Swal.fire('You have to login first')
    return <>
        <Navigate to="/login" state={{ from: location }} replace />
    </>

};


export default PrivateRoute;