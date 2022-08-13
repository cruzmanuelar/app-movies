import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Sugeridas = () => {

    const navigate = useNavigate();

    const [sugerida, setSugerida] = useState([]);

    const getPeliculaUno = async () => {

        let inicio = Math.floor(Math.random() * 235);
        let fin = inicio + 4;
        const response = await fetch('https://api.tvmaze.com/shows')
        const data = await response.json()
        let dataFinal =  data.slice(inicio,fin)
        setSugerida(dataFinal);
    }

    useEffect(() => {
        getPeliculaUno();
    },[]);

    const cambiarPelicula = (id) => {
        navigate(`/movie/${id}`);
        getPeliculaUno();
    }
    
    return (
        <>
            {
                sugerida?
                sugerida.map(peli => (
                    <div key={peli.id} className='text-white text-center w-1/2 p-1'>
                        <h1 className='bg-[#18181b] rounded-t-sm text-sm'>{peli.name}</h1>
                        <img alt={peli.name} className='w-full' src={peli.image.medium}/>
                        <button
                        onClick={() => cambiarPelicula(peli.id)}
                        className='text-white w-full rounded-b-sm bg-[#52525b] hover:bg-[#18181b] hover:text-white duration-300'>Ver</button>
                    </div>
                ))
                :
                <p>j</p>
            }
        </>
    )
}

export default Sugeridas