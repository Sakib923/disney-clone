import React from 'react';
import { useState, useEffect, useRef } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi2';
import LargeMovieCard from './LargeMovieCard';

function MovieList({genereId, genereIndex}) {
    const [movieList, setMovieList] = useState([]);   
    const elementRef=useRef(null);
    const screenWidth = window.innerWidth;


    useEffect(() => {
        getMovieByGener();
    },[]);

    const getMovieByGener =() => {
        GlobalApi.getMovieByGenreId(genereId).then(resp =>{
            setMovieList(resp.data.results);
        })
    }
    
    const sliderLeft = (elementRef) => {
        elementRef.scrollLeft-= screenWidth-110;
    }
    
    const sliderRight = (elementRef) => {
        elementRef.scrollLeft+= screenWidth-110;
    }

    return (
        <div className="relative">
            <HiChevronLeft className={`text-white text-[50px] p-2 z-10 absolute mx-8 ${genereIndex%3 === 0 ? "mt-[100px]" : "mt-[150px]"} mt-[150px] 
                cursor-pointer scroll-smooth hidden md:block`} onClick={() => {sliderLeft(elementRef.current)}}/>

            <HiChevronRight className={`text-white text-[50px] p-2 z-10 absolute mx-8 ${genereIndex%3 === 0 ? "mt-[100px]" : "mt-[150px]"} mt-[150px]
                right-0 cursor-pointer scroll-smooth hidden md:block `}onClick={() => {sliderRight(elementRef.current)}}/>
            
            <div ref={elementRef} className="flex overflow-x-auto gap-8 scroll-smooth scrollbar-none pt-5 px-10 pb-5">
                {movieList.map((item, index) => (
                    <>
                        {genereIndex%3 === 0 ? <LargeMovieCard movie={item}/> : <MovieCard key={index} movie={item} />}
                    </>
                ))}
            </div>
        </div>
    )
}

export default MovieList;