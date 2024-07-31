import React from 'react';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function LargeMovieCard({movie}) {
  return (
    <section className=" hover:scale-110 duration-150 ease-in transition-all ">
        <img src = {IMAGE_BASE_URL+movie.backdrop_path} alt={movie.title} 
          className='w-[180px] md:w-[300px] rounded-lg hover:border-[3px] border-gray-400 
           cursor-pointer'/>
        <h2 className="w-[180px] md:w-[300px] mt-2 text-white text-center">
            {movie.title}
        </h2>
    </section>
  )
}

export default LargeMovieCard;