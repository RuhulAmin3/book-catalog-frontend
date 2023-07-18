import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import logo from "../assets/logo.png";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logoutUser } from "../redux/user/userSlice";

export default function HeaderNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const dispatch = useAppDispatch();
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/all-books" className="flex items-center">
          All Books
        </Link>
      </Typography>
      {user?.email && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to="/add-book" className="flex items-center">
            Add Book
          </Link>
        </Typography>
      )}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Help & Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography
              as="img"
              src={logo}
              className="mr-4 cursor-pointer py-1.5 max-h-10"
            />
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {user?.email ? <Button
              onClick={() => dispatch(logoutUser())}
              color="green"
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Logout</span>
            </Button> : (
              <Link to={"/login"}>
                <Button
                  color="green"
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Sign in</span>
                </Button>
              </Link>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          {!user?.email ? (
            <Link to="/login">
              <Button
                color="green"
                variant="gradient"
                size="sm"
                fullWidth
                className="mb-2"
              >
                <span>Sign in</span>
              </Button>
            </Link>
          ) : <Button
            onClick={() => dispatch(logoutUser())}
            color="green"
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2"
          >
            <span>Logout</span>
          </Button>}
        </Collapse>
      </Navbar>
    </>
  );
}
