import React, { useContext } from 'react';
import useUsers from '../../hooks/useUsers';
import { AuthContext } from '../../Provider/AuthProvider';

const AllUsers = () => {
    const {users} = useUsers()
    const {user} = useContext(AuthContext)
    const exceptUSer = users.filter(userr => userr.email !== user?.email)
    console.log('except my id',exceptUSer)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 mx-5'>
            {exceptUSer.map((user, index) => 
           
            <div key={index} className="card h-full card-compact w-[250px] bg-base-100 shadow-md rounded-lg">
  <img className='h-[230px] rounded-t-lg w-full object-cover' src={user?.img} alt="Shoes" />
  <div className="card-body">
    <h2 className="card-title">{user?.authorName}</h2>
    <div className="flex flex-col gap-2">
      <button className="btn bg-[#e7f3ff] text-[#1877f2]">Add Friend</button>
      <button className="btn">Remove</button>
    </div>
  </div>
</div>
            )}
        </div>
    );
};

export default AllUsers;



 {/* <div key={index} className='w-52 h-full bg-base-100'>
                <img className='h-56 w-full object-cover' src={user?.img} alt="" />
                <h1>{user?.authorName}</h1>
                <div className='flex flex-col'>
                <button className='btn-secondary btn'>Confirm</button>
                <button>Delete</button>
                </div>
            </div> */}