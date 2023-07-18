import BookCard from '../components/BookCard'

const AllBooks = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-6'>
    <BookCard/>
    <BookCard/>
    <BookCard/>
    <BookCard/>
    <BookCard/>
    <BookCard/>
</div>
  )
}

export default AllBooks