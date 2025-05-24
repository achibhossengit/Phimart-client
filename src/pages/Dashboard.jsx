import { BsBoxSeamFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FaTag } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import Cart from "../components/dashboard/Cart";
import Orders from "../components/dashboard/Orders";
import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";

const Dashboard = () => {
  const { user, logoutUser } = useAuthContext();
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  console.log(user);
  return (
    <section className="">
      <Navbar handleSidebar={handleSidebar} user={user} logoutUser={logoutUser} />
      <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar} />

      <div onClick={() => setOpenSidebar(false)} className="w-full px-5 min-h-screen">
        <div className="flex justify-around flex-wrap gap-5 mt-5">
          <Cart icon={BsBoxSeamFill} title={"Total Products"} value={340} />
          <Cart icon={FaTag} title={"Total Categories"} value={340} />
          <Cart icon={CiShoppingCart} title={"Total Orders"} value={340} />
          <Cart icon={IoMdStarOutline} title={"Recent Reviews"} value={340} />
        </div>
        <Orders />
      </div>
    </section>
  );
};

export default Dashboard;
