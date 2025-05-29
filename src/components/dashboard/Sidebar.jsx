import { BsBoxSeamFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FaTag, FaUsers } from "react-icons/fa";
import { IoIosAddCircleOutline, IoMdStarOutline } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { Link } from "react-router";

const Sidebar = ({ openSidebar }) => {
  const menuItems = [
    { to: "/dashboard", icon: VscGraph, label: "Dashboard" },
    { to: "products", icon: BsBoxSeamFill, label: "Products" },
    {
      to: "/products/addproducts",
      icon: IoIosAddCircleOutline,
      label: "Add Products",
    },
    { to: "categories", icon: FaTag, label: "Categories" },
    { to: "orders", icon: CiShoppingCart, label: "Orders" },
    { to: "cart", icon: CiShoppingCart, label: "Your Cart" },
    { to: "reviews", icon: IoMdStarOutline, label: "Reviews" },
    { to: "users", icon: FaUsers, label: "Users" },
  ];
  return (
    <div
      className={`absolute z-10 h-full w-64 pt-5 bg-pink-50 transition-transform duration-300 pl-5 ${
        openSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="space-y-5">
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
      </ul>
    </div>
  );
};

export default Sidebar;
