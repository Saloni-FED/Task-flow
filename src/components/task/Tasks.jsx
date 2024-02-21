import { useForm } from "react-hook-form";
import { CiSquarePlus } from "react-icons/ci";
import { createTask } from "../../api";
import toast from "react-hot-toast";

const Tasks = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const today = new Date().toISOString().split("T")[0];
  const onSubmit = async (taskData) => {
    console.log("clicked", taskData);
    try {
      const { dueDate, priority, taskName } = taskData;
      const data = { dueDate, priority, taskName };
      const resData = await createTask(data);
      console.log(resData.data);
      // useNavigate("/getalltask");
      reset();
      toast.success("Task Created Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Not created try to Sign in or or try to create again");
    }
  };

  return (
    <div className="border z-50 w-full max-sm:h-full h-screen truncate flex flex-col  items-center  font-body relative">
      <form
        className="flex flex-col gap-4  w-fit h-fit max-sm:w-full truncate  font-body p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative mb-3 max-sm:hidden">
          <div className="w-11 h-11 rounded-full bg-[#d1d0f9] absolute top-0 left-24"></div>
          <div className="w-11 h-11 rounded-full bg-[#d1d0f9] absolute top-0 left-32"></div>
          <div className="w-11 h-11 rounded-full bg-[#d1d0f9] absolute top-0 left-40"></div>
          <div className="w-11 h-11 rounded-full bg-[#d1d0f9] absolute top-0 left-48"></div>
          <div className="w-11 h-11 rounded-full bg-[#d1d0f9] absolute top-0 left-56"></div>
        </div>

        <div className="flex flex-col gap-1 mt-5 ">
          <label className="text-xl text-heading">Task </label>
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
          <p className="text-xs text-red-500 mt-2">{errors.name?.message}</p>
        </div>
        <div className="flex flex-col gap-1 ">
          <label className="text-xl text-heading">Due Date :</label>
          <input
            type="date"
            min={today}
            className="px-4 py-2  rounded-full border-2 border-heading outline-none text-heading font-bold"
            {...register("dueDate", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xl text-heading">
            <h1>Priority:-</h1>
          </div>
          <div className="flex gap-4 text-[#9C98A1] font-bold ">
            <label htmlFor="low">Low : </label>
            <input
              type="radio"
              id="low"
              name="priority"
              value="low"
              {...register("priority")}
            />
            <label htmlFor="medium">Medium : </label>
            <input
              type="radio"
              id="medium"
              name="priority"
              value="medium"
              {...register("priority")}
            />
            <label htmlFor="high">High : </label>
            <input
              type="radio"
              id="high"
              name="priority"
              value="high"
              {...register("priority")}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-1 border  rounded-full px-4 py-2 bg-heading text-white"
        >
          Create <CiSquarePlus className="text-white text-xl" />{" "}
        </button>
      </form>
    </div>
  );
};

export default Tasks;
