import React from "react";
import userpng from "../../../public/user.png";
import fbpng from "../../../public/Facebook-logo.png";
import { Link, NavLink } from "react-router-dom";
import { BiSearch, BiSolidBellRing } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import {
  MdOutlineOndemandVideo,
  MdOutlineVideogameAsset,
} from "react-icons/md";
import './Navigationbar.css'

const Navigationbar = () => {
  return (
    <div style={{ height: "56px" }} className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center ">
          <Link to="/">
            <img className="h-12" src={fbpng} alt="" />
          </Link>
          <div className="flex items-center relative">
            <input
              type="text"
              name="text"
              className="py-2 md:px-4 px-1 bg-base-200 rounded-full"
              placeholder="Search Facebook"
            />
            <BiSearch className="text-xl absolute right-3 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-3xl gap-9 text-gray-500">
          <p className="relative px-7">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-[#1877F2] underline-cus" : "text-[gray]"
  } 
          >
            <p>
              <AiFillHome />
              {/* <span className="underline-cus"></span> */}
            </p>
          </NavLink>
          </p>
          <p className="relative px-7">
          <NavLink to="/user" className={({ isActive }) => isActive ? "text-[#1877F2] underline-cus" : "text-[gray]"
  } >
            <p>
              <FiUsers />
            </p>
          </NavLink>
          </p>
          <p className="relative px-7">  
          <NavLink to="/media" className={({ isActive }) => isActive ? "text-[#1877F2] underline-cus" : "text-[gray]"
  } >
            <p>
              <MdOutlineOndemandVideo />
            </p>
          </NavLink>
            </p>
          <p className="relative px-7">   
          <NavLink className={({ isActive }) => isActive ? "text-[#1877F2] underline-cus" : "text-[gray]"
  }  to="/play">
            <p>
              <MdOutlineVideogameAsset />
            </p>
          </NavLink>
            </p>
        </ul>
      </div>
      <div className="navbar-end pr-4">
        <div className="flex items-center justify-between gap-2">
        <Link>
            <p className="bg-base-200 rounded-full p-3">
              <TbGridDots className="text-xl text-gray-900" />
            </p>
          </Link>
          <Link>
            <p className="bg-base-200 rounded-full p-3">
              <FaFacebookMessenger className="text-xl text-gray-900" />
            </p>
          </Link>
          <Link>
            <p className="bg-base-200 rounded-full p-3">
              <BiSolidBellRing className="text-xl text-gray-900" />
            </p>
          </Link>
          
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={userpng} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
