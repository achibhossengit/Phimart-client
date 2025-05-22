import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

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
        setErrorMsg("Your account has been created successfully! Now Check your Email to active it.")
    } catch (error) {
      if(error.response && error.response.data){
        const errors = Object.values(error.response.data).flat().join("\n");
        setErrorMsg(errors)
      }
      else{
        setErrorMsg("Registration failed. Something went wrong!")
      }
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