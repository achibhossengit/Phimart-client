import { BsBoxSeamFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FaTag } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import Cart from "../components/dashboard/Cart";
import Orders from "../components/dashboard/Orders";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-around flex-wrap gap-5 mt-5">
        <Cart icon={BsBoxSeamFill} title={"Total Products"} value={340} />
        <Cart icon={FaTag} title={"Total Categories"} value={340} />
        <Cart icon={CiShoppingCart} title={"Total Orders"} value={340} />
        <Cart icon={IoMdStarOutline} title={"Recent Reviews"} value={340} />
      </div>
      <Orders />
    </div>
  );
};

export default Dashboard;
