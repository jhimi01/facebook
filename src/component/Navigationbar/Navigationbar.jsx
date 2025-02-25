import React, { useContext } from "react";
import userpng from "../../../public/user.png";
import fbpng from "../../../public/Facebook-logo.png";
import { Link, NavLink } from "react-router-dom";
import { BiSearch, BiSolidBellRing } from "react-icons/bi";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { FiLogOut, FiUsers } from "react-icons/fi";
// import { IoLogOut } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import {
  BsFillExclamationSquareFill,
  BsFillMoonFill,
  BsQuestionCircleFill,
} from "react-icons/bs";
import {
  MdOutlineOndemandVideo,
  MdOutlineVideogameAsset,
} from "react-icons/md";
import "./Navigationbar.css";
import { AuthContext } from "../../Provider/AuthProvider";

const Navigationbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  // navlinks
  const Navigationslinks = () => {
    return (
      <>
        <p className="relative mx-4 hover:bg-base-200 rounded-xl">
          <NavLink
            to="/"
            title="home"
            className={({ isActive }) =>
              isActive ? "text-[#1877F2] underline-cus" : "text-[gray]"
            }
          >
            <p className="px-9 py-4">
              <AiFillHome />
            </p>
          </NavLink>
        </p>
        <p className="relative mx-4 hover:bg-base-200 rounded-xl">
          <NavLink
            to="/user/users"
            title="users"
            className={({ isActive }) =>
              isActive ? "text-[#1877F2] underline-cus" : "text-[gray]"
            }
          >
            <p className="px-9 py-4">
              <FiUsers />
            </p>
          </NavLink>
        </p>
        <p className="relative mx-4 hover:bg-base-200 rounded-xl">
          <NavLink
            to="/media"
            title="media"
            className={({ isActive }) =>
              isActive ? "text-[#1877F2] underline-cus" : "text-[gray]"
            }
          >
            <p className="px-9 py-4">
              <MdOutlineOndemandVideo />
            </p>
          </NavLink>
        </p>
        <p className="relative mx-4 hover:bg-base-200 rounded-xl">
          <NavLink
            to="/play"
            title="Games"
            className={({ isActive }) =>
              isActive ? "text-[#1877F2] underline-cus" : "text-[gray]"
            }
          >
            <p className="px-9 py-4">
              <MdOutlineVideogameAsset />
            </p>
          </NavLink>
        </p>
      </>
    );
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-md sticky p-0 top-0 z-50">
        <div className="md:navbar-start">
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

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-2xl gap-4 text-gray-500">
            <Navigationslinks />
          </ul>
        </div>
        <div className="navbar-end pr-4">
          <div className="flex items-center justify-between gap-2">
            <Link>
              <p className="bg-base-200 rounded-full p-3 sm:block hidden">
                <TbGridDots className="text-xl text-gray-900" />
              </p>
            </Link>
            <Link>
              <p className="bg-base-200 rounded-full p-3 sm:block hidden">
                <FaFacebookMessenger className="text-xl text-gray-900" />
              </p>
            </Link>
            <Link>
              <p className="bg-base-200 rounded-full p-3 sm:block hidden">
                <BiSolidBellRing className="text-xl text-gray-900" />
              </p>
            </Link>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user ? <img src={user?.photoURL} /> : <img src={userpng} />}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-96"
              >
                {/*----------------- profile ----------------- */}
                <div
                  style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
                  className="p-4 rounded-xl "
                >
                  <Link to={`profilepage/${user?.email}`}>
                    <div className="rounded-full flex items-center gap-3 p-1 hover:bg-base-200">
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
                      <h3 className="text-xl font-semibold">
                        {user?.displayName}
                      </h3>
                    </div>
                  </Link>
                  <hr className="my-3" />
                  <p className="text-xl font-semibold text-[#1877F2]">
                    see all profiles
                  </p>
                </div>
                {/* --------------- icons */}
                <div className="my-5 space-y-1">
                  <div>
                    <p className="flex hover:bg-base-200 py-2 px-3 rounded-xl items-center text-xl gap-3">
                      <AiFillSetting className="bg-base-300 p-2 text-4xl rounded-full" />{" "}
                      setting & Privacy
                    </p>
                  </div>
                  <div>
                    <p className="flex hover:bg-base-200 py-2 px-3 rounded-xl items-center text-xl gap-3">
                      <BsQuestionCircleFill className="bg-base-300 p-2 text-4xl rounded-full" />{" "}
                      Help & Support
                    </p>
                  </div>
                  <div>
                    <p className="flex hover:bg-base-200 py-2 px-3 rounded-xl items-center text-xl gap-3">
                      <BsFillMoonFill className="bg-base-300 p-2 text-4xl rounded-full" />{" "}
                      Display & accessibilty
                    </p>
                  </div>
                  <div>
                    <p className="flex hover:bg-base-200 py-2 px-3 rounded-xl items-center text-xl gap-3">
                      <BsFillExclamationSquareFill className="bg-base-300 p-2 text-4xl rounded-full" />{" "}
                      Give feedback
                    </p>
                  </div>
                  <div className="cursor-pointer">
                    {user ? (
                      <p
                        onClick={handleLogout}
                        className="flex hover:bg-base-200 py-2 px-3 rounded-xl items-center text-xl gap-3"
                      >
                        <FiLogOut className="bg-base-300 p-2 text-4xl rounded-full" />{" "}
                        logout
                      </p>
                    ) : (
                      <Link to="/login">
                        <p
                          onClick={handleLogout}
                          className="flex hover:bg-base-200 py-2 px-3 rounded-xl items-center text-xl gap-3"
                        >
                          <FiLogOut className="bg-base-300 p-2 text-4xl rounded-full" />{" "}
                          login
                        </p>
                      </Link>
                    )}
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* mobile icon */}
      <div className="md:hidden shadow-cus bg-base-100 z-10 shadow-2xl rounded-none fixed bottom-0 w-full py-1">
        <div
          // style={{zIndex: 5000}}
          className="flex justify-between text-xl"
        >
          <Navigationslinks />
        </div>
      </div>
    </>
  );
};

export default Navigationbar;
