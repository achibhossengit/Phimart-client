import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState({ status: "none", message: "" });

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  // Login User
  const [authTokens, setAuthTokens] = useState(getToken());
  const loginUser = async (userData) => {
    setAlert({ status: "none", message: "" });
    try {
      const response = await apiClient.post("auth/jwt/create/", userData);
      setAuthTokens(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      setAlert({ status: "logged_success", message: "You are logged in" });
      return;
    } catch (error) {
      setAlert({
        status: "logged_error",
        message: error.response.data?.detail,
      });
    }
  };

  // logout user
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  useEffect(() => {
    if (authTokens) {
      fetchUserProfile();
    }
  }, [authTokens]);

  //   fetch user
  const fetchUserProfile = async () => {
    try {
      const response = await apiClient.get("auth/users/me", {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error.response.data?.detail);
    }
  };

  // Register user
  const registerUser = async (userData) => {
    setAlert({ status: "none", message: "" });
    try {
      await apiClient.post("/auth/users/", userData);
      setAlert({
        status: "register_success",
        message:
          "Your account has been created successfully! Now Check your Email to active it.",
      });
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = Object.values(error.response.data).flat().join("\n");
        setAlert({ status: "register_error", message: errors });
      } else {
        setAlert({
          status: "register_error",
          message: "Registration failed. Something went wrong!",
        });
      }
    }
  };

  // update user
  const updateUserProfile = async (userData) => {
    setAlert({ status: "none", message: "" });
    try {
      await apiClient.put("/auth/users/me/", userData, {
        headers: {
          Authorization: `JWT ${authTokens?.access}`,
        },
      });
      setAlert({
        status: "profile_update_success",
        message: "Profile updated successfully!",
      });
    } catch (error) {
      console.log(error);
      const strError = Object.values(error.response.data).flat().join("\n");
      setAlert({ status: "profile_update_error", message: strError });
    }
  };

  // Change password
  const changePassword = async (data) => {
    try {
      await apiClient.post("/auth/users/set_password/", data, {
        headers: {
          Authorization: `JWT ${authTokens?.access}`,
        },
      });
    } catch (error) {
      const strError = error.response?.data
        ? Object.values(error.response.data).flat().join("\n")
        : "An unexpected error occurred!";
      setAlert({
        status: "change_password_error",
        message: strError,
      });
    }
  };

  // Reset password
  const resetPassword = async(data)=>{
    try{
      await apiClient.post('/auth/users/reset_password/', data)
      setAlert({status: 'forgot_success', message: "Please check your email to set new password"});
    } catch(error){
      console.log(error);
      setAlert({status: 'forgot_error', message: 'Something went wrong!'})
    }
  }

  // Confirm reset password
  const confirmResetPassword = async(data) => {
    try{
      await apiClient.post('/auth/users/reset_password_confirm/', data)
      setAlert({status: 'confirm_success', message: 'Your password reset successfully. Now redirecting login page....'})
    }catch(error){
      console.log(error);
      setAlert({status: 'confirm_error', message: 'Something went wrong'})
    }
  }

  return {
    user,
    authTokens,
    alert,
    loginUser,
    registerUser,
    logoutUser,
    updateUserProfile,
    changePassword,
    resetPassword,
    confirmResetPassword
  };
};

export default useAuth;
