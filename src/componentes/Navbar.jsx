import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-[#18181b] text-white pt-2 pb-1 items-center justify-between sticky top-0 z-30'>

        <nav className='flex flex-wrap items-center justify-center bg-[#18181b]'>
            <NavLink className='mx-2 p-2 rounded-md principal' to="/">
            SeriesApi
            </NavLink>
            
        </nav>
        <nav className='flex justify-between'>
            <NavLink className='mx-2 p-2 rounded-md' to="/terror">
              Terror
            </NavLink>
            <NavLink className='mx-2 p-2 rounded-md' to="/drama">
              Drama
            </NavLink>
            <NavLink className='mx-2 p-2 rounded-md' to="/accion">
              Accion
            </NavLink>
            <NavLink className='mx-2 p-2 rounded-md' to="/comedia">
              Comedia
            </NavLink>
            <NavLink className='mx-2 p-2 rounded-md' to="/romance">
              Romance
            </NavLink>
        </nav>
    </div>
  )
}

export default Navbar