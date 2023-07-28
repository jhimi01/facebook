import React from 'react';
import userpng from "../../../public/user.png";
import { BiSearch } from 'react-icons/bi';
import { IoMdPhotos } from 'react-icons/io';
import { RiLiveFill } from 'react-icons/ri';
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';

const Feed = () => {
    return (
        <div className='w-[40%] mx-auto'>
            <div style={{ 'boxShadow': '0 3px 10px rgb(0 0 0 / 0.2)'}} className="p-4 rounded-xl bg-base-100">
              <div className="flex items-center gap-3 p-1">
                <img className='rounded-full w-10' src={userpng} />
                <div className="flex items-center  w-full">
            <input
              type="text"
              name="text"
              className="py-2 md:px-4 px-1 bg-base-200 rounded-full w-full"
              placeholder="What's on your mind, jhimi?"
            />
           
          </div>
              </div>
          <hr  className="my-3"/>
          <div className='flex items-center gap-2'>
            {/* live vedio */}
            <button className='flex items-center gap-2 text-xl p-2 hover:bg-base-200 rounded-lg'><RiLiveFill className='text-[#f02849]'/> Live video</button>
            {/* photos or vedios */}
            <button className='flex items-center gap-2 text-xl p-2 hover:bg-base-200 rounded-lg'><IoMdPhotos className='text-[#45bd62]'/> Photo/video</button>
            {/* feelings */}
            <button className='flex items-center gap-2 text-xl p-2 hover:bg-base-200 rounded-lg'><BsFillEmojiHeartEyesFill className='text-[#f7b928]'/> Feeling/activity</button>
          </div>
              </div>
        </div>
    );
};

export default Feed;