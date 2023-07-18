/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import HeaderNavbar from "../components/HeaderNavbar";
import { useState, FormEvent, useEffect } from "react";
import { useLoginUserMutation } from "../redux/user/userApi";
import { toast } from "react-hot-toast";
import { LoginUserType, UserType } from "../types/user";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/user/userSlice";
export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();
  const [loginUser, result] = useLoginUserMutation();
  const dispatch = useAppDispatch();

  const handleChange = (field: string, value: string) => {
    setLoginData({ ...loginData, [field]: value });
  };

  const resetForm = () => {
    setLoginData({
      email: "",
      password: "",
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(loginData as LoginUserType)
  };

  useEffect(() => {
    if (result.isSuccess) {
      toast.success("user create successful");
      navigate("/")
      resetForm();
      dispatch(setUser({
        user: result?.data?.data as UserType,
        token: result?.data?.accessToken as string
      }
      ))
    } else if (result.isError) {
      toast.error(result?.error?.data?.errorMessages[0]?.message as string);
    }
  }, [result?.isSuccess, result?.data, result?.isError])


  return (
    <>
      <HeaderNavbar />
      <div className="flex items-center justify-center h-screen overflow-y-hidden">
        <form className="w-96" style={{ scrollbarWidth: 'thin' }} onSubmit={handleSubmit}>
          <CardHeader
            variant="gradient"
            color="green"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input color="green" label="Email" size="lg" type="email" onChange={(e) => handleChange("email", e.target.value)} />
            <Input color="green" label="Password" size="lg" type="password"
              onChange={(e) => handleChange("password", e.target.value)} />
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" color="green" variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/signup">
                <Typography
                  variant="small"
                  color="green"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </form>
      </div>
    </>
  );
}