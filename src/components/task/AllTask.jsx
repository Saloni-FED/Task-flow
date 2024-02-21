import { useState, useEffect } from "react";
import useTask from "../../hooks/useTask";
import AllTaskMain from "./AllTaskMain";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../../Loader";

const GetAllTask = () => {
  const [filterState, setFilterState] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [allTask, setAllTask] = useTask(filterState);
  // console.log(allTask)
  useEffect(() => {
    setIsLoading(true);
  }, [filterState]);

  useEffect(() => {
    if (allTask.length >= 0) {
      setIsLoading(false);
    }
  }, [allTask]);

  return (
    <div className="ml-2 max-md:w-full max-md:h-fit w-full">
      <div className="flex justify-between px-4 mt-3 mb-3">
        <select
          name="sort"
          id="sort_element"
          className="outline-none rounded-full border-b px-2 py-1 bg-input text-heading hover:bg-purple-200"
          onChange={(e) => {
            setFilterState(e.target.value);
          }}
          value={filterState}
        >
          <option value="All">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="completed">Completed</option>
          <option value="pending">In Progress</option>
        </select>
        <Link to="/main/create">
          <button className="border-b border-heading py-1 px-3 flex items-center gap-2 text-heading hover:text-purple-400 font-bold font-body">
            Create <CiSquarePlus className="text-2xl font-bold" />
          </button>
        </Link>
      </div>
      {isLoading ? ( 
        <Loader />
      ) : allTask.length !== 0 ? (
        <div className="grid grid-cols-[repeat(3,1fr)] max-md:grid-cols-1 gap-2 mx-2 max-sm:mx-0 overflow-none">
          {allTask.map((taskItems) => (
            <AllTaskMain key={taskItems._id} {...taskItems} />
          ))}
        </div>
      ) : (
        <div className="text-heading text-center font-body text-xl font-bold max-sm:py-10">
          <h1>Oops! No Task is Available</h1>
          <Link to="/main/create">
            <h2 className="flex justify-center text-slate-400 mt-4 text-lg">
              <FaArrowLeft className="hover:-translate-x-2 transition-transform duration-300" />
            </h2>
          </Link>
        </div>
      )}
    </div>
  );
};

export default GetAllTask;
