import { Outlet } from "react-router";
import Sidebar from "../../components/dashboard/Sidebar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const DashboardLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <section>
      <button
        onClick={handleSidebar}
        className={`mx-3 mt-5 text-2xl animate-pulse text-pink-500 bg-transparen p-2 rounded-sm cursor-pointer md:hidden fixed z-10 border-1 border-gray-300`}
      >
        <GiHamburgerMenu />
      </button>
      <div className="flex">
        <Sidebar openSidebar={openSidebar} />

        <div
          onClick={() => setOpenSidebar(false)}
          className="w-full px-5 min-h-screen"
        >
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
