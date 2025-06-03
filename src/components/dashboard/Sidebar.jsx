import { BsBoxSeamFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FaTag, FaUsers } from "react-icons/fa";
import { IoIosAddCircleOutline, IoMdStarOutline } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const Sidebar = ({ openSidebar }) => {
  const { user } = useAuthContext();

  const CustomerMenuItems = [
    { to: "orders", icon: CiShoppingCart, label: "Orders" },
    { to: "cart", icon: CiShoppingCart, label: "Your Cart" },
    { to: "reviews", icon: IoMdStarOutline, label: "Reviews" },
  ];

  const StaffMenuItems = [
    { to: "/dashboard", icon: VscGraph, label: "Dashboard" },
    { to: "products", icon: BsBoxSeamFill, label: "Products" },
    {
      to: "addproduct",
      icon: IoIosAddCircleOutline,
      label: "Add Products",
    },
    { to: "categories", icon: FaTag, label: "Categories" },
    { to: "orders", icon: CiShoppingCart, label: "Orders" },
    { to: "cart", icon: CiShoppingCart, label: "Your Cart" },
    { to: "reviews", icon: IoMdStarOutline, label: "Reviews" },
    { to: "users", icon: FaUsers, label: "Users" },
  ];

  const menuItems = user.is_staff ? StaffMenuItems : CustomerMenuItems;
  return (
    <div
      className={`min-h-screen w-64 pt-5 pl-5 z-10 bg-pink-50 absolute md:static -translate-x-full md:translate-x-0 transition-transform duration-200 ${
        openSidebar && "translate-x-0"
      } `}
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
