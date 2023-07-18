import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import LatestBooks from "../pages/LatestBooks";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<LatestBooks/>
      },
      {
        path:"/all-books",
        element:<AllBooks/>
      },
      {
        path:"/add-book",
        element:<AddBook/>
      },
      {
        path:"/edit-book/:id",
        element:<EditBook/>
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
