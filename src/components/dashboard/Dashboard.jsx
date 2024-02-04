import React, { useState} from "react";
import {
  Line,
  LineChart,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import useTask from "../../hooks/useTask";

const Dashboard = () => {
  const [loading , setLoading ] = useState(true)
    const [tasks, setTasks] = useTask("All");
    const totalTask = tasks.length;

  const handleValue = tasks.filter((task) => {
    return task.status === "completed";
  });
  const handlePending = tasks.filter((task) => {
    return task.status === "pending";
  });
  const handleLow = tasks.filter((task) => {
    return task.priority === "low";
  });
  const handleHigh = tasks.filter((task) => {
    return task.priority === "high";
  });
  const data = [
    {
      status: "Completed",
      count: handleValue.length,
    },
    {
      status: "Pending",
      count: handlePending.length,
    },
    {
      status: "Low",
      count: handleLow.length,
    },
    {
      status: "High",
      count: handleHigh.length,
    },
  ];
  return (
    <div className="h-screen w-full p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-2 font-body text-heading">
      <div className="md:col-span-2 row-span-6 border-black shadow-xl shadow-main ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <CartesianGrid />
            <Line type="monotone" dataKey="count" stroke="#00FF00" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="charts row-span-2 shadow-xl shadow-main rounded-[2rem] p-10 max-sm:hidden flex flex-wrap justify-between">
        <div className="  p-4">
          <h2 className="font-bold leading-snug text-semibold">Total Task </h2>
          <p className="text-2xl font-bold">{totalTask}</p>
        </div>
        <div class="relative">
          <div class="w-28 h-28 bg-blue-300 rounded-full"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="charts xl:row-span-4 border row-span-3  border-neutral-200  rounded-[2rem] flex flex-col p-3">
        <div className=" w-full  flex justify-between mt-3 p-6 shadow-xl shadow-main">
          <div className="1">
            <h3>Task Completed: </h3>
          </div>
          <div className="two border w-11 h-11 rounded-full bg-logo relative">
            <p className="absolute top-1 text-white left-4 font-bold text-2xl">
              {handleValue.length}
            </p>
          </div>
        </div>
        <div className=" w-full flex justify-between mt-3 p-6 shadow-xl shadow-main">
          <div className="1">
            <h3>Task Pending:</h3>
          </div>
          <div className="two border w-11 h-11 rounded-full bg-circle_green relative">
            <p className="absolute top-1 text-white left-4 font-bold text-2xl">
              {handlePending.length}
            </p>
          </div>
        </div>
        <div className=" w-full flex justify-between mt-3 p-6 shadow-xl shadow-main">
          <div className="1">
            <h3>Low Priority:</h3>
          </div>
          <div className="two border w-11 h-11 rounded-full bg-primary relative">
            <p className="absolute top-1 text-white left-4 font-bold text-2xl">
              {handleLow.length}
            </p>
          </div>
        </div>
        <div className=" w-full  flex justify-between mt-3 p-6 shadow-xl shadow-main">
          <div className="1">
            <h3>Priority High:</h3>
          </div>
          <div className=" w-11 h-11 rounded-full bg-warning relative">
            <p className="absolute top-1 text-white left-4 font-bold text-2xl">
              {handleHigh.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
