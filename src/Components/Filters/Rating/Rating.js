import React, { useState } from 'react';
import StarRating from "./StarRating.js";
import "./rating.css";


const Notation = ({ films, setFilmsFilteredFinal }) => {

  const [rating, setRating] = useState();


const handleFilmByRate = (value) => {  
    
    const moviesByRate =  films
            .filter((film) => {
              return(film.vote_average >= value)
            })
            setFilmsFilteredFinal(moviesByRate)

}

  return (
    <div>
          <p className="ratingChoice">Rate : </p>
          <StarRating handleFilmByRate={handleFilmByRate} setRating={setRating} rating={rating}  />
    </div>
  );
};

export default Notation;