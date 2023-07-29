import React, { useCallback, useContext, useRef } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { IoClose } from 'react-icons/io5';
import { FcGallery } from 'react-icons/fc';

const PostModal = ({setOpenPostModal}) => {
    const { user } = useContext(AuthContext)
    const fileInputRef = useRef(null);

    // Function to handle file upload
    const handleFileUpload = (event) => {
      const selectedFile = event.target.files[0];
      // Handle the selected file here (e.g., upload to server, process, etc.)
    };

    return (
        <form className='w-[500px] rounded-lg absolute bg-base-100 z-20 shadow-2xl pb-5 px-5 PostModal'>
       <div className='flex items-center my-3 justify-around'>
       <h1 className='text-center text-xl font-semibold'>Create Post</h1>
        <button onClick={()=>setOpenPostModal(false)} className='bg-base-200 rounded-full p-3 text-xl text-start'><IoClose /></button>
       </div>
        <hr />
        <div className='flex items-center gap-2 m-3'>
            <img className='w-14 rounded-full h-14 object-cover' src={user?.photoURL} alt="user photo" />
            <h3 className='text-sm font-bold'>{user?.displayName}</h3>
        </div>
        <div className='h-[100px]'>
        {/* <input type="text" placeholder="Type here" className="input w-full" /> */}
        <textarea className="textarea text-2xl w-full" placeholder={`What's on your mind, ${user?.displayName.split(' ')[0]} ?`}></textarea>
        </div>
            <input
        ref={fileInputRef}
        type='file'
        className='hidden' // Hide the actual input element
        // Add the necessary event handlers for file upload
        onChange={handleFileUpload}
      />
      <label
        className='input border-gray-300 border-2 flex items-center justify-between px-10 cursor-pointer'
        onClick={() => fileInputRef.current.click()} // Trigger file input click
      >
        <h1 className='text-'>Add to your post</h1>
        <FcGallery className='text-2xl' />
      </label>
      <button type='submit' className='btn btn-secondary w-full mt-3'>Post</button>
        </form>
    );
};

export default PostModal;