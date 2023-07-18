
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
   
  export default function BookCard() {
    return (
      <Card className="mt-6 min-w-80">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow"/>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Title: Book Title Here
          </Typography>
          <Typography>
            Description: The place is close to Barceloneta Beach and bus stop just 2 min by walk
            and near to &quot;Naviglio&quot; where you can enjoy the main night life
            in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button color="green">Details</Button>
        </CardFooter>
      </Card>
    );
  }