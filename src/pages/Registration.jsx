import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const Registration = () => {
  const { registerUser } = useAuthContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    delete data.confirm_password;
    console.log(data);
    try{
        await registerUser(data);
    }catch(error){
        console.log("registration failed", error);
    }
  };

  return (
    <section className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="p-6 bg-white rounded-xl shadow-lg w-full md:w-3/5 lg:w-2/5 space-y-4 m-5">
        {/* register title */}
        <div>
          <h1 className="font-bold text-2xl text-gray-800">Sign Up</h1>
          <p className="text-gray-600">Create an account to get started</p>
        </div>
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="text-gray-600 space-y-4"
        >
          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold text-gray-700">
              First Name
            </legend>
            <input
              {...register("first_name")}
              type="text"
              placeholder="John"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            />
          </fieldset>
          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold text-gray-700">
              Last Name
            </legend>
            <input
              {...register("last_name")}
              type="text"
              placeholder="Doe"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            />
          </fieldset>
          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold text-gray-700">
              Email
            </legend>
            <input
              {...register("email")}
              type="email"
              required
              placeholder="name@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            />
          </fieldset>
          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold text-gray-700">
              Address
            </legend>
            <input
              {...register("address")}
              type="text"
              placeholder="Avenue 5, Mirpur, Dhaka"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            />
          </fieldset>
          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold text-gray-700">
              Phone Number
            </legend>
            <input
              {...register("phone_number")}
              type="text"
              required
              placeholder="01785855225"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            />
          </fieldset>
          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold text-gray-700">
              Password
            </legend>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "At least length 8 is required!",
                },
              })}
              value="hello@user"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            />
            {errors.password && <label>{errors.password.message}</label>}
          </fieldset>
          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold text-gray-700">
              Confirm Password
            </legend>
            <input
              {...register("confirm_password", {
                validate: (value) =>
                  value === watch("password") || "Password do not match!",
              })}
              value="hello@user"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            />
            {errors.confirm_password && (
              <label className="text-error">
                {errors.confirm_password.message}
              </label>
            )}
          </fieldset>
          <button className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring focus:ring-pink-300 transition hover:cursor-pointer">
            Sign Up
          </button>
        </form>
        {/* sign in option */}
        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-500 underline hover:text-pink-600"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
