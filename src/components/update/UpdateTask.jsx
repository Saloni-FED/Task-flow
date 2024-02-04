import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import useGetElementById from "../../hooks/useGetElementById"
import { updateTask } from "../../api";
import imageTask from "../../assets/Component 3.png"
import toast from "react-hot-toast"

const Update = () => {
  const navigate = useNavigate()
  const { _id } = useParams();
  const prevTask = useGetElementById(_id);
  const formatDate = (date) => {
    if (!date) return "";
    const formattedDate = new Date(date);
    return isNaN(formattedDate)
      ? ""
      : formattedDate.toISOString().split("T")[0];
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    defaultValues: {
      taskName: prevTask?.taskName || "",
      dueDate: formatDate(prevTask?.dueDate) || "",
      priority: prevTask?.priority || "",
      status: prevTask?.status || "",
    },
  });

  useEffect(() => {
    if (prevTask) {
      setValue("taskName", prevTask.taskName || "");
      setValue("dueDate", formatDate(prevTask.dueDate) || "");
      setValue("priority", prevTask.priority || "");
      setValue('status', prevTask.status || "")
    }
  }, [prevTask, setValue]);

  const onSubmit = async(updateTaskData) => {
    try {
      const data = await updateTask(_id,updateTaskData)
      console.log(data)
      navigate('/main/getalltask')
      toast.success("Task Updated Successfully")
    } catch (error) {
      console.log(error)
      toast.error("Sign in properly if not sign in, Please Register")
    }
   
  };

  return (
    <div className="border-2 z-50 w-full max-sm:h-full h-screen truncate flex justify-center p-5">
      <div className="max-sm:hidden"><img src={imageTask} alt="" /></div>
      <form
        className="flex flex-col gap-3 p-5 w-fit h-fit max-sm:w-screen truncate font-body"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label className="text-heading">Task :</label>
          <input
            type="text"
            className="px-4 py-2  rounded-full border-2 border-heading outline-none text-heading font-bold"
            {...register("taskName", {
              required: {
                value: true,
                message: "Please Enter Task",
              },
            })}
          />
          <p className="text-xs text-red-500 mt-2">
            {errors.taskName?.message}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-heading">Due Date :</label>
          <input
            type="date"
            className="px-4 py-2  rounded-full border-2 border-heading outline-none text-heading font-bold"
            {...register("dueDate", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xl text-heading">
            <h1>Priority:-</h1>
          </div>
          <div className="flex gap-10">
            <label className="text-extrabold text-lg text-[#9C98A1]">Low : </label>
            <input
              type="radio"
              name="priority"
              value="low"
              {...register("priority")}
            />
            <label className="text-extrabold text-lg text-[#9C98A1]">Medium : </label>
            <input
              type="radio"
              name="priority"
              value="medium"
              {...register("priority")}
            />
            <label className="text-extrabold text-lg text-[#9C98A1]">High : </label>
            <input
              type="radio"
              name="priority"
              value="high"
              {...register("priority")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xl text-heading">
            <h1>Status:-</h1>
          </div>
          <div className="flex gap-10">
            <label className="text-extrabold text-lg text-[#9C98A1]">Completed : </label>
            <input
              type="radio"
              name="status"
              value="completed"
              {...register("status")}
            />
            <label className="text-extrabold text-lg text-[#9C98A1]">In Progress : </label>
            <input
              type="radio"
              name="status"
              value="pending"
              {...register("status")}
            />
           
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-1 border  rounded-full px-4 py-2 bg-heading text-white"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
