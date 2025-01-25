import React, { useContext, useState } from "react";
import userpng from "../../../public/user.png";
import { BiSearch } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { RiLiveFill } from "react-icons/ri";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import usePsots from "../../hooks/usePsots";
import SinglePost from "../SinglePost/SinglePost";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AuthContext } from "../../Provider/AuthProvider";
import PostModal from "../PostModal/PostModal";
import "./Feed.css";

const Feed = () => {
  const [openPostModal, setOpenPostModal] = useState(false);
  const { posts, isLoading, refetch } = usePsots();
  console.log(posts);
  const { user } = useContext(AuthContext);

  return (
    <div className="lg:w-[40%] w-full mx-auto">
      <div
        onClick={() => setOpenPostModal(true)}
        style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
        className="p-4 bg-base-100 rounded-xl "
      >
        <div className="flex items-center gap-3 p-1">
          {user ? (
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={user?.photoURL}
            />
          ) : (
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={userpng}
            />
          )}
          <div className="flex items-center  w-full">
            <input
              type="text"
              name="text"
              value=""
              className="py-2 md:px-4 px-1 bg-base-200 rounded-full w-full"
              placeholder={`What's on your mind, ${
                user?.displayName.split(" ")[0]
              }?`}
            />
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex items-center gap-2">
          {/* live vedio */}
          <button className="flex md:flex-nowrap flex-wrap items-center gap-2 lg:text-xl p-2 hover:bg-base-200 rounded-lg">
            <RiLiveFill className="text-[#f02849]" /> Live video
          </button>
          {/* photos or vedios */}
          <button className="flex items-center gap-2 lg:text-xl p-2 hover:bg-base-200 rounded-lg">
            <IoMdPhotos className="text-[#45bd62]" /> Photo/video
          </button>
          {/* feelings */}
          <button className="flex items-center gap-2 lg:text-xl p-2 hover:bg-base-200 rounded-lg">
            <BsFillEmojiHeartEyesFill className="text-[#f7b928]" />{" "}
            Feeling/activity
          </button>
        </div>
      </div>
      {openPostModal && <div className="overlayCustom" />}
      {openPostModal && (
        <PostModal setOpenPostModal={setOpenPostModal}></PostModal>
      )}

      {/* allposts */}
      <SkeletonTheme
        baseColor="#c7c7c7"
        height="200"
        highlightColor="#f0f8ff7e"
      >
        {isLoading ? (
          <div className="grid grid-cols-1">
            <div className="col-span-1 rounded-2xl shadow-lg mt-5">
              <Skeleton height={300} />
            </div>
            <div className="col-span-1 rounded-2xl shadow-lg mt-5 ">
              <Skeleton height={300} />
            </div>
            <div className="col-span-1 rounded-2xl shadow-lg mt-5">
              <Skeleton height={300} />
            </div>
            <div className="col-span-1 rounded-2xl shadow-lg mt-5">
              <Skeleton height={300} />
            </div>
            <div className="col-span-1 rounded-2xl shadow-lg mt-5">
              <Skeleton height={300} />
            </div>
            <div className="col-span-1 rounded-2xl shadow-lg mt-5">
              <Skeleton height={300} />
            </div>
          </div>
        ) : (
          <div>
            {posts.map((post, index) => (
              <SinglePost
                key={index}
                postId={post?._id}
                authorImage={post?.authorImage}
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
        )}
      </SkeletonTheme>
    </div>
  );
};

export default Feed;
