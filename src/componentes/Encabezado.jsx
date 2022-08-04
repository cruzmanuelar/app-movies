import React from 'react'

const Encabezado = ({ genero, nombreGenero }) => {
  return (
    <div className='flex p-3 mx-4 items-center justify-between sticky top-12 z-10 bg-[#e0f2fe] z-20'>
        <h1 className='text-3xl font-semibold'>{genero}</h1>
        <input onChange={nombreGenero} className='mx-2 p-1 rounded-md border-2 border-[#18181b]' placeholder='Filtrar'/>
    </div>
  )
}

export default Encabezado