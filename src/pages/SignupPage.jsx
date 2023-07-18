/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import HeaderNavbar from "../components/HeaderNavbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function SignupPage() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };
  const handleSubmit = (e) => {
    const { password, confirmPassword } = userData;
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("password doesn't match");
    }
    console.log(userData);
  };

  return (
    <>
      <HeaderNavbar />
      <div className="flex items-center justify-center h-screen overflow-y-hidden">
        <form className="w-96 shadow-lg" onSubmit={handleSubmit}>
          <CardHeader
            variant="gradient"
            color="green"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Create Account
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              required
              color="green"
              label="First Name"
              size="lg"
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
            <Input
              required
              color="green"
              label="Last Name"
              size="lg"
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
            <Input
              required
              color="green"
              label="Email"
              size="lg"
              type="email"
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <Input
              required
              color="green"
              label="Password"
              size="lg"
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <Input
              required
              color="green"
              label="Password"
              size="lg"
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="green" variant="gradient" type="submit" fullWidth>
              Create Account
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/login">
                <Typography
                  variant="small"
                  color="green"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </form>
      </div>
    </>
  );
}
