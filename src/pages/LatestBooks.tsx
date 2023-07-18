import { Button } from '@material-tailwind/react'
import BookCard from '../components/BookCard'
import Linebar from '../components/Linebar'
import { Link } from 'react-router-dom'

const LatestBooks = () => {
  return (
    <>
    <Linebar>Latest book for sale</Linebar>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
    </div>
    <Link to="/all-books">
    <Button color="green" className='my-5 block mx-auto'> More Books
    </Button>
    </Link> 
    </>
  )
}

export default LatestBooks