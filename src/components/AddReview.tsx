import { Button, Textarea } from "@material-tailwind/react"

const AddReview = () => {
  return (
    <form>
     <Textarea color="green" size="lg" label="message"/>
     <Button color="green" type="submit" className="mx-auto block mt-5">Submit</Button>
    </form>
  )
}

export default AddReview