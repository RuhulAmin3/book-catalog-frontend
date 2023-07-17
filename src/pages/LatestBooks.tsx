import { Button } from '@material-tailwind/react'
import BookCard from '../components/BookCard'

const LatestBooks = () => {
    return (
        <>
            <div className='flex gap-4 my-5 items-center justify-center'>
                <hr className='h-[3px] w-full block bg-gray-300' />
                <h3 className='text-xl inline-block w-[60%] text-center font-bold capitalize'>Latest book for sale</h3>
                <hr className='h-[3px] w-full block bg-gray-300' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
            <Button className='my-5 block mx-auto'>More Books</Button>
        </>
    )
}

export default LatestBooks