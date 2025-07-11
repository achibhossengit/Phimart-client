import { BsBoxSeamFill, BsCartPlusFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FaBookOpen, FaHistory, FaTag, FaUser, FaUsers } from "react-icons/fa";
import { IoIosAddCircleOutline, IoMdStarOutline } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { Link, NavLink } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { LuLogOut } from "react-icons/lu";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logoutUser } = useAuthContext();
  const { cart, loading } = useCart();
  console.log('ami loader', loading);

  const mainMenu = [
    { to: "/shop", label: "Collections" },
    { to: "", label: "Categories" },
    { to: "", label: "Tranding Books" },
    { to: "", label: "About Us" },
  ];

  const CustomerMenuItems = [
    { to: "dashboard/profile", icon: FaUser, label: "My Profile" },
    { to: "dashboard/orders", icon: CiShoppingCart, label: "Orders" },
    { to: "dashboard/cart", icon: BsCartPlusFill, label: "My Cart" },
    { to: "", icon: IoMdStarOutline, label: "My Ratings & Reviews" },
    { to: "", icon: FaBookOpen, label: "Bookshelf" },
    { to: "", icon: FaHistory, label: "History" },
  ];

  const StaffMenuItems = [
    { to: "dashboard/profile", icon: FaUser, label: "My Profile" },
    { to: "dashboard", icon: VscGraph, label: "Recent Orders" },
    { to: "dashboard/products", icon: BsBoxSeamFill, label: "Products" },
    {
      to: "addproduct",
      icon: IoIosAddCircleOutline,
      label: "Add Products",
    },
    {
      to: "dashboard/add-categories",
      icon: HiOutlineDocumentAdd,
      label: "Add Category",
    },
    { to: "dashboard/categories", icon: FaTag, label: "Categories" },
    { to: "dashboard/orders", icon: CiShoppingCart, label: "Orders" },
    {
      to: "dashboard/reviews",
      icon: IoMdStarOutline,
      label: "Product Reviews",
    },
    { to: "dashboard/users", icon: FaUsers, label: "Users" },
  ];

  const menuItems = user?.is_staff ? StaffMenuItems : CustomerMenuItems;

  return (
    <div className="navbar bg-pink-50">
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost text-xl">
          PhiBook
        </NavLink>
      </div>
      {/* mainMenu container (desktop deviecs) */}
      <div className="navbar-center">
        {/* Desktop Menu (hidden on mobile) */}
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          {mainMenu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="flex items-center text-gray-600 gap-2 font-semibold hover:bg-pink-200 p-2 rounded-md"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Accordion (visible on mobile) */}
        <div className="dropdown dropdown-center md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            Menu
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {mainMenu.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="flex items-center text-gray-600 gap-2 font-semibold hover:bg-pink-200 p-2 rounded-md"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle mr-5"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {loading ? <p>Loading...</p> : cart?.items.length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">
                    {cart?.items?.length || 0} Items
                  </span>
                  <span className="text-info">
                    Subtotal: ${cart?.total_price || 0}
                  </span>
                  <div className="card-actions">
                    <Link
                      to={"dashboard/cart"}
                      className="btn btn-primary btn-block"
                    >
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
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
              {/* menu items container */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className="flex items-center text-gray-600 gap-2 font-semibold hover:bg-pink-200 p-2 rounded-md"
                    >
                      <item.icon />
                      <p>{item.label}</p>
                    </Link>
                  </li>
                ))}
                <li className="border-t-2 border-gray-300 my-1">
                  <a onClick={() => logoutUser()}>
                    <LuLogOut /> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="btn btn-primary bg-pink-500 border-pink-500 shadow-none text-white"
            >
              Login
            </Link>
            <Link
              to="/registration"
              className="btn btn-primary bg-pink-500 border-pink-500 shadow-none text-white"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
