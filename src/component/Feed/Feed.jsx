import React from 'react';
import userpng from "../../../public/user.png";
import { BiSearch } from 'react-icons/bi';
import { IoMdPhotos } from 'react-icons/io';
import { RiLiveFill } from 'react-icons/ri';
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import usePsots from '../../hooks/usePsots';
import SinglePost from '../SinglePost/SinglePost';

const Feed = () => {

  const { posts } = usePsots()
  console.log(posts)

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


              {/* allposts */}
              <div>
        {posts.map(post => (
          <SinglePost
            key={post?.authorName}
            img={post?.img}
            authorName={post?.authorName}
            email={post?.email}
            status={post?.status}
            uploadedtime={post?.uploadedtime}
            likes={post?.likes}
            comments={post?.comments}
            share={post?.share}
          />
        ))}
      </div>
      <dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
        </div>
    );
};

export default Feed;