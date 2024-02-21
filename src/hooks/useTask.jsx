import { getAllTaskOfUser } from "../api";
import { useEffect, useState } from "react";
const useTask = (filter) => {
  const [allTask, setAllTask] = useState([]);
  console.log(filter);
  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await getAllTaskOfUser(filter);
      if (Array.isArray(data)) {
        setAllTask(data);
      } else {
        console.error("Data is not an array:", data);
      }
    };
    fetchTask();
  }, [filter]);
  return [allTask, setAllTask];
};

export default useTask;
