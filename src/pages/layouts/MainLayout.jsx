import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
