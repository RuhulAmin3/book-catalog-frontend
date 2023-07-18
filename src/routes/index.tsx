import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import LatestBooks from "../pages/LatestBooks";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";
import BookDetails from "../pages/BookDetails";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <LatestBooks />
      },
      {
        path: "/all-books",
        element: <AllBooks />
      },
      {
        path: "/details/:id",
        element: <BookDetails />
      }
    ],
  },
  {
    path: "/add-book",
    element: <PrivateRoute>
      <AddBook />
    </PrivateRoute>
  },
  {
    path: "/edit-book/:id",
    element: <EditBook />
  },
  {
    path: "/login",
    element: <PublicRoute>
      <LoginPage />
    </PublicRoute>
  },
  {
    path: "/signup",
    element: <PublicRoute>
      <SignupPage />
    </PublicRoute>
  }
]);

export default router;
