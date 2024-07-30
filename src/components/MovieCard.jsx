import React from 'react';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {

  // => I faced a problem here
  //    1. When i was trying to return this component inside a <div> tag my images
  //        were becoming very small and all the images were shown (or attached) in a single line
  //        and that was unswipable
  //    2. So, i removed the <div> tag and returned the <img> tag directly inside an empty tag <>.

  return (
    <>
        <img src = {IMAGE_BASE_URL+movie.poster_path} alt={movie.title} 
        className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 
        hover:scale-110 duration-150 ease-in cursor-pointer transition-all'/>
    </>
  )
}

export default MovieCard