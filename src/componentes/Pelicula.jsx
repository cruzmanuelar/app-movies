import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const Pelicula = () => {

    const [pelicula, setPelicula] = useState()

    const { id } = useParams();

    const getPelicula = async () => {
        
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data = await response.json()
        setPelicula(data);
    }


    useEffect(() => {

        getPelicula();

    },[])

    return (
        <div className='p-3 w-full flex justify-center'>


            {pelicula?
                <div className='w-2/3 text-center'>

                        <h2 className='font-semibold text-3xl my-2'>{pelicula.name}</h2>
                        <div className='flex flex-col md:flex-row justify-center'>
                            
                            <img className='w-1/1 sm:w-1/2 md:w-1/3' src={pelicula.image.original} alt={pelicula.name}/>
                        
                            <div className='flex flex-col p-3'>
                                <p className='text-left'>Calificacion: {pelicula.rating.average}</p>
                                <p className='text-justify'>{pelicula.summary.replace('<b>','').replace('</b>','').replace('<p>','').replace('</p>','')}</p>
                            </div>
                        </div>
                        
                    </div>:<p>Nada</p>}


            <div className='hidden md:flex md:w-1/3'>
                Las sugeridas
            </div>
        </div>
    )
}

export default Pelicula