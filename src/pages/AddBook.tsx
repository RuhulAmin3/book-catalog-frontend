/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* https://typescript-eslint.io/rules/no-unsafe-assignment */
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import HeaderNavbar from "../components/HeaderNavbar";
import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { useAddBookMutation } from "../redux/book/bookApi";
import { toast } from "react-hot-toast";

export default function AddBook() {
  const { user } = useAppSelector(state => state.user);
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    price: 0,
    cover: "",
    description: "",
  })
  const navigate = useNavigate();
  const [addBook, result] = useAddBookMutation();

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
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBookData = { ...bookData, price: Number(bookData.price), user: user?._id }
    console.log(newBookData);
    addBook(newBookData)
  };

  useEffect(() => {
    if (result.isSuccess) {
      toast.success("book added successfully");
      navigate("/")
      resetForm();
    } else if (result.isError) {
      toast.error("something is wrong")
    }
  }, [result?.isSuccess, result?.data, result?.isError])


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
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <Input color="green" size="lg" label="Title" type="text" onChange={(e) => handleChange("title", e.target.value)} />
            <Input color="green" size="lg" label="Author" type="text"
              onChange={(e) => handleChange("author", e.target.value)} />
            <Input color="green" size="lg" label="Category" type="text"
              onChange={(e) => handleChange("genre", e.target.value)} />
            <Input color="green" size="lg" label="Price" type="number" onChange={(e) => handleChange("price", e.target.value)} />
            <Input color="green" size="lg" label="Publication Date" placeholder="dd-mm-yy" type="string" onChange={(e) => handleChange("publicationDate", e.target.value)} />
            <Input color="green" size="lg" label="Cover" type="text" onChange={(e) => handleChange("cover", e.target.value)} />
            <Textarea color="green" size="lg" label="Description" onChange={(e) => handleChange("description", e.target.value)} />
          </div>
          <Button color="green" className="mt-6" type="submit" fullWidth>
            Add New Book
          </Button>
        </form>
      </Card>
    </>
  );
}