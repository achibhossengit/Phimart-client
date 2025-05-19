import useAuthContext from "../hooks/useAuthContext";
import { useForm } from "react-hook-form";
import Alert from "../components/Alert";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
  const { user, errorMsg, loginUser } = useAuthContext();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const isLoged = await loginUser(data);
      if (isLoged) {
        navigate("/Dashboard");
      }
    } catch (error) {
      console.log("Login failed ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100">
      <div className="w-full md:w-1/2 lg:w-1/3 min-h-screen flex justify-center items-center mx-auto px-5 md:px-0">
        <div className="bg-white p-6 rounded-lg w-full shadow-lg border border-gray-200">
          {/* alert component */}
          {<Alert error={errorMsg} />}
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Sign In
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Access your account by entering your email and password.
          </p>

          {/* input form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-600 text-sm">
                Email
              </legend>
              <input
                {...register("email", { required: "Provide your email first" })}
                type="email"
                className="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                placeholder="Enter your email"
              />
              {errors.email && (
                <label className="text-error">{errors.email.message}</label>
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-600 text-sm">
                Password
              </legend>
              <input
                {...register("password", { required: true })}
                type="password"
                className="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                placeholder="Enter your password"
              />
            </fieldset>
            <button disabled={loading} className="btn btn-primary bg-pink-500 border-none text-white w-full py-2 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors">
              {loading ? 'Logging in....' : 'Log in'}
            </button>
          </form>

          {/* sign up */}
          <div className="py-5 text-center">
            <span className="text-gray-500">Don’t have an account? </span>
            <a
              href=""
              className="text-pink-500 underline hover:text-pink-600 transition-colors"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
