import React from "react";
import { useEffect, useState } from "react";
import { getByTaskId } from "../api";
const useGetElementById = (_id) => {
  const [getTask, setTask] = useState();
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { data } = await getByTaskId(_id);
        // console.log(data?.data);
        setTask(data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTask();
  }, [_id]);
  return getTask;
};

export default useGetElementById;
