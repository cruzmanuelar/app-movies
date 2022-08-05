import { useState } from 'react'

const useBusqueda = ({peliculas, genero}) => {

    const [busqueda, setBusqueda] = useState('');

    const pelicula = peliculas.filter((pel) => pel.genres.includes(genero));

    const nombreGenero = ({ target }) =>{

        setBusqueda(target.value.toLowerCase());
    }

    const filtrarPelicula = () => {
        const filtrado = pelicula.filter( gen => gen.name.toLowerCase().includes(busqueda));
        return filtrado;
    }

    return {
        nombreGenero,
        filtrarPelicula
    }
}

export default useBusqueda