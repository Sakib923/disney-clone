import React from 'react'
import disney from '../assets/Images/disney.png'
import pixar from '../assets/Images/pixar.png'
import marvel from '../assets/Images/marvel.png'
import starwars from '../assets/Images/starwar.png'

import disneyV from '../assets/Videos/disney.mp4'
import pixarV from '../assets/Videos/pixar.mp4'
import marvelV from '../assets/Videos/marvel.mp4'
import starwarsV from '../assets/Videos/star-wars.mp4'

function ProductionHouse() {
    const productionHouseList = [
        {
            id: 1,
            name: "Disney",
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            name: "Pixar",
            image: pixar,
            video: pixarV
        },
        {
            id: 3,
            name: "Marvel",
            image: marvel,
            video: marvelV
        },
        {
            id: 4,
            name: "Star Wars",
            image: starwars,
            video: starwarsV
        }
    ]

    // Optimization needed !!!
    //--------------------------------
    // Optimization needed the video should be played on hover
    // The video should be played on hover and should be stopped when the mouse is out

    // Child should have a unique key prop created by rendom number generator
    // Video media keys should be invisible


  return (
    <div className="flex gap-2 md:gap-5 p-2 md:px-16">
        {productionHouseList.map((item, index) => (
            <div className="border-[2px] border-gray-600 rounded-lg  hover:scale-110
            transition-all duration-300 ease-in-out cursor-pointer relative shadow-x1 shadow-gray-800">
                <img className="w-full z[1] hover:opacity-100" src={item.image} alt={item.name} />
                <video className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50" 
                src={item.video} autoPlay loop playsInline muted  controls/>
            </div>

        ))}

    </div>
  )
}

export default ProductionHouse