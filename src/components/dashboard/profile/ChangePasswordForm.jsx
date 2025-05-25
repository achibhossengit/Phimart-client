import { useEffect, useState } from "react";
import AlertError from "../../AlertError";
import AlertSuccess from "../../AlertSuccess";

const ChangePasswordForm = ({ register, watch, errors, isEdit }) => {
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [isShowPassword, setShowPassword] = useState(false);
  return (
    <div>
      <p
        onClick={() => setIsChangePassword(!isChangePassword)}
        className="text-pink-500 font-semibold underline cursor-pointer inline-block"
      >
        {!isChangePassword ? 'Change Password?' : 'Password'}
      </p>
      <div
        className={`${
          isChangePassword ? "block" : "hidden"
        } mt-2 space-y-4 w-full max-w-md mx-auto`}
      >
        {/* password */}
        <div className="flex items-start gap-2">
          {/* Current Password */}
          <div>
            <input
              disabled={!isEdit}
              type={isShowPassword ? "text" : "password"}
              placeholder="Current"
              {...register("currentPassword", {
                required: "Current password is required",
              })}
              className={`w-full border ${
                errors.currentPassword ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-2 focus:outline-none focus:border-pink-500`}
            />
            {errors.currentPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div>
            <input
              disabled={!isEdit}
              type={isShowPassword ? "text" : "password"}
              placeholder="New"
              {...register("newPassword", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className={`w-full border ${
                errors.newPassword ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-2 focus:outline-none focus:border-pink-500`}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {/* Confirm New Password */}
          <div>
            <input
              disabled={!isEdit}
              type={isShowPassword ? "text" : "password"}
              placeholder="Confirm"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === watch('newPassword') || "Passwords do not match",
              })}
              className={`w-full border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-2 focus:outline-none focus:border-pink-500`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        {/* show password  */}
        <div className="flex items-center gap-1 text-pink-500">
          <p className="text-sm">Show password</p>
          <input
            type="checkbox"
            onChange={() => setShowPassword(!isShowPassword)}
            checked={isShowPassword}
            className="text-pink-500 toggle toggle-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
