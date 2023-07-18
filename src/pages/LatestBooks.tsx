import { Button } from '@material-tailwind/react'
import BookCard from '../components/BookCard'

const LatestBooks = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-6'>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
    </div>
    <Button color="green" className='my-5 block mx-auto'>More Books</Button>
    </>
  )
}

export default LatestBooks