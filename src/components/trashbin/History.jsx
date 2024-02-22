import { useEffect, useState } from "react";
import { getHistory as fetchHistory } from "../../api";
import TrashData from "./TrashData";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../Loader";
const History = () => {
  const [deletedhistory, setDeletedHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeRestoredTask = (restoredTaskId) => {
    const updatedDeletedHistory = deletedhistory.filter(
      (task) => task.taskId !== restoredTaskId
    );
    setDeletedHistory(updatedDeletedHistory);
  };

  // Function to fetch deleted history data
  const fetchDeletedHistory = async () => {
    try {
      const { data } = await fetchHistory();
      console.log(data);
      setDeletedHistory(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  useEffect(() => {
    fetchDeletedHistory();
  }, []);

  const handleRestoreSuccess = (restoredTaskId) => {
    removeRestoredTask(restoredTaskId);
    fetchDeletedHistory();
  };
  if (isLoading) return <Loader />;
  
  return (
    <div className="w-full h-screen font-body">
      {deletedhistory.length === 0 ? (
        <div className="w-full text-center text-heading font-body mt-5 text-lg font-bold h-screen">
          <h1>No such history available! </h1>
          <h1 className="w-full flex justify-center mt-4">
            <Link to="/main/getalltask">
              <FaArrowLeft className="hover:-translate-x-2 transition-transform duration-300" />{" "}
            </Link>
          </h1>
        </div>
      ) : (
        <>
          <h1 className="text-center text-heading font-bold text-3xl mt-2 max-md:text-base">
            Deleted History
          </h1>
          <div className="order grid grid-cols-4 max-md:grid-cols-3 place-items-center text-heading font-extrabold text-xl mt-5 max-md:text-sm">
            <h1 className="max-md:hidden">Sr No</h1>
            <h1>TaskName</h1>
            <h1>Delete Time</h1>
            <h1>Restore</h1>
          </div>
          <div className="">
            {deletedhistory &&
              deletedhistory.map((task, i) => (
                <TrashData
                  key={task._id}
                  taskId={task.taskId}
                  taskName={task.taskName}
                  deletionTimestamp={task.deletionTimestamp}
                  index={i + 1}
                  restoreSuccessCallback={handleRestoreSuccess}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default History;
