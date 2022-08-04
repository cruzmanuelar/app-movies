import React from 'react';
import { useNavigate } from 'react-router-dom';

const PeliculaPrevia = ({mov}) => {

    const navigate = useNavigate();

  return (
        <div className='flex flex-col justify-center mx-1 md:mx-3 my-2 md:hover:my-0 hover:my-2 relative hover:scale-105 duration-200 z-10' key={mov.id}>

            <div className='text-center rounded-t-sm bg-[#18181b] text-white' >
                {mov.premiered.slice(0,4)}
            </div>

            <img alt={mov.name} className='' src={mov.image.medium}/>

            <div className='text-sm text-center rounded-b-md bg-[#52525b] text-white hover:bg-[#18181b]'>

                <div>
                    <p className='font-semibold my-1 h-10'>{mov.name}</p>
                </div>


                <div className="flex justify-center items-center absolute left-0 bottom-0 top-0 right-0 opacity-0 hover:opacity-100 duration-300">

                    <button className='bg-[#18181b] border-2 border-white p-2 opacity-100 rounded-md text-white w-1/2' onClick={() => navigate(`/movie/${mov.id}`)}>VER</button>
                        
                </div>
            </div>
  
        </div>
    )
}

export default PeliculaPrevia