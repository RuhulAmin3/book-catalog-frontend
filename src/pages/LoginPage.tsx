import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import HeaderNavbar from "../components/HeaderNavbar";

export default function LoginPage() {
  return (
    <>
      <HeaderNavbar />
      <div className="flex items-center justify-center h-screen overflow-y-hidden">
        <Card className="w-96" style={{ scrollbarWidth: 'thin' }}>
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
            <Input color="green" label="Email" size="lg" />
            <Input color="green" label="Password" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="green" variant="gradient" fullWidth>
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
        </Card>
      </div>
    </>
  );
}