import { BsBoxSeamFill, BsCartPlusFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FaBookOpen, FaHistory, FaTag, FaUser, FaUsers } from "react-icons/fa";
import { IoIosAddCircleOutline, IoMdStarOutline } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import { HiOutlineDocumentAdd } from "react-icons/hi";

const Sidebar = ({ openSidebar }) => {
  const { user } = useAuthContext();

  const CustomerMenuItems = [
    { to: "/profile", icon: FaUser, label: "My Profile" },
    { to: "orders", icon: CiShoppingCart, label: "Orders" },
    { to: "cart", icon: BsCartPlusFill, label: "My Cart" },
    { to: "", icon: IoMdStarOutline, label: "My Ratings & Reviews" },
    { to: "", icon: FaBookOpen, label: "Bookshelf" },
    { to: "", icon: FaHistory, label: "History" },
  ];

  const StaffMenuItems = [
    { to: "/profile", icon: FaUser, label: "My Profile" },
    { to: "/dashboard", icon: VscGraph, label: "Recent Orders" },
    { to: "products", icon: BsBoxSeamFill, label: "Products" },
    {
      to: "addproduct",
      icon: IoIosAddCircleOutline,
      label: "Add Products",
    },
    { to: "add-categories", icon: HiOutlineDocumentAdd, label: "Add Category" },
    { to: "categories", icon: FaTag, label: "Categories" },
    { to: "orders", icon: CiShoppingCart, label: "Orders" },
    { to: "reviews", icon: IoMdStarOutline, label: "Product Reviews" },
    { to: "users", icon: FaUsers, label: "Users" },
  ];

  const menuItems = user.is_staff ? StaffMenuItems : CustomerMenuItems;
  return (
    <div
      className={`min-h-screen my-5 min-w-64 pt-5 px-5 z-10 bg-base-300 rounded-md md:ml-5 absolute md:static -translate-x-full md:translate-x-0 transition-transform duration-200 ${
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
