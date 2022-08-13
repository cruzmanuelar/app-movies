import React, { useState } from 'react';

const useSugerida = ({id}) => {

    let numero = Number(id);
    const [sugerido, setSugerido] = useState([]);
    const [excluyente, setExcluyente] = useState([17,36,85,113,119,121,135,173,223]);

    const obtenerPeliculas = () =>{

        setExcluyente(excluyente.push(numero));

        // let idPelicula = 113;
        let idPelicula = Math.floor(Math.random() * 223);

        let contiene = excluyente.includes(idPelicula);

        // while(sugerido.length <=2){
        //     if(contiene !== true){
        //         setSugerido(sugerido.push())
        //     }
        //     idPelicula = Math.floor(Math.random() * 223);
        //     contiene = excluyente.includes(idPelicula);
        // }

        let hola = 4;

        return {excluyente, contiene}
    }
 
    return {
        obtenerPeliculas
    }
}

export default useSugerida
