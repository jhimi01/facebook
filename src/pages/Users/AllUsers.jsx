import React, { useContext } from 'react';
import useUsers from '../../hooks/useUsers';
import { AuthContext } from '../../Provider/AuthProvider';

const AllUsers = () => {
    const {users} = useUsers()
    const {user} = useContext(AuthContext)
    const exceptUSer = users.filter(userr => userr.email !== user?.email)
    console.log('except my id',exceptUSer)
    return (
        <div>
            {exceptUSer.map((user, index) => <div key={index}>
                <img src={user?.img} alt="" />
                <h1>{user?.authorName}</h1>
                <div className='flex flex-col'>
                <button className='btn-secondary btn'>Confirm</button>
                <button>Delete</button>
                </div>
            </div>)}
        </div>
    );
};

export default AllUsers;