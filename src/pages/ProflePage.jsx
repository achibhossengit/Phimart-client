import ProfileForm from "../components/dashboard/profile/ProfileForm";
import ChangeButton from "../components/dashboard/profile/ChangeButton";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ChangePasswordForm from "../components/dashboard/profile/ChangePasswordForm";
import useAuthContext from "../hooks/useAuthContext";

const ProflePage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };
  const {user, updateUserProfile} = useAuthContext()

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    Object.keys(user).forEach((key)=>{
      setValue(key, user[key])
    })
  },[user, setValue])

  const onSubmit = async(data) =>{
    const profileData = {first_name: data.first_name, last_name: data.last_name, email: data.email, address: data.address, phone_number: data.phone_number}
    try{
      await updateUserProfile(profileData)
      alert('user updated!')
    } catch (error){
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-lg mt-10">
      <ProfileForm isEdit={isEdit} register={register} errors={errors} />
      <ChangePasswordForm isEdit={isEdit} register={register} errors={errors} watch={watch}/>
      <ChangeButton isEdit={isEdit} handleIsEdit={handleIsEdit} />
    </form>
  );
};

export default ProflePage;
