import { ReactNode } from 'react';

const Linebar = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex gap-4 mt-5 items-center justify-center my-6 mx-auto'>
      <hr className='h-[3px] w-full block bg-gray-300' />
      <h3 className='text-xl inline-block w-[60%] text-center font-bold capitalize'>{children}</h3>
      <hr className='h-[3px] w-full block bg-gray-300' />
    </div>
  )
}

export default Linebar