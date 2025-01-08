import React, { useCallback, useContext, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoClose } from "react-icons/io5";
import { FcGallery } from "react-icons/fc";
import Swal from "sweetalert2";
import axios from "axios";
import usePsots from "../../hooks/usePsots";

const PostModal = ({ setOpenPostModal }) => {
  const { user } = useContext(AuthContext);
  const { refetch } = usePsots();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

  // Move handleFileUpload outside handleSubmit
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file); // Store the selected file in state
    // Handle the selected file here (e.g., upload to server, process, etc.)
  };

  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Convert timestamp to a human-readable format
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const status = form.status.value;

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", fileInputRef.current.files[0]);
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`;
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      const imageUrl = result?.data?.display_url;

      //   send data to the server----------------
      const postData = {
        authorImage: user?.photoURL,
        img: imageUrl,
        authorName: user?.displayName,
        email: user?.email,
        status: status,
        uploadedtime: convertTimestamp(new Date().getTime()),
        likes: 0,
        comments: [],
      };
      axios
        .post("https://facebook-server-phi.vercel.app/posts", postData)
        .then((res) => {
          console.log("post", res.data);
          setOpenPostModal(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "uploaded",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        })
        .catch((error) => {
          console.error("Post request failed:", error);
          // Handle error if the post request fails
        });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] md:w-[500px] rounded-lg absolute bg-base-100 z-20 shadow-2xl pb-5 px-5 PostModal"
    >
      <div className="flex items-center my-3 justify-around">
        <h1 className="text-center text-xl font-semibold">Create Post</h1>
        <button
          onClick={() => setOpenPostModal(false)}
          className="bg-base-200 rounded-full p-3 text-xl text-start"
        >
          <IoClose />
        </button>
      </div>
      <hr />
      <div className="flex items-center gap-2 m-3">
        <img
          className="w-14 rounded-full h-14 object-cover"
          src={user?.photoURL}
          alt="user photo"
        />
        <h3 className="text-sm font-bold">{user?.displayName}</h3>
      </div>
      <div className="h-[100px] border-2 border-gray-300 rounded-md mb-3">
        <textarea
          name="status"
          className="textarea text-2xl resize-none outline-none focus:outline-0 w-full "
          placeholder={`What's on your mind, ${
            user?.displayName.split(" ")[0]
          } ?`} required
        ></textarea>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden" // Hide the actual input element
        // Add the necessary event handlers for file upload
        onChange={handleFileUpload}
      />
      <label
        className="input border-gray-300 border-2 flex items-center justify-between px-10 cursor-pointer"
        onClick={() => fileInputRef.current.click()} // Trigger file input click
      >
        <h1 className="text-">
          {selectedFile ? selectedFile.name : "Add to your post"}
        </h1>
        <FcGallery className="text-2xl" />
      </label>
      <button
        type="submit"
        className="btn btn-secondary w-full mt-3"
        disabled={loading}
      >
        {loading ? "Posting..." : "Post"}
      </button>
    </form>
  );
};

export default PostModal;
