import React from 'react'
import useBusqueda from '../../hooks/useBusqueda';
import Encabezado from '../Encabezado';
import PeliculaPrevia from '../PeliculaPrevia';

const Accion = ({peliculas, genero}) => {

  const { nombreGenero, filtrarPelicula} = useBusqueda({peliculas, genero});

  return (
    <div className='h-100'>
      
      <Encabezado genero='Accion' nombreGenero={nombreGenero}/>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mx-4 mb-10 mt-14'>

      {filtrarPelicula().map(peli => (

        <PeliculaPrevia mov={peli} key={peli.id}/>

      ))
      }
    </div>

  </div>
  )
}

export default Accion