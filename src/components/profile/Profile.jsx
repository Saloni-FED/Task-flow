// import React from "react";
import image_default from "../../assets/Component 3.png";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProfileContext } from "../../context/profile/ProfileContext";
import useTask from "../../hooks/useTask";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { profile } = useContext(ProfileContext);
  const [tasks, setTasks] = useTask("All");
  const totalTask = tasks.length;
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Log out");
    localStorage.removeItem("profile");
    navigate("/");
  };

  const { bio, username, image } = profile;
  return (
    <div className=" h-screen w-full flex flex-col items-center font-body">
      <div className="flex p-3 gap-6 justify-center items-center">
        <div
          className={`${
            image ? "inline-block" : "hidden"
          } w-32 h-32 border border-heading rounded-full`}
        >
          <img
            src={image}
            alt=""
            className="object-fit w-32 h-32 rounded-full border border-heading"
          />
        </div>
        <div>
          <h1 className="text-heading font-extrabold text-xl ">
            {username ? username : "User"}
          </h1>
          <p className="text-heading font-bold text-sm mb-3">
            {" "}
            {bio ? bio : "bio"}
          </p>
          <Link to="/main/updateprofile">
            <button className="w-full  bg-input text-heading rounded-full px-4 py-1 hover:bg-purple-300 outline-none ">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-7 flex gap-7 px-5 py-7 border shadow-xl shadow-main rounded-[2rem] bg-heading text-white">
        <div>
          <p className=" text-sm font-bold">{totalTask === 0 ? "Oops! please complete your task" : "amazing!"}</p>
          <h1 className=" text-xl font-bold mt-4">
            You Have Created {totalTask} task!
          </h1>
        </div>
        <div>
          <img src={image_default} alt="" width="100" height="100" />
        </div>
      </div>
      <div className="w-1/3 max-sm:w-full  mt-3 flex justify-center items-center rounded-full px-4 py-2 gap-2 bg-input text-heading font-bold hover:bg-purple-300" onClick={handleLogout}>
        <IoIosLogOut className="text-xl" />
        <button> log out</button>{" "}
      </div>
    </div>
  );
};

export default Profile;
