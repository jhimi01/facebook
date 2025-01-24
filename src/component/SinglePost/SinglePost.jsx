import React, { useContext, useEffect, useState } from "react";
import {
  AiFillCloseCircle,
  AiFillLike,
  AiOutlineComment,
  AiOutlineLike,
} from "react-icons/ai";
import axios from "axios";
import { PiShareFatLight } from "react-icons/pi";
import { AuthContext } from "../../Provider/AuthProvider";
import { GrClose } from "react-icons/gr";
import useMyPost from "../../hooks/useMyPost";
import Swal from "sweetalert2";
import usePsots from "../../hooks/usePsots";

const SinglePost = ({
  postId,
  authorImage,
  img,
  authorName,
  email,
  status,
  uploadedtime,
  likes,
  comments,
}) => {
  const [opneModal, setOpenModal] = useState(false);
  const [liked, setLiked] = useState(false); // Track like state
  // const [likeCount, setLikeCount] = useState(likes || 0);
  const { user } = useContext(AuthContext);
  
  const { refetch } = usePsots();

  // console.log("like", likeCount)

  // Assuming 'postId' is passed as a prop to your SinglePost component
  const handleDeletePost = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmed) return;

    try {
      axios
        .delete(
          `https://facebook-server-phi.vercel.app/myposts/${postId}?email=${user?.email}`
        )
        .then((res) => {
          // console.log("Delete", res.data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Deleted Post",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
        })
        .catch((error) => {
          console.error("Delete request failed:", error);
          // Handle error if the post request fails
        });
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("An error occurred while deleting the post.");
    }
  };

  useEffect(() => {
    if (Array.isArray(likes) && likes.some((like) => like.email === user?.email)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [likes, user]);

  const handleLike = async () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Please login to like the post.",
      });
      return;
    }

    try {
      const response = await axios.post(`https://facebook-server-phi.vercel.app/posts/like`, {
        postId,
        userEmail: user.email,
      });

      if (response.data.success) {
        const { message } = response.data;

        if (message === "added") {
          setLiked(true);
        } else if (message === "removed") {
          setLiked(false);
        }

        refetch();
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const formatUploadedTime = (time) => {
    const date = new Date(time);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };

  return (
    <div
      style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
      className="bg-base-100 rounded-xl my-5 py-4"
    >
      <div className="flex justify-between px-4">
        <div className="flex items-center gap-2">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={authorImage}
            alt=""
          />
          <div>
            <h2 className="text-lg font-semibold">{authorName}</h2>
            <p className="text-xs text-gray-500">{formatUploadedTime(uploadedtime)}</p>
          </div>
        </div>
        {email === user?.email ? (
          <div className="dropdown">
            <label
              tabIndex={0}
              className="cursor-pointer p-3 bg-none text-2xl text-gray-600 font-bold"
            >
              ...
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] font-semibold menu p-2 shadow bg-base-100 rounded-box w-32"
            >
              <li>
                <a>Edite</a>
              </li>
              <li>
                <button onClick={handleDeletePost}>Delete Post</button>
              </li>
            </ul>
          </div>
        ) : (
          <button className=" p-2 text-xl">
            <GrClose />
          </button>
        )}
      </div>
      {/* img section */}
      <div className="py-3">
        <p className="px-4 mb-2 font-medium">{status}</p>
        <img src={img} className="w-full object-cover" />
      </div>
      {/* likes, comments, share */}
      <div>
        <div className="flex items-center justify-between px-4 font-semibold">
          <p className="flex items-center gap-2  py-2">
            <AiFillLike className="text-[#1877F2] text-2xl" />
            likes {likes.length}
          </p>

          {/* Open the modal using ID.showModal() method */}
          <button
            className="hover:underline"
            onClick={() => setOpenModal(!opneModal)}
          >
            comments {comments?.length}
          </button>
          {opneModal && (
            <div className="bg-[#f3f3f3] p-5 rounded-md  absolute w-[400px]">
              <div className="flex items-center justify-between mb-4 text-xl shadow-2xl">
                <h1>Comments {comments?.length}</h1>
                <button onClick={() => setOpenModal(!opneModal)}>
                  <AiFillCloseCircle />
                </button>
              </div>

              <div>
                {comments?.map((comment) => (
                  <div className="bg-base-300 rounded-2xl py-2 text-sm px-2 mb-3">
                    <h3 className="font-bold">{comment?.authorName}</h3>
                    <p className="text-gray-500 font-thin">{comment?.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <hr />
        <div className="flex items-center justify-around pt-3">
          <button
            onClick={handleLike}
            className="text-xl flex items-center   gap-2"
          >
           {liked ? (
              <AiFillLike className="text-3xl text-blue-500" />
            ) : (
              <AiOutlineLike className="text-2xl" />
            )}
            Like
          </button>
          <button className="text-xl flex items-center   gap-2">
            <AiOutlineComment className="text-2xl" />
            Comment
          </button>
          <button className="text-xl flex items-center   gap-2">
            <PiShareFatLight className="text-2xl" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
