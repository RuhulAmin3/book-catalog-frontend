import BookCard from '../components/BookCard'
import Linebar from '../components/Linebar'

const AllBooks = () => {
  return (
    <>
    <Linebar>All books for sale</Linebar>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-6'>
    <BookCard/>
    <BookCard/>
    <BookCard/>
    <BookCard/>
    <BookCard/>
    <BookCard/>
</div>
    </>
  )
}

export default AllBooks