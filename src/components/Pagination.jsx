import React from 'react'

const Pagination = ({pgleftfn, pgnum, pgrightfn}) => {
  return (
    <div className='bg-gray-500 p-4 h-[50px] mt-8 w-full flex justify-center gap-2 rounded-xl'>
        <div onClick={pgleftfn} className='px-8'>
            <i className="fa-solid fa-arrow-left hover:scale-130 transition-transform duration-100 ease-in-out 
            cursor-pointer hover:text-blue-100"></i>
        </div>
        <div>{pgnum}</div>
        <div onClick={pgrightfn} className='px-8'>
            <i className="fa-solid fa-arrow-right hover:scale-130 transition-transform duration-100 ease-in-out 
            cursor-pointer hover:text-blue-100"></i>
        </div>
    </div>
  )
}

export default Pagination