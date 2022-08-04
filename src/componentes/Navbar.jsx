import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-[#18181b] text-white p-3 items-center justify-between sticky top-0 z-30' style={{fontSize:'1.2vw'}}>

        <ul className='flex flex-wrap items-center justify-center bg-[#18181b]'>
            <Link to="/">
              <li className='mx-3'>PeliApp</li>
            </Link>
            <Link to="/terror">
              <li className='mx-3'>Terror</li>
            </Link>
            <Link to="/drama">
              <li className='mx-3'>Drama</li>
            </Link>
            <Link to="/accion">
              <li className='mx-3'>Accion</li>
            </Link>
            <Link to="/comedia">
              <li className='mx-3'>Comedia</li>
            </Link>
            <Link to="/romance">
              <li className='mx-3'>Romance</li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar