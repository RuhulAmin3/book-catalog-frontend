import Footer from '../components/Footer'
import HeaderNavbar from '../components/HeaderNavbar'
import Searchbar from '../components/Searchbar'
import {Outlet} from "react-router-dom"
const MainLayout = () => {
  return (
    <>
     <HeaderNavbar/>
     {/* <div className='grid grid-cols-12'> */}
         <div className='p-4'>
            <div>
                <Searchbar/>
                <div className='my-6'>
                 <Outlet/>
                </div>
            {/* </div> */}
         </div>
     </div>
     <Footer/>
    </>
  )
}

export default MainLayout