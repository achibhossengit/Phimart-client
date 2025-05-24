import { Route, Routes } from "react-router";
import MainLayout from "../pages/layouts/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import Resgister from "../components/register/Resgister";
import RegisterBlank from "../components/register/RegisterBlank";
import DashboardLayout from "../pages/layouts/DashboardLayout";
import ProflePage from "../pages/ProflePage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="registrationSuccess" element={<RegisterBlank />} />
          <Route path="activate/:uid/:token" element={<Resgister />} />
        </Route>

        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<ProflePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
