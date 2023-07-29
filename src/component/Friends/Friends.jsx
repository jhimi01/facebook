import React from 'react';
import useUsers from '../../hooks/useUsers';

const Friends = () => {

    const { users } = useUsers()
    console.log('users', users)

    return (
        <div className='w-[20%] opacity-50 sticky top-10 h-full'>
           <h1 className='text-xl text-gray-400 font-semibold'>Suggested Friends</h1>
           <div>
            {users.map((user) =><div key={user._id} className='flex items-center gap-2 mt-5'>
            <img className='w-10 h-10 object-cover rounded-full' src={user?.img} alt="" />
                <h3 className='text-xl font-medium text-gray-500'>{user?.authorName}</h3>
            </div>)}
           </div>
        </div>
    );
};

export default Friends;