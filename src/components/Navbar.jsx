import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex space-x-8 item-center'>
        <Link 
            className='text-blue-800 font-bold text-3xl'
            to='/'>
            Movies
        </Link>
        <Link 
          className='text-blue-500 font-bold text-3xl'
          to = '/Watchlist'
        >WatchList</Link>
    </div>
  )
}

export default Navbar