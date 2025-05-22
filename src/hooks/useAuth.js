import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Navigate } from "react-router";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };
  
  // Login User
  const [authTokens, setAuthTokens] = useState(getToken());
  const loginUser = async (userData) => {
    setErrorMsg("")
    try {
      const response = await apiClient.post("auth/jwt/create/", userData);
      setAuthTokens(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      return true;
    } catch (error) {
      setErrorMsg(error.response.data?.detail);
      return false;
    }
  };

  useEffect(()=>{
    if (authTokens){
      fetchUserProfile();
    }
  }, [authTokens])

  //   fetch profile
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
    setErrorMsg("");
    try {
      await apiClient.post("/auth/users/", userData);
    } catch (error) {
      setErrorMsg(error.response.data?.detail);
      console.log(error);
    }
  }


  // logout user
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  return { user, errorMsg, loginUser, registerUser, logoutUser };
};

export default useAuth;