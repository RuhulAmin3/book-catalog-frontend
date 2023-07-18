import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import HeaderNavbar from "../components/HeaderNavbar";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <>
      <HeaderNavbar />
      <div className="flex items-center justify-center h-screen overflow-y-hidden">
        <Card className="w-96">
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
            <Input color="green" label="First Name" size="lg" />
            <Input color="green" label="Last Name" size="lg" />
            <Input color="green" label="Email" size="lg" />
            <Input color="green" label="Password" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="green" variant="gradient" fullWidth>
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
        </Card>
      </div>
    </>
  );
}
