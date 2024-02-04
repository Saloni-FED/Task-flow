import Header from "./components/Header";
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Error from "./components/Error";
import Auth from "./components/auth/Auth";
// import Dashboard from "./components/dashboard/Dashboard";
import Tasks from "./components/task/Tasks";
// import GetAllTask from "./components/task/AllTask";
// import Update from "./components/update/UpdateTask";
// import Profile from "./components/profile/Profile";
// import UpdateProfile from "./components/profile/UpdateProfile"
import Protected from "./components/protected/Protected";
import About from "./components/About";
import Loader from "./Loader";

const History = lazy(() => import("./components/trashbin/History"));
const UpdateProfile = lazy(() => import("./components/profile/UpdateProfile"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const GetAllTask = lazy(() => import("./components/task/AllTask"));
const Update = lazy(() => import("./components/update/UpdateTask"));
const Profile = lazy(() => import("./components/profile/Profile"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    errorElement: <Error />,
  },
  {
    path: "/main",
    element: <Protected element={<Header />} />,
    children: [
      {
        path: "create",
        element: <Protected element={<Tasks />} />,
      },
      {
        path: "getalltask",
        element: (
          <Protected
            element={
              <Suspense fallback={<Loader />}>
                <GetAllTask />
              </Suspense>
            }
          />
        ),
      },
      {
        path: ":_id",
        element: (
          <Protected
            element={
              <Suspense fallback={<Loader />}>
                <Update />
              </Suspense>
            }
          />
        ),
      },
      {
        path: "profile",
        element: (
          <Protected
            element={
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            }
          />
        ),
      },
      {
        path: "updateprofile",
        element: (
          <Protected
            element={
              <Suspense fallback={<Loader />}>
                <UpdateProfile />
              </Suspense>
            }
          />
        ),
      },
      {
        path: "dashboard",
        element: (
          <Protected
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
        ),
      },
      {
        path: "about",
        element: <Protected element={<About />} />,
      },
      {
        path: "history",
        element: (
          <Protected
            element={
              <Suspense fallback={<Loader />}>
                <History />
              </Suspense>
            }
          />
        ),
      },
    ],
  },
]);

export default router;
