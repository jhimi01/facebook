import React from "react";
import lock from "../../../public/lock.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="text-center h-screen flex items-center justify-center flex-col md:w-1/2 mx-auto ">
        <img src={lock} className="h-[200px]" alt="lock" />
        <h3 className="text-[#65676b] text-[20px] font-bold">
          This content isn't available right now
        </h3>
        <p className="text-[#65676b] text-[17px]">
          When this happens, it's usually because the owner only shared it with
          a small group of people, changed who can see it or it's been deleted.
        </p>
        <Link to="/">
          <button className="btn btn-secondary  font-medium text-lg mt-4">
            Go To News Feed
          </button>
        </Link>
        <Link to="/">
          <button className="text-lg mt-1 font-medium text-secondary">
            GO Back
          </button>
        </Link>
        <Link to="/">
          <button className="text-lg font-medium mt-1 text-secondary">
            Visit Help Center
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
