import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-col flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              to="/all-books"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
            >
              All Book
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
            >
              Create account
            </Link>
          </li>
          <li>
            <Link
              to="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="green-gray" className="text-center font-normal">
        &copy; All Right Reserved By Ruhul Amin.
      </Typography>
    </footer>
  );
}