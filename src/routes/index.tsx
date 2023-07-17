import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import LatestBooks from "../pages/LatestBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<LatestBooks/>
      },
    ],
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/signup",
    element:<SignupPage/>
  }
]);

export default router;
