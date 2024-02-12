import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col items-center mt-5 h-screen bg-gray-100 font-body">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-heading mb-4 ">Taskflow</h1>
        <p className="text-lg text-gray-600 mb-4">
          Taskflow is a task management application designed to help you stay
          organized and productive.
        </p>
      </div>
      <div className="max-w-lg p-6 shadow-lg rounded-lg transition-transform duration-500 transform hover:scale-105">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="text-gray-700">
          <li className="mb-2">
            <span className="inline-block w-4 h-4 bg-heading rounded-full mr-2"></span>
            Easy task creation and management
          </li>
          <li className="mb-2">
            <span className="inline-block w-4 h-4 bg-heading rounded-full mr-2"></span>
            User specific Dashboard
          </li>
          <li className="mb-2">
            <span className="inline-block w-4 h-4 bg-heading rounded-full mr-2"></span>
            Set due dates 
          </li>
          <li className="mb-2">
            <span className="inline-block w-4 h-4 bg-heading rounded-full mr-2"></span>
            Track task progress and completion status
          </li>
          <li className="mb-2">
            <span className="inline-block w-4 h-4 bg-heading rounded-full mr-2"></span>
            Delete and restore history 
          </li>
        </ul>
      </div>
      <div className="mt-4 border">
        <h2 className="text-xl font-semibold  text-gray-800 mx-2">
          Join with me using my below handles
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="flex flex-col items-center">
            <a href="https://github.com/Saloni-FED">
              <FaGithub className="text-3xl hover:scale-125 duration-500 transition-transform  transform  text-heading font-bold" />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com/in/saloni-pandey-454671210/">
              <FaLinkedin className="text-3xl hover:scale-125 duration-500 transition-transform  transform  text-heading font-bold" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
