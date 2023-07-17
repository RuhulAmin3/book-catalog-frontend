import HeaderNavbar from '../components/HeaderNavbar'
import Searchbar from '../components/Searchbar'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
  return (
    <>
     <HeaderNavbar/>
     <div className='grid grid-cols-12 gap-6'>
         <div className='col-span-3'>
            <Sidebar/>
         </div>
         <div className='col-span-9 p-4'>
            <div>
                <Searchbar/>
                <div className='flex gap-4 mt-5 items-center justify-center'>
                <hr className='h-[3px] w-full block bg-gray-300' />
                 <h3 className='text-xl inline-block w-[60%] text-center font-bold capitalize'>Latest book for sale</h3> 
                <hr className='h-[3px] w-full block bg-gray-300' />
                </div>
            </div>
         </div>
     </div>
    </>
  )
}

export default MainLayout