import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <nav className=' shadow-md bg-slate-800 
        h-10 flex justify-between items-center
      px-4
         ring-2'
        >
          <p className='font-bold text-blue-600'>TOR
            <span className='text-red-500'>CAVE </span>
          </p>
        <ul className=' gap-4 flex'>
          <Link to="/"  className='text-white '>HOME</Link>  
            <Link to="/Trending"  className='text-white '>TRENDING</Link>
            <Link to="/All"  className='text-white '>ALL</Link>
        </ul>

        </nav>
    </div>
  )
}

export default Nav