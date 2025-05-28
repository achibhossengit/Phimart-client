import { Route, Routes } from "react-router";
import MainLayout from "../pages/layouts/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import Resgister from "../components/Register/Register";
import RegisterBlank from "../components/Register/RegisterBlank";
import DashboardLayout from "../pages/layouts/DashboardLayout";
import ProflePage from "../pages/ProflePage";
import ResetConfirmPage from "../pages/ResetConfirmPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="registrationSuccess/:email" element={<RegisterBlank />} />
          <Route path="activate/:uid/:token" element={<Resgister />} />
          <Route path="password/reset" element={<ResetPasswordPage />} />
          <Route path="password/reset/confirm/:uid/:token" element={<ResetConfirmPage />} />
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
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
