import React, { useEffect, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi2';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

function Slider() {
    const [movieList, setMovieList] = React.useState([]);
    const elementRef = useRef();
    useEffect(() => {
        getTreadingMoviees();
    }, []);

    const getTreadingMoviees = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }
    const sliderRight = (elementRef) => {
        elementRef.scrollLeft+= 800;
    }
    const sliderLeft = (elementRef) => {
        elementRef.scrollLeft-= 800;
    }
  return (
    <div>
        <HiChevronLeft className="text-white text-[30px] absolute mx-8 mt-[150px] 
        cursor-pointer hidden md:block" onClick={() => {sliderLeft(elementRef.current)}}/>

        <HiChevronRight className="text-white text-[30px] absolute
         mx-8 mt-[150px] right-0 cursor-pointer hidden md:block" onClick={() => {sliderRight(elementRef.current)}}/>
    <div className="flex overflow-x-auto w-full px-16 
    py-4 scrollbar-none" ref={elementRef}>
        {movieList.map((item, index) => (
            <img key={index} src={IMAGE_BASE_URL + item.backdrop_path} alt="{item.title}" 
            className="min-w-full md:h-[310px] object-cover
            object-left-top mr-5 rounded-md"/>
        ))}
        </div>
    </div>
  )
}

export default Slider