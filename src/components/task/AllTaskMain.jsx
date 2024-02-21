import  { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { deleteTask } from "../../api";
import { useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { createHistory } from "../../api";

const AllTaskMain = ({ taskName, date, dueDate, priority, status, _id }) => {
  const navigate = useNavigate();
  const [threeDotClicked, setThreeDotClicked] = useState(false);

  const handleDelete = async () => {
    await createHistory({ taskName, date, dueDate, priority, status, _id, })
    const { data } = await deleteTask(_id);
    window.location.reload(true);
    // console.log(data);
  };

  console.log(new Date(date).getMonth())
  const handleEdit = () => {
    navigate(`/main/${_id}`);
  };

  const handleDot = () => {
    setThreeDotClicked((prev) => !prev);
  };
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.getDate();
    const dayOfWeek = dateObj.toLocaleString("default", { weekday: "short" });
    return `${month} ${day} (${dayOfWeek})`;
  };

  const formattedCreatedDate = formatDate(date);
  const formattedDueDate = formatDate(dueDate);


  return (
    <div className="border p-5 font-body text-heading rounded shadow-xl shadow-main h-fit max-md:w-full">
      <div className="flex justify-between">
        <h1
          className={`${
            status === "pending"
              ? "bg-red-200 text-red-500"
              : "bg-green-200 text-green-500"
          } px-5 py-1 rounded-full text-sm text-bold`}
        >
          {status}
        </h1>
        <div className="px-5 py-1 text-xl font-bold list-none flex gap-5 rounded-full shadow-lg shadow-main">
          {threeDotClicked && (
            <div className="flex gap-3 ">
              <li className={`${status === 'completed' ? "hidden" : "block"} hover:text-purple-500`} onClick={handleEdit}>
                <MdModeEditOutline />
              </li>
              <li className="hover:text-purple-500" onClick={handleDelete}>
                <RiDeleteBin6Fill />
              </li>
            </div>
          )}
          <div className="">
            <BsThreeDots onClick={handleDot} />
          </div>
        </div>
      </div>
      <div>
        <h1 className={`text-lg mt-4 ${status === "completed" ? "line-through font-bold" : ""}`}>
          {taskName}
        </h1>
      </div>
      <div className="mt-3 flex justify-between">
        <div>
         <div className=" rounded-lg text-slate-500 font-semibold text-sm">
          <p>Created: {formattedCreatedDate}</p>
          <p>Due: {formattedDueDate}</p>
         </div>
        </div>

        <div className="text-slate-500">Priority: {priority}</div>
      </div>
    </div>
  );
};

export default AllTaskMain;
