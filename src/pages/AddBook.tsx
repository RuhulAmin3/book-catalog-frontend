import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import HeaderNavbar from "../components/HeaderNavbar";
 
export default function AddBook() {
  return (
    <>
    <HeaderNavbar></HeaderNavbar>
    <Card color="transparent" shadow={false} className="text-center my-8">
      <Typography variant="h4" color="blue-gray">
       Add You New Book
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your New book details.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-4 flex flex-col gap-6">
          <Input color="green" size="lg" label="Title" type="text" />
          <Input color="green" size="lg" label="Author" type="text" />
          <Input color="green" size="lg" label="Category" type="text" />
          <Input color="green" size="lg" label="Price" type="number" />
          <Input color="green" size="lg" label="Cover" type="text" />
          <Textarea color="green" size="lg" label="Description" />
        </div>
        <Button color="green" className="mt-6" fullWidth>
          Add New Book
        </Button>
      </form>
    </Card>
    </>
  );
}