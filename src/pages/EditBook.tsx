/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import HeaderNavbar from "../components/HeaderNavbar";
import { useEditBookMutation, useGetBookQuery } from "../redux/book/bookApi";
import Loading from "../components/Loading";
import { useAppSelector } from "../redux/hook";
import { useNavigate, useParams } from "react-router-dom";
import { useState, FormEvent, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function EditBook() {
  const { id } = useParams();
  const { user } = useAppSelector(state => state.user);
  const [editBook, result] = useEditBookMutation();
  const { data, isError, isSuccess, error } = useGetBookQuery(
    id as string, {
    refetchOnMountOrArgChange: true
  }
  );
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    price: 0,
    cover: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (field: string, value: string) => {
    setBookData({ ...bookData, [field]: value });
  };

  const resetForm = () => {
    setBookData({
      title: "",
      author: "",
      genre: "",
      publicationDate: "",
      price: 0,
      cover: "",
      description: "",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBookData = { ...bookData, price: Number(bookData.price), user: user?._id }
    editBook({ id: id, data: newBookData })
  };

  useEffect(() => {
    if (isSuccess) {
      // toast.success("book added successfully");
      // const { data } = data;
      setBookData({
        title: data?.data.title,
        author: data?.data.author,
        genre: data?.data.genre,
        publicationDate: data?.data.publicationDate,
        price: data?.data.price,
        cover: data?.data.cover,
        description: data?.data.description,
      });
    } else if (isError) {
      toast.error(error?.data?.errorMessages[0]?.message as string);
    }
  }, [isSuccess, data, isError]);

  useEffect(() => {
    if (result.isSuccess) {
      toast.success("book edit successful");
      navigate("/")
      resetForm();
    } else if (result.isError) {
      toast.error(result?.error?.data?.errorMessages[0]?.message as string);
    }
  }, [result?.isSuccess, result?.data, result?.isError])


  return (
    <>
      {isSuccess ? (
        <>
          <HeaderNavbar></HeaderNavbar>
          <Card color="transparent" shadow={false} className="text-center my-8">
            <Typography variant="h4" color="blue-gray">
              Add You New Book
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your New book details.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  color="green"
                  size="lg"
                  label="Title"
                  type="text"
                  value={bookData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                />
                <Input
                  color="green"
                  size="lg"
                  label="Author"
                  type="text"
                  value={bookData.author}
                  onChange={(e) => handleChange("author", e.target.value)}
                />
                <Input
                  color="green"
                  size="lg"
                  label="Category"
                  type="text"
                  value={bookData.genre}
                  onChange={(e) => handleChange("genre", e.target.value)}
                />
                <Input
                  color="green"
                  size="lg"
                  label="Price"
                  type="number"
                  value={bookData.price}
                  onChange={(e) => handleChange("price", e.target.value)}
                />
                <Input color="green" size="lg" label="Publication Date" placeholder="dd-mm-yy" type="string"
                  value={bookData.publicationDate}
                  onChange={(e) => handleChange("publicationDate", e.target.value)} />
                <Input
                  color="green"
                  size="lg"
                  label="Cover"
                  type="text"
                  value={bookData.cover}
                  onChange={(e) => handleChange("cover", e.target.value)}
                />
                <Textarea
                  color="green"
                  size="lg"
                  label="Description"
                  value={bookData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </div>
              <Button color="green" className="mt-6" type="submit" fullWidth>
                Update Book
              </Button>
            </form>
          </Card>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
