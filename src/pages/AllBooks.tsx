/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BookCard from '../components/BookCard'
import Linebar from '../components/Linebar'
import Loading from '../components/Loading';
import { useGetAllBookQuery } from '../redux/book/bookApi';
import { BookType } from '../types/user';

const AllBooks = () => {
  const { data, isLoading, isError, isSuccess } = useGetAllBookQuery();
  let content;
  if (isLoading) {
    content = <Loading />
  } else if (!isLoading && isError) {
    content = "something is wrong try again later"
  } else if (!isLoading && !isError && isSuccess) {
    content = data?.data?.map((book: BookType, idx: string) => <BookCard key={idx} book={book} />)
  }
  return (
    <>
      <Linebar>All books for sale</Linebar>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-6'>
        {content}
      </div>
    </>
  )
}

export default AllBooks