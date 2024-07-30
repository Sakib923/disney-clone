import React from 'react'
import GenersList from './../constants/GenersList';
import MovieList from './../components/MovieList';

function GenreMovieList() {
  return (
    <div>
        {GenersList.genere.map((item, index) => index<=4 && (
          <div>
            <div key={index} className="p-8 px-8 md:px-16">

              <h2 className="text-[20px] text-white font-bold"  >
                {item.name} 
              </h2>
              
              

            </div>
            
            < MovieList genereId={item.id} />
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList