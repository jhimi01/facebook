import React, { useContext } from "react";
import useMyPost from "../../hooks/useMyPost";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import SinglePost from "../../component/SinglePost/SinglePost";
import { AuthContext } from "../../Provider/AuthProvider";

const ProfilePage = () => {
  const myposts = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Helmet>
        <title>Profile | facebook</title>
      </Helmet>
      <div className="bg-[#f7e9e9] h-[180px] relative flex items-center justify-center">
        <img
          className="w-40 h-40 border-4 border-rose-300 rounded-full object-cover absolute top-20"
          src={user?.photoURL}
          alt=""
        />
        <h1 className="absolute top-64 text-6xl">{user?.displayName}</h1>
      </div>

      {myposts.length !== 0 ? (
        <div className=" md:w-2/3 w-full mx-auto mt-40">
          {myposts.map((profile) => (
            <SinglePost
              key={profile._id}
              authorImage={profile?.authorImage}
              img={profile?.img}
              authorName={profile?.authorName}
              email={profile?.email}
              status={profile?.status}
              uploadedtime={profile?.uploadedtime}
              likes={profile?.likes}
              comments={profile?.comments}
              share={profile?.share}
            />
          ))}
        </div>
      ) : (
        <h1 className="text-6xl capitalize text-center mt-40 text-gray-400">
          You don't Have any post yet
        </h1>
      )}
    </div>
  );
};

export default ProfilePage;
