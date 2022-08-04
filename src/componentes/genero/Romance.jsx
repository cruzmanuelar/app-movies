import React, { useState } from 'react'
import useBusqueda from '../../hooks/useBusqueda';
import Encabezado from '../Encabezado';
import PeliculaPrevia from '../PeliculaPrevia';


const Romance = ({peliculas, genero}) => {

  const { nombreGenero, filtrarPelicula } = useBusqueda({peliculas, genero})


  return (
    <div className='bg-[#e0f2fe] h-100'>

      <Encabezado genero='Romance' nombreGenero={nombreGenero} />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mx-4 bg-[#e0f2fe] mb-10'>

        {filtrarPelicula().map(peli => (

          <PeliculaPrevia mov={peli} key={peli.id}/>

        ))
        }
      </div>

    </div>
  )
}

export default Romance