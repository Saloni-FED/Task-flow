import axios from "axios";
const API = axios.create({ baseURL: import.meta.env.VITE_APP_URL });
export const signUp = (formData) => API.post(`/signup`, formData, {});
export const signIn = (formData) => API.post(`/signin`, formData);

// Authorization
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    const token = JSON.parse(localStorage.getItem("profile"));
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});
// Authentication
// console.log()

// Profile
export const profile = (formData) =>
  API.post("/profile/update", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
// tasks from user
export const createTask = (taskData) => API.post(`/createTask`, taskData);

// Frontend API call with query parameter
export const getAllTaskOfUser = (filter) =>
  API.get("/getalltask", { params: { filter } });

// Delete Task
export const deleteTask = (_id) => API.delete(`/${_id}`);

// Update Task
export const updateTask = (_id, updateTaskData) =>
  API.put(`/${_id}`, updateTaskData);

// Gettin task BY User Id
export const getByTaskId = (_id) => API.get(`${_id}`);

// Deleted history
export const createHistory = (history) => API.post("/create/history", history);
export const getHistory = () => API.get("/get/history");
// Restore data
export const restoreData = (data) => API.post("/data/restore", data);
