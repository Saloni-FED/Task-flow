import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <div className="w-full h-full flex justify-center font-body">
      <div className="md:w-1/2 text-center w-fit h-fit mt-10 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-4 text-heading">TaskFlow!</h1>
        <p className="text-lg mb-4 text-slate-500 font-bold">
          TaskFlow is a task management application designed to help individuals
          tasks effectively. With TaskFlow, you can create, prioritize, and
          track tasks, set deadlines, and stay organized.
        </p>
        <h2 className="font-bold text-xl text-slate-700">
          Get connected with me in below handles👇
        </h2>
        <div className="flex gap-3 mt-3 text-3xl text-heading "> 
          <a href="https://www.linkedin.com/in/saloni-pandey-454671210/">
            {" "}
            <FaLinkedin className="hover:scale-110 transition-all duration-200"/>
          </a>
          <a href="https://github.com/Saloni-FED">
            <FaGithub className="hover:scale-110 transition-all duration-200"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
