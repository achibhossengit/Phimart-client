import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import AlertSuccess from "../components/AlertSuccess";
import AlertError from "../components/AlertError";
import { useEffect, useState } from "react";

const ResetConfirmPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let { uid, token } = useParams();
  const { alert, confirmResetPassword } = useAuthContext();

  const onSubmit = async (data) => {
    data.uid = uid;
    data.token = token;
    setIsLoading(true);
    try {
      await confirmResetPassword(data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (alert.status == "confirm_success") {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [alert]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-md shadow-md rounded-2xl bg-white">
        <div className="card-body">
          {alert.status == "confirm_success" && (
            <AlertSuccess message={alert.message} />
          )}
          {alert.status == "confirm_error" && (
            <AlertError message={alert.message} />
          )}

          <h2 className="text-2xl font-bold text-center mb-4">
            Reset Password
          </h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            Please enter your new password below.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("new_password")}
              type="password"
              placeholder="New Password"
              className="input input-bordered w-full mb-4 focus:outline-none focus:border-pink-500"
            />
            <input
              {...register("confirm_password", {
                required: true,
                validate: (value) =>
                  value === watch("new_password")
                    ? true
                    : "Password does not match",
              })}
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full mb-4 focus:outline-none focus:border-pink-500"
            />
            {errors.confirm_password && (
              <label className="text-error">
                {errors.confirm_password.message}
              </label>
            )}
            <button
              type="submit"
              className={`${
                isLoading ? "btn-disabled" : ""
              } btn w-full bg-pink-500 text-white hover:bg-pink-600 cursor-pointer`}
            >
              {isLoading ? "Processing" : "Confirm Reset"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetConfirmPage;
