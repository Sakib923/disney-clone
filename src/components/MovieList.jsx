import React from 'react'
import { useState, useEffect, useRef } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';

function MovieList({genereId}) {
    const [movieList, setMovieList] = useState([]);   
    const elementRef=useRef(null);
    useEffect(() => {
        getMovieByGener();
    },[]);

    const getMovieByGener =() => {
        GlobalApi.getMovieByGenreId(genereId).then(resp =>{
            setMovieList(resp.data.results);
        })
    }

    return (
        <div className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5'>
            {movieList.map((item, index) => (
                    <MovieCard key={index} movie={item} />
                ))}
        </div>
    )

}

export default MovieList;


// import React, { useEffect, useRef, useState } from 'react'
// import GlobalApi from '../Services/GlobalApi'
// import MovieCard from './MovieCard';
// import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
// import HrMovieCard from './HrMovieCard';
// function MovieList({genreId,index_}) {
//     const [movieList,setMovieList]=useState([])
//     const elementRef=useRef(null);
//     useEffect(()=>{
//         getMovieByGenreId();
//     },[])

//     const getMovieByGenreId=()=>{
//         GlobalApi.getMovieByGenreId(genreId).then(resp=>{
//             // console.log(resp.data.results)
//             setMovieList(resp.data.results)
//         })
//     }

//     const slideRight=(element)=>{
//         element.scrollLeft+=500;
//     }
//     const slideLeft=(element)=>{
//         element.scrollLeft-=500;
//     }
//   return (
//     <div className='relative'>

//     <div ref={elementRef} className='flex overflow-x-auto gap-8
//      scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
//         {movieList.map((item,index)=>(
//            <>
//           {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
//            </> 
//         ))}
//     </div>
//     
//     </div>
//   )
// }

// export default MovieList