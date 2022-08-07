import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiFillCalendar } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { GiUsaFlag } from 'react-icons/gi';
import { MdAccessTimeFilled } from 'react-icons/md';
import Sugeridas from './Sugeridas';
import LoadingSpin from "react-loading-spin";

const Pelicula = () => {

    const [pelicula, setPelicula] = useState();

    const { id } = useParams();


    const getPelicula = async () => {
        
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data = await response.json()
        setPelicula(data);
    }

    useEffect(() => {

        getPelicula();

    },[id])

    return (
        <div className='py-3 w-full flex items-center justify-center'>

            {pelicula?
                <div className='w-1/1 md:w-9/12 h-full bg-[#18181b] mx-2 rounded-md text-white'>

                        <div className='flex flex-col md:flex-row p-2 my-auto'>

                            <h2 className='text-center font-semibold text-3xl my-2 md:text-left md:hidden'>{pelicula.name}</h2>
                            
                            <img className='w-1/1 sm:w-1/1 md:w-1/3 rounded-md' src={pelicula.image.original} alt={pelicula.name}/>
                        
                            <div className='flex flex-col p-3'>

                                <h2 className='hidden md:flex text-center font-semibold text-3xl my-2 md:text-left'>{pelicula.name}</h2>

                                <div className='flex text-left items-center my-2 select-none'>
                                    <AiFillStar className='inline-block' size={20} color='yellow'/>{' '} {pelicula.rating.average}/10
                                </div>
                                <p className='text-justify my-2'>
                                    <strong>Resume: </strong>{pelicula.summary.replaceAll('<b>','').replaceAll('</b>','').replaceAll('</p>','').replaceAll('<i>','').replaceAll('</i>','').replaceAll('<p>','').replaceAll('<br />','')}
                                    
                                </p>

                                <div className='flex items-center select-none'  style={{fontSize:'1vw'}}>
                                    <p>{pelicula.genres.map(gn=> <span key={gn} className='rounded-full mr-1 px-2 text-sm text-white bg-blue-600'>{gn}</span>)}</p>
                                </div>

                                <div className='flex text-left items-center mt-2 mb-1'>
                                    <AiFillCalendar className='inline-block mr-1' color='white' size={20}/>{pelicula.premiered}
                                    
                                </div>
                                
                                <p className='select-none my-1'>Language: {pelicula.language === 'English'
                                    ?<GiUsaFlag className='inline-block' color='red'/>
                                    :
                                    <BsCircleFill  color='red' className='bg-[white] p-1 rounded-sm inline-block'/>
                                }</p>
                                <div className='my-1 flex items-center select-none'><MdAccessTimeFilled className='inline-block mr-1'/>{pelicula.averageRuntime} min (Average time per episode)</div>
                                
                            </div>
                        </div>
                        
                    </div>
                    :
                    <div className='w-1/1 md:w-9/12 h-full mx-2 flex justify-center items-center'>
                        <LoadingSpin primaryColor="black" width="8px"/>
                    </div>}

            <div className='hidden md:flex flex-wrap mx-1 md:w-3/12'>
                    <Sugeridas/>
            </div>
        </div>
    )
}

export default Pelicula