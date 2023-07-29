import React, { useState } from 'react';
import userpng from "../../../public/user.png";
import { AiFillCloseCircle, AiFillLike, AiOutlineComment, AiOutlineLike } from 'react-icons/ai';
import { PiShareFatLight } from 'react-icons/pi';

const SinglePost = ({authorImage,img, authorName, email, status,uploadedtime, likes, comments, share}) => {

  const [opneModal, setOpenModal] = useState(false)

    return (
        <div style={{ 'boxShadow': '0 3px 10px rgb(0 0 0 / 0.2)'}} className='bg-base-100 rounded-xl my-5 py-4'>
            <div className='flex justify-between px-4'>
                <div className='flex items-center gap-2'>
                    <img className="w-10 rounded-full" src={userpng} alt="" />
                   <div>
                   <h2 className='text-lg font-semibold'>{authorName}</h2>
                   <p className='text-xs text-gray-500'>{uploadedtime}</p>
                   </div>
                </div>
                {/* <details className="dropdown">
  <summary className="btn bg-none text-2xl text-gray-600 font-bold">...</summary>
  <ul className="p-2 shadow menu font-semibold dropdown-content z-[1] bg-base-100 rounded-box w-52">
   
  </ul>
</details> */}
<div className="dropdown">
  <label tabIndex={0} className="cursor-pointer p-3 bg-none text-2xl text-gray-600 font-bold">...</label>
  <ul tabIndex={0} className="dropdown-content z-[1] font-semibold menu p-2 shadow bg-base-100 rounded-box w-32">
  <li><a>Edite</a></li>
    <li><a>Delete Post</a></li>
  </ul>
</div>
            </div>
            {/* img section */}
            <div className='py-3'>
            <p className='px-4 mb-2 font-normal'>{status}</p>
                <img src={img} />
            </div>
            {/* likes, comments, share */}
           <div>
          <div className='flex items-center justify-between px-4 font-semibold'>
          <p className='flex items-center gap-2  py-2'><AiFillLike className='text-[#1877F2] text-2xl'/>likes {likes}</p>

           {/* Open the modal using ID.showModal() method */}
<button className='hover:underline' onClick={()=>setOpenModal(!opneModal)}>comments {comments?.length}</button>
{opneModal && <div className='bg-[#f3f3f3] p-5 rounded-md  absolute w-[400px]'>
              <div className='flex items-center justify-between mb-4 text-xl shadow-2xl'>
              <h1>Comments {comments?.length}</h1>
              <button onClick={()=>setOpenModal(!opneModal)}><AiFillCloseCircle /></button>
              </div>
               
               <div>
                {comments?.map(comment => <div className='bg-base-300 rounded-2xl py-2 text-sm px-2 mb-3'>
                <h3 className='font-bold'>{comment?.authorName}</h3>
                <p className='text-gray-500 font-thin'>{comment?.text}</p>
                </div>)}
               </div>
            </div>}
          </div>
           <hr />
           <div className='flex items-center justify-around pt-3'>
                <button className='text-xl flex items-center   gap-2'><AiOutlineLike className='text-2xl' /> Like</button>
                <button className='text-xl flex items-center   gap-2'><AiOutlineComment className='text-2xl' />Comment</button>
                <button className='text-xl flex items-center   gap-2'><PiShareFatLight className='text-2xl' />Share</button>
            </div>
           </div>
           
        </div>
    );
};

export default SinglePost;