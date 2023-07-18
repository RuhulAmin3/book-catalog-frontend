import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
 
export default function AddBook() {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Typography variant="h4" color="blue-gray">
       Add You New Book
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your New book details.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Title" type="text" />
          <Input size="lg" label="Author" type="text" />
          <Input size="lg" label="Category" type="text" />
          <Input size="lg" label="Price" type="number" />
          <Input size="lg" label="Cover" type="text" />
          <Textarea size="lg" label="Description" />
        </div>
        <Button color="green" className="mt-6" fullWidth>
          Add New Book
        </Button>
      </form>
    </Card>
  );
}