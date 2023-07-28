import React from 'react';
import {Helmet} from "react-helmet";
import { Link, Outlet } from 'react-router-dom';

const Users = () => {
    return (
        <div>
              <Helmet>
                <title>user | facebook</title>
            </Helmet>
           <div className='flex justify-around'>
           <div>
                <Link to='/user/users'><p>friends</p></Link>
                <Link to='/user/use'><p>friends</p></Link>
                <Link to='/user/usrs'><p>friends</p></Link>
                <Link to='/user/ers'><p>friends</p></Link>
            </div>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Users;