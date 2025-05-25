import { useForm } from "react-hook-form";
import useAuthContext from "../hooks/useAuthContext";
import AlertError from "../components/AlertError";
import AlertSuccess from "../components/AlertSuccess";

const ResetPasswordPage = () => {
  const { resetPassword, alert } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    await resetPassword(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-md shadow-md rounded-2xl bg-white">
        <div className="card-body">
            {alert.status == 'forgot_success' && (
                <AlertSuccess message={alert.message}/>
            )}
            {alert.status == 'forgot_error' && (
                <AlertError message={alert.message}/>
            )}

          <h2 className="text-2xl font-bold text-center mb-4">
            Forgot Password
          </h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            Enter your email address, and we will send you a link to reset your
            password.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered focus:outline-none focus:border-pink-500 w-full mb-4"
            />
            <button
              type="submit"
              className="btn w-full bg-pink-500 text-white hover:bg-pink-600"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
