import React, { useCallback, useEffect, useState } from "react";
import { MdRestore } from "react-icons/md";
import { restoreData } from "../../api";

const TrashData = ({
  userId,
  taskId,
  taskName,
  dueDate,
  status,
  deletionTimestamp,
  priority,
  index,
}) => {
  const [restored, setRestored] = useState(false);

  const restore = useCallback(async () => {
    try {
      await restoreData({ taskId });
      setRestored(true);
    } catch (error) {
      console.error("Error while restoring data:", error);
    }
  }, [taskId]);

  return (
    <div
      className={`transition-all duration-500 ${
        restored ? "opacity-0 scale-0" : "opacity-100 scale-100"
      }`}
    >
      <div className="grid grid-cols-4 border-b-2 max-md:text-lg max-md:gap-1 max-md:grid-cols-3 place-items-center mt-3 shadow">
        <h1 className=" max-md:hidden text-heading font-bold md:text-xl">
          {index}
        </h1>
        <h1 className="text-slate-500 font-bold max-md:text-sm">{taskName}</h1>
        <h1 className="text-red-500">
          <span>{`${new Date(deletionTimestamp).toLocaleDateString()}`}</span>
          <br />
          <span>{`${new Date(deletionTimestamp).toLocaleTimeString()}`}</span>
        </h1>
        <h1 className="text-2xl text-gray-700 font-bold">
          <MdRestore onClick={restore} />
        </h1>
      </div>
    </div>
  );
};

export default TrashData;
