import { BsBoxSeamFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FaTag, FaUsers } from "react-icons/fa";
import { IoIosAddCircleOutline, IoMdStarOutline } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { Link } from "react-router";

const Sidebar = ({ openSidebar, handleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-pink-50 shadow-lg transition-transform duration-300 pl-5 ${
        openSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
        <div className="flex items-center justify-between p-5 pl-0 mb-5">
            <h1 className="text-2xl font-bold">Phimart</h1>
            <IoCloseCircle onClick={handleSidebar} className="text-2xl cursor-pointer"/>
        </div>
      <ul className="space-y-5">
        <Link className="flex items-center text-gray-600 gap-2 font-semibold hover:bg-pink-200 p-2 rounded-md">
          <VscGraph />
          <p>Dashboard</p>
        </Link>
        <Link className="flex items-center text-gray-600 gap-2 font-semibold hover:bg-pink-200 p-2 rounded-md">
          <BsBoxSeamFill />
          <p>Products</p>
        </Link>
        <Link className="flex items-center text-gray-600 gap-2 font-semibold hover:bg-pink-200 p-2 rounded-md">
          <IoIosAddCircleOutline />

          <p>Add Products</p>
        </Link>
        <Link className="flex items-center text-gray-600 gap-2 font-semibold hover:bg-pink-200 p-2 rounded-md">
          <FaTag />
          <p>Categories</p>
        </Link>
        <Link className="flex items-center text-gray-600 gap-2 font-semibold hover:bg-pink-200 p-2 rounded-md">
          <CiShoppingCart />
          <p>Orders</p>
        </Link>
        <Link className="flex items-center text-gray-600 gap-2 font-semibold hover:bg-pink-200 p-2 rounded-md">
          <IoMdStarOutline />
          <p>Reviews</p>
        </Link>
        <Link className="flex items-center text-gray-600 gap-2 font-semibold hover:bg-pink-200 p-2 rounded-md">
          <FaUsers />
          <p>Users</p>
        </Link>
      </ul>

      <script></script>
    </div>
  );
};

export default Sidebar;
