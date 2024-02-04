import React, { useContext } from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ProfileContext } from "../context/profile/ProfileContext"
const Header = () => {
const { profile } = useContext(ProfileContext)
const { image } = profile
  return (
    <>
      <header>
        <nav className=" w-full flex justify-between md:p-5 p-2 gap-5 max-sm:flex-col border shadow-xl shadow-main">
          <h1 className="mt-1 font-logo text-3xl font-extrabold text-heading">TaskFlow</h1>
          <ul className="flex items-center  gap-5 font-body font-semibold  max-sm:top-20 max-sm:flex-col  max-sm:items-start text-heading text-lg ">
            <NavLink to="/main/profile" className={({isActive})=>{
              console.log(isActive)
             return  isActive ? " text-heading font-bold px-2 py-1 border-b-2 border-heading": "text-heading text-lg"
            }}>
            <li className="hover:text-blue-500">Profile</li>
            </NavLink>
            <NavLink to="/main/about" className={({isActive})=>{
              console.log(isActive)
             return  isActive ? " text-heading font-bold px-2 py-1 border-b-2 border-heading": "text-heading text-lg"
            }}>
               <li className="">About</li>
            </NavLink>
           
            <li className="buttons rounded-full w-11 h-11 "><img src={image} alt="" /></li>
          </ul>
        </nav>
        <div className="flex max-sm:flex-col">
          <NavBar />
          <Outlet />
        </div>
      </header>
    </>
  );
};

export default Header;
