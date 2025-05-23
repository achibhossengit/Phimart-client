import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import apiClient from "../../services/api-client";
import AlertSuccess from "../AlertSuccess";
import AlertError from "../AlertError";

const Register = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await apiClient.post("/auth/users/activation/", { uid, token });
        setSuccessMsg("Account activation process completed successfully.");
        console.log(response.data);
        setTimeout(() => navigate("/login"), 3000); // Redirect after 3 seconds
      } catch (error) {
        setErrorMsg("Failed to activate your account. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    activateAccount();
  }, [uid, token, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center p-4">
      <div className="bg-white shadow-2xl rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Activate Your Account</h1>
        {loading && (
          <p className="text-center text-gray-600">Processing your request, please wait...</p>
        )}
        {successMsg && (
          <AlertSuccess message={successMsg} />
        )}
        {errorMsg && (
          <AlertError message={errorMsg} />
        )}
        {!loading && !successMsg && !errorMsg && (
          <p className="text-center text-gray-600">No updates available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Register;
