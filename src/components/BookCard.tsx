/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { BookType } from "../types/user";

interface IProps {
  book: BookType;
}
export default function BookCard({ book }: IProps) {
  console.log(book.description.length);

  return (
    <Card className="mt-6 min-w-80">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={book?.cover} alt="img-blur-shadow" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {book?.title}
        </Typography>
        <Typography>
          {book?.description?.length > 50 ? `${book?.description?.slice(0, 120)}...` : book?.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/details/${book?._id}`}>
          <Button variant="text" color="green" className="flex items-center gap-2">
            Read More <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}