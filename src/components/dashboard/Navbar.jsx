import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router";

const Navbar = ({ handleSidebar, user, logoutUser }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-pink-50">
      <div className="flex items-center gap-2">
        <NavLink
          to={"/"}
          className="px-3 py-2 text-2xl hover:bg-gray-200 cursor-pointer"
        >
          <IoHomeOutline />
        </NavLink>
        <button
          onClick={handleSidebar}
          className="px-3 py-2 text-2xl gap-2 hover:bg-gray-200 cursor-pointer"
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <div>
        <div className="dropdown dropdown-end">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{user.first_name} {user.last_name}</h3>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
              <a onClick={() => logoutUser()}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
