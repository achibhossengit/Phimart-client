import ProfileForm from "../components/dashboard/profile/ProfileForm";
import ChangeButton from "../components/dashboard/profile/ChangeButton";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ChangePasswordForm from "../components/dashboard/profile/ChangePasswordForm";
import useAuthContext from "../hooks/useAuthContext";
import AlertError from "../components/AlertError";
import AlertSuccess from "../components/AlertSuccess";

const ProflePage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const { user, alert, updateUserProfile, changePassword } = useAuthContext();
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    Object.keys(user).forEach((key) => {
      setValue(key, user[key]);
    });
  }, [user, setValue]);

  const onSubmit = async (data) => {
    const profileData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      address: data.address,
      phone_number: data.phone_number,
    };
    setIsLoading(true);
    try {
      await updateUserProfile(profileData);
      if (data.currentPassword && data.newPassword) {
        await changePassword({
          current_password: data.currentPassword,
          new_password: data.newPassword,
        });
      }
    } catch (error) {
      console.log(error);
    } finally{
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-lg mt-10"
    >
      {/* error hadiling block */}
      {(alert.status == "profile_update_error" || alert.status == 'change_password_error') && (
        <AlertError message={alert.message} />
      )}
      {alert.status == "profile_update_success" && (
        <AlertSuccess message={alert.message} />
      )}

      <ProfileForm isEdit={isEdit} register={register} errors={errors} />

      <ChangePasswordForm
        isEdit={isEdit}
        register={register}
        errors={errors}
        watch={watch}
      />
      <ChangeButton isLoading={isLoading} isEdit={isEdit} handleIsEdit={handleIsEdit} />
    </form>
  );
};

export default ProflePage;
