import React from "react";
import { Helmet } from "react-helmet";
import { Link, Outlet } from "react-router-dom";
import { TiThListOutline } from "react-icons/ti";
import { MdGroups2 } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { BiSolidUserPlus } from "react-icons/bi";

const Users = () => {
  return (
    <div>
      <Helmet>
        <title>user | facebook</title>
      </Helmet>
      <div className="flex">
        <div className="bg-base-100 hidden md:block w-full md:w-[20%] pl-5 shadow-2xl h-[100vh] pt-4 sticky top-0">
          <h1 className="text-3xl font-bold pl-4">Friends</h1>
          <p className="my-2 py-2 hover:bg-base-200 pl-4 rounded-l-lg">
            <Link
              to="/user/users"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <MdGroups2 className="" /> Home{" "}
            </Link>
          </p>
          <p className="my-2 py-2 hover:bg-base-200 pl-4 rounded-l-lg">
            <Link
              to="/user/users"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <BiSolidUserPlus className="" /> Friend Request
            </Link>
          </p>
          <p className="my-2 py-2 hover:bg-base-200 pl-4 rounded-l-lg">
            <Link
              to="/user/users"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <FiUserPlus className="" /> Suggestion
            </Link>
          </p>
          <p className="my-2 py-2 hover:bg-base-200 pl-4 rounded-l-lg">
            <Link
              to="/user/users"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <BiSolidUserPlus className="" /> AllFriends
            </Link>
          </p>
          <p className="my-2 py-2 hover:bg-base-200 pl-4 rounded-l-lg">
            <Link
              to="/user/users"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <TiThListOutline className="" /> Custom List
            </Link>
          </p>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Users;
