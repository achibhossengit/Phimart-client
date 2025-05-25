const ProfileForm = ({ isEdit, register, errors}) => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Profile Information
      </h1>
      <hr className="border-dashed border-gray-500 my-5" />

      {/* First Name */}
      <div>
        <label className="block text-gray-600 font-semibold mb-1">
          First Name
        </label>
        <input
          disabled={!isEdit}
          type="text"
          {...register("first_name", {
            required: "First name is required",
          })}
          className={`w-full border ${
            errors.firstName ? "border-red-500" : "border-gray-300"
          } rounded-md px-4 py-2 focus:outline-none focus:border-pink-500`}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.firstName.message}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-gray-600 font-semibold mb-1">
          Last Name
        </label>
        <input
          disabled={!isEdit}
          type="text"
          {...register("last_name", {
            required: "Last name is required",
          })}
          className={`w-full border ${
            errors.lastName ? "border-red-500" : "border-gray-300"
          } rounded-md px-4 py-2 focus:outline-none focus:border-pink-500`}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-600 font-semibold mb-1">Email</label>
        <input
          disabled={true}
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
          className={`w-full border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md px-4 py-2 focus:outline-none focus:border-pink-500`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-gray-600 font-semibold mb-1">Phone</label>
        <input
          disabled={!isEdit}
          type="tel"
          {...register("phone_number", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Phone number must be numeric",
            },
          })}
          className={`w-full border ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } rounded-md px-4 py-2 focus:outline-none focus:border-pink-500`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <label className="block text-gray-600 font-semibold mb-1">
          Address
        </label>
        <textarea
          disabled={!isEdit}
          rows="3"
          {...register("address", {
            required: "Address is required",
          })}
          className={`w-full border ${
            errors.address ? "border-red-500" : "border-gray-300"
          } rounded-md px-4 py-2 focus:outline-none focus:border-pink-500`}
        ></textarea>
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
