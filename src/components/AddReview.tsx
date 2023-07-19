/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { Button, Textarea } from "@material-tailwind/react"
import { FormEvent, useEffect, useState } from "react";
import { useAppSelector } from "../redux/hook";
import { usePostReviewMutation } from "../redux/review/reviewApi";
import { toast } from "react-hot-toast";

interface IProps {
  id: string;
}

const AddReview = ({ id }: IProps) => {
  const { user } = useAppSelector(state => state.user);
  const [review, setReview] = useState("");
  const [postReview, result] = usePostReviewMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reviewData = { user: user?._id, book: id, review }
    postReview(reviewData);
  }

  useEffect(() => {
    if (result?.isSuccess) {
      console.log(result.data);
      setReview("");
      toast.success("review added successful");
    }
  }, [result?.isSuccess, result?.isError, result?.data])

  return (
    <form onSubmit={handleSubmit}>
      <Textarea color="green" size="lg" label="message"
        onChange={(e) => setReview(e.target.value)}
        value={review}
      />
      <Button color="green" type="submit" className="mx-auto block mt-5">Submit</Button>
    </form>
  )
}

export default AddReview