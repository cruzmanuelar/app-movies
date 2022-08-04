import React from 'react'

const Encabezado = ({ genero, nombreGenero }) => {

  return (
    <div className='flex my-1 p-1 px-3 pb-2 items-center justify-between top-12 bg-[#18181b] w-full z-20 text-white fixed'>
        <input onChange={nombreGenero} className='mx-1 w-full p-1 rounded-md border-2 border-[#18181b] text-black' placeholder={`Buscar en ${genero}`}/>
    </div>
  )
}

export default Encabezado