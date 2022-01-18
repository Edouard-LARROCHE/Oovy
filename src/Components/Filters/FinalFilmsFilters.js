import React from 'react';
import Card from './Card.js';

const FinalFilmsFilters = ({
  filmsFilteredFinal,

  limit,
}) => {
  return (
    <div>
      <div className="filmList">
        {filmsFilteredFinal.slice(0, limit ? limit : filmsFilteredFinal.length).map((film, index) => (
          <Card
            key={index}
            original_title={film.original_title}
            poster_path={film.poster_path}
            overview={film.overview}
            vote_average={film.vote_average}
            release_date={film.release_date}
          />
        ))}
      </div>
    </div>
  );
};

export default FinalFilmsFilters;
