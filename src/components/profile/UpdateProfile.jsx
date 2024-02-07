import  { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { profile } from "../../api";
import { ProfileContext } from "../../context/profile/ProfileContext";
import { useNavigate } from "react-router-dom"
import Loader from "../../../src/Loader"
const UpdateProfile = () => {
  const [image, setImage] = useState(null);
   const { setProfile } = useContext(ProfileContext)
   const navigate = useNavigate()
  //  console.log(profile)
  const {
    register,
    handleSubmit,
    setValue, // Add this
    formState: {  isSubmitting },
  } = useForm();

  const handleImage = () => {
    document.getElementById("image").click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
    setValue("image", file);
  };

  // Profile form Submit
  const onSubmit = async (profileData) => {
    const { username, bio, image } = profileData;
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("bio", bio);
      formData.append("image", image);
      const { data }= await profile(formData)
      console.log(data)
      setProfile(data.user)
      navigate('/main/profile')
    } catch (error) {
      console.log(error)
    }
   
  };

 

  return (
    <div className="w-full h-full border flex justify-center  text-white font-body">
      <form
        className="flex flex-wrap-reverse gap-10 p-10 my-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="info">
          <div className="mb-5 ">
            <input
              type="text"
              placeholder="username"
              className="input"
              {...register("username", {
                required: {
                  value: true,
                  message: "Please Enter Task",
                },
              })}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="bio"
              className="input"
              {...register("bio", {
                required: {
                  value: true,
                  message: "Please Enter Task",
                },
              })}
            />
          </div>
          <button className="w-full flex justify-center items-center gap-1 border  rounded-full px-4 py-2 bg-heading text-white mt-5"
           disabled={isSubmitting}
          >{isSubmitting ? <Loader/> : "Create"}</button>
        </div>
        <div className="flex" onClick={handleImage}>
          <div className="bg-yellow h-52 w-52 rounded-full relative bg-heading">
            {image === null ? (
              <div className="absolute top-10 left-10 text-9xl">
                <CgProfile className="text" />
              </div>
            ) : (
              <img
                src={image ? URL.createObjectURL(image) : ""}
                alt="image_upload"
                className="h-full w-full rounded-full"
              />
            )}
          </div>
          <input
            {...register("image")}
            onChange={handleImageChange}
            className="hidden"
            name="file"
            type="file"
            id="image"
            placeholder="Upload image"
            accept="image/*,.png,.jpg,.jpeg,"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
