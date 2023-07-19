/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button } from '@material-tailwind/react'
import BookCard from '../components/BookCard'
import Linebar from '../components/Linebar'
import { Link } from 'react-router-dom'
import { useGetAllBookQuery } from '../redux/book/bookApi'
import Loading from '../components/Loading'
import { BookType } from '../types/user'
import { useAppSelector } from '../redux/hook'

const LatestBooks = () => {
  const { searchText } = useAppSelector(state => state.search)
  const { data, isLoading, isError, isSuccess } = useGetAllBookQuery(undefined);
  let content;
  if (isLoading) {
    content = <Loading />
  } else if (!isLoading && isError) {
    content = "something is wrong try again later"
  } else if (!isLoading && !isError && isSuccess) {
    content = data?.data?.slice(0, 8)
      .filter((book: BookType) =>
        book.title.toLowerCase().includes(searchText.toLowerCase()) || book.author.toLowerCase().includes(searchText.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchText.toLowerCase())
      ).map((book: BookType, idx: string) => <BookCard key={idx} book={book} />)
  }
  return (
    <>
      <Linebar>Latest book for sale</Linebar>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {content}
      </div>
      <Link to="/all-books">
        <Button color="green" className='my-5 block mx-auto'> More Books
        </Button>
      </Link>
    </>
  )
}

export default LatestBooks