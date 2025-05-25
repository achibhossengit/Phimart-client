import React, { useState } from "react";
import { useParams } from "react-router";
import apiClient from "../../services/api-client";

const RegisterBlank = () => {
  const { email } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const handleOnclick = async () => {
    setIsLoading(true);
    try {
      await apiClient.post("/auth/users/resend_activation/", { email });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-red-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Account Created Successfully!
        </h1>
        <p className="text-gray-700 mb-6">
          Your account has been created successfully. Please check your email
          inbox for an activation link to verify your account.
        </p>
        <button
          onClick={() => handleOnclick()}
          className={`${isLoading ? "btn-disabled" : ""} btn btn-secondary`}
        >
          {isLoading ? "Sending.." : "Resend Email"}
        </button>
      </div>
    </div>
  );
};

export default RegisterBlank;
