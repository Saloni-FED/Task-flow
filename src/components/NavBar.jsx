import { CgMenuBoxed } from "react-icons/cg";
import { MdCreate } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdOutlineAutoDelete } from "react-icons/md";
const NavLinks = () => {
  const [isShow, setIsShow] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsShow((prevClick) => !prevClick);
  };
  const handleLogout = () => {
    console.log("Log out");
    localStorage.removeItem("profile");
    navigate("/");
  };
  return (
    <>
      <div className=" px-7 ">
        <div className="p-3 max-sm:p-1 w-full max-sm:hidden cursor-pointer">
          <CgMenuBoxed
            className="text-5xl max-sm:text-xl font-semibold text-heading"
            onClick={handleClick}
          />
        </div>
        {isShow && (
          <nav className="h-screen w-fit max-sm:w-full max-sm:h-fit  max-sm:px-0  truncate px-3 font-body">
            <ul className="flex flex-col  max-sm:flex-row  max-sm:gap-8 gap-10 text-heading py-5 font-extrabold">
              <NavLink
                to="/main/create"
                className={({ isActive }) => {
                  console.log(isActive);
                  return isActive
                    ? " text-heading font-bold px-2 py-1 border-b-2 border-heading"
                    : "text-heading text-lg";
                }}
              >
                <li className="flex-row max-sm:flex-col max-sm:text-2xl max-sm:gap-1 transition-y hover:translate-x-1">
                  <p className="max-sm:hidden">Create Task</p>
                  <span>
                    <MdCreate />
                  </span>
                </li>
              </NavLink>
              <NavLink
                to="/main/dashboard"
                className={({ isActive }) => {
                  console.log(isActive);
                  return isActive
                    ? " text-heading font-bold px-2 py-1 border-b-2 border-heading"
                    : "text-heading text-lg";
                }}
              >
                {" "}
                <li className="flex-row max-sm:flex-col max-sm:text-2xl max-sm:gap-1 transition-y hover:translate-x-1 ">
                  <p className="max-sm:hidden">DashBoard</p>
                  <span>
                    <RiDashboard2Fill />
                  </span>
                </li>
              </NavLink>

              <NavLink
                to="/main/getalltask"
                className={({ isActive }) => {
                  console.log(isActive);
                  return isActive
                    ? " text-heading font-bold px-2 py-1 border-b-2 border-heading"
                    : "text-heading text-lg";
                }}
              >
                <li className="flex-row max-sm:flex-col max-sm:text-2xl max-sm:gap-1 transition-y hover:translate-x-1   ">
                  <p className="max-sm:hidden">All Task</p>
                  <span>
                    <FaTasks />
                  </span>
                </li>
              </NavLink>
              <NavLink
                to="/main/history"
                className={({ isActive }) => {
                  console.log(isActive);
                  return isActive
                    ? " text-heading font-bold px-2 py-1 border-b-2 border-heading"
                    : "text-heading text-lg";
                }}
              >
                <li className="flex-row max-sm:flex-col max-sm:text-2xl max-sm:gap-1 transition-y hover:translate-x-1   ">
                  <p className="max-sm:hidden">Trash Bin </p>
                  <span>
                  <MdOutlineAutoDelete />
                  </span>
                </li>
              </NavLink>
              <li className="flex gap-2 items-center justify-center transition-y hover:translate-x-1 max-sm:text-2xl">
                <p className="max-sm:hidden" onClick={handleLogout}>
                  log out
                </p>
                <IoIosLogOut className="text-2xl" onClick={handleLogout}/>
              </li>
            
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default NavLinks;

{
  /* <ul className="flex flex-col justify-center items-center max-sm:flex-row  max-sm:gap-3 gap-5 text-[#363949] "> */
}
