import React from 'react'

const PeliculaLateral = ({peli}) => {
  return (
    <div className='flex flex-col text-center text-white'>
        <h1 className='bg-[#18181b] rounded-t-sm'>{peli.name}</h1>
        {/* <img src={peli.image.medium}/> */}
    </div>
  )
}

export default PeliculaLateral