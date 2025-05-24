import { BsBoxSeamFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FaTag, FaUsers } from "react-icons/fa";
import { IoIosAddCircleOutline, IoMdStarOutline } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { Link } from "react-router";

const Sidebar = ({ openSidebar, handleSidebar }) => {
  const menuItems = [
    { to: "/dashboard", icon: VscGraph, label: "Dashboard" },
    { to: "/products", icon: BsBoxSeamFill, label: "Products" },
    { to: "/products/addproducts", icon: IoIosAddCircleOutline, label: "Add Products"},
    { to: "/categories", icon: FaTag, label: "Categories" },
    { to: "/orders", icon: CiShoppingCart, label: "Orders" },
    { to: "/reviews", icon: IoMdStarOutline, label: "Reviews" },
    { to: "/users", icon: FaUsers, label: "Users" },
  ];
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-pink-50 shadow-lg transition-transform duration-300 pl-5 ${
        openSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-5 pl-0 mb-5">
        <h1 className="text-2xl font-bold">Phimart</h1>
        <IoCloseCircle
          onClick={handleSidebar}
          className="text-2xl cursor-pointer"
        />
      </div>
      <ul className="space-y-5">
        {menuItems.map((item) => (
          <li>
            <Link to={item.to} className="flex items-center text-gray-600 gap-2 font-semibold hover:bg-pink-200 p-2 rounded-md">
            <item.icon />
            <p>{item.label}</p>
          </Link>
          </li>
        ))}
      </ul>

      <script></script>
    </div>
  );
};

export default Sidebar;
