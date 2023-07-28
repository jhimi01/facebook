import React from 'react';
import useUsers from '../../hooks/useUsers';

const AllUsers = () => {
    const {users} = useUsers()
    console.log(users)
    return (
        <div>
            {users.map((user) => <p>{user?.email}</p>)}
        </div>
    );
};

export default AllUsers;