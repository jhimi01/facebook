import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
    const { user, loading} = useContext(AuthContext)
    let location = useLocation();

    if (loading) {
       
      return <div> </div>
    }
    
    if (user) {
        return children;
    }
    Swal.fire('You have to login first')
    return <>
        <Navigate to="/login" state={{ from: location }} replace />
    </>
// email: rinty@gmail.com
// pass: 123456
};


export default PrivateRoute;