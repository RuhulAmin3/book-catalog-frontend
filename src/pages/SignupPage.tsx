/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import HeaderNavbar from "../components/HeaderNavbar";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState , useEffect} from "react";
import { toast } from "react-hot-toast";
import {
  useSignupUserMutation,
} from "../redux/user/userApi";
import { setUser } from "../redux/user/userSlice";
import { useAppDispatch } from "../redux/hook";
import { UserType } from "../types/user";

export default function SignupPage() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signupUser, result] = useSignupUserMutation();
  const handleChange = (field:string, value:string) => {
    setUserData({ ...userData, [field]: value });
  };

  const resetForm = ()=>{
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    const { password, confirmPassword, firstName, lastName, email } = userData;
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("password doesn't match");
    }
    signupUser({ firstName, lastName, email, password })
  };

  useEffect(()=>{
    if(result.isSuccess){
      toast.success("user create successful");
      navigate("/")
      resetForm();
      dispatch(setUser({
        user:result?.data?.data as UserType, 
        token:result?.data?.accessToken as string}
        ))
      console.log(result.data)
    }else if(result.isError){
      toast.error(result?.error?.data?.errorMessages[0]?.message as string);
    }
  }, [result?.isSuccess, result?.data, result?.isError])

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
