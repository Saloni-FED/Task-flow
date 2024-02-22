import { getAllTaskOfUser } from "../api";
import { useEffect, useState } from "react";
const useTask = (filter, isDeleted) => {
  const [allTask, setAllTask] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(filter);
  useEffect(() => {
    const fetchTask = async () => {
      try {
        setIsLoading(true)
        const { data } = await getAllTaskOfUser(filter);
        if (Array.isArray(data)) {
          setAllTask(data);
          setIsLoading(false);
        } else {
          // console.error("Data is not an array:", data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTask();
  }, [filter, isDeleted]);
  return [allTask, setAllTask, isLoading, setIsLoading];
};

export default useTask;
