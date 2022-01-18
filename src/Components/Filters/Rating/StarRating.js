import React, { useState } from 'react';
import "./starRating.css";
import { FaStar } from 'react-icons/fa';

const StarRating = ({ handleFilmByRate, rating, setRating }) => {
    const [hover, setHover] = useState(null);

    return (
        <div>
          {[...Array(8)].map((star, i) => {
           const ratingValue = i + 1;
            return (
              <label>
                <input type="radio" name="rating" value={ratingValue} onClick={(e) => {
                    handleFilmByRate(e.target.value)
                    setRating(e.target.value)
                }}  />

                <FaStar
                  className="star"
                  color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                  size={30}
                  onMouseEnter={(e) => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setRating(ratingValue)}
                />
              </label>
            );
          })}
        </div>
      );

};

export default StarRating;