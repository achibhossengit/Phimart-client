import Navbar from "../../components/dashboard/Navbar";
import { Outlet } from "react-router";
import Sidebar from "../../components/dashboard/Sidebar";
import useAuthContext from "../../hooks/useAuthContext";
import { useState } from "react";

const DashboardLayout = () => {
  const { user, logoutUser } = useAuthContext();
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
//   console.log(user); // trigger on every click??
  return (
    <section>
      <Navbar
        handleSidebar={handleSidebar}
        openSidebar={openSidebar}
        user={user}
        logoutUser={logoutUser}
      />
      <Sidebar openSidebar={openSidebar} />

      <div
        onClick={() => setOpenSidebar(false)}
        className="w-full px-5 min-h-screen"
      >
        <Outlet/>
      </div>
    </section>
  );
};

export default DashboardLayout;
